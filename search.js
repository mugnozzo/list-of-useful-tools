"use strict";

/*
 * Ordered-subsequence fuzzy matching with ranking (fzf-style), run against
 * the `search` field precomputed by build.py (lowercased, whitespace-
 * normalized name + description + tags - see CLAUDE.md "Fast fuzzy search").
 *
 * Pure, DOM-free logic on purpose: script.js consumes it as a plain global
 * script (loaded before script.js in index.html), and tests/search.test.js
 * requires() it directly under Node. No build step, no bundler.
 */

/**
 * Match a single (already-lowercased) query against a single
 * (already-lowercase) haystack. Returns a match-quality descriptor, or
 * `null` if the query's characters don't all appear in the haystack in
 * order.
 *
 * Two paths, cheapest/best first:
 *  1. Plain substring match (native String#indexOf) - the common case,
 *     and always at least as good a match as any scattered subsequence
 *     could be, so it's tried first.
 *  2. Fallback: an ordered-subsequence scan - a single linear pass over
 *     the haystack with two pointers, no backtracking, no regex. Every
 *     query character must appear in the haystack in order, not
 *     necessarily contiguously.
 */
function matchQuery(query, haystack) {
	if (query.length === 0) {
		return { isContiguous: true, firstIndex: 0, span: 0 };
	}

	const substringIndex = haystack.indexOf(query);
	if (substringIndex !== -1) {
		return { isContiguous: true, firstIndex: substringIndex, span: query.length };
	}

	let qi = 0;
	let firstIndex = -1;
	let lastIndex = -1;
	for (let hi = 0; hi < haystack.length && qi < query.length; hi++) {
		if (haystack[hi] === query[qi]) {
			if (firstIndex === -1) firstIndex = hi;
			lastIndex = hi;
			qi += 1;
		}
	}
	if (qi < query.length) {
		return null;
	}
	return { isContiguous: false, firstIndex, span: lastIndex - firstIndex + 1 };
}

/**
 * Ordering comparator for two `{ item, match }` pairs, best match first:
 *   1. contiguous/substring matches rank above scattered-subsequence ones
 *   2. an earlier match start (closer to the front of `search`, i.e.
 *      closer to the item's name) ranks higher
 *   3. a tighter span between the first and last matched character ranks
 *      higher
 *   4. tie-break alphabetically by name, for stability
 */
function compareMatches(a, b) {
	if (a.match.isContiguous !== b.match.isContiguous) {
		return a.match.isContiguous ? -1 : 1;
	}
	if (a.match.firstIndex !== b.match.firstIndex) {
		return a.match.firstIndex - b.match.firstIndex;
	}
	if (a.match.span !== b.match.span) {
		return a.match.span - b.match.span;
	}
	return a.item.name.localeCompare(b.item.name);
}

/**
 * Filter + rank `items` (each with a precomputed lowercase `.search`
 * field) against a raw, not-yet-lowercased query. Returns the matching
 * items, best match first. A single full pass over `items` per call - no
 * debounce needed at this dataset size (see CLAUDE.md).
 */
function rankItems(rawQuery, items) {
	const query = rawQuery.trim().toLowerCase();
	const matched = [];
	for (const item of items) {
		const match = matchQuery(query, item.search);
		if (match !== null) {
			matched.push({ item, match });
		}
	}
	matched.sort(compareMatches);
	return matched.map((entry) => entry.item);
}

if (typeof module !== "undefined" && module.exports) {
	module.exports = { matchQuery, compareMatches, rankItems };
}
