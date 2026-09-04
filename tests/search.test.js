"use strict";
// Run with: node tests/search.test.js
const assert = require("node:assert");
const { matchQuery, rankItems } = require("../search.js");

let failures = 0;

function test(name, fn) {
	try {
		fn();
		console.log(`ok - ${name}`);
	} catch (err) {
		failures += 1;
		console.error(`FAIL - ${name}`);
		console.error(err);
	}
}

test("empty query matches everything, with equal rank", () => {
	const items = [
		{ name: "banana", search: "banana" },
		{ name: "apple", search: "apple" },
		{ name: "cherry", search: "cherry" },
	];
	const results = rankItems("", items);
	assert.strictEqual(results.length, 3);
	// equal match quality for every item -> falls through to the
	// alphabetical tie-break, so the output order is deterministic.
	assert.deepStrictEqual(results.map((r) => r.name), ["apple", "banana", "cherry"]);
});

test("no match returns nothing", () => {
	assert.strictEqual(matchQuery("xyz", "foo bar baz"), null);
	const items = [{ name: "foo", search: "foo bar baz" }];
	assert.deepStrictEqual(rankItems("xyz", items), []);
});

test("an exact-substring match outranks a scattered subsequence match", () => {
	const items = [
		{ name: "scattered", search: "c a t is here" }, // "cat" only as a scattered subsequence
		{ name: "exact", search: "the cat sat" }, // "cat" as a real substring
	];
	const results = rankItems("cat", items);
	assert.deepStrictEqual(results.map((r) => r.name), ["exact", "scattered"]);
});

test("case differences in the query still match", () => {
	const items = [{ name: "activitywatch", search: "activitywatch monitor your activity" }];
	assert.deepStrictEqual(rankItems("ACTIVITY", items).map((r) => r.name), ["activitywatch"]);
	assert.deepStrictEqual(rankItems("AcTiVity", items).map((r) => r.name), ["activitywatch"]);
});

test("matchQuery: non-contiguous subsequence match reports its full span", () => {
	const match = matchQuery("ace", "a b c d e");
	assert.notStrictEqual(match, null);
	assert.strictEqual(match.isContiguous, false);
	assert.strictEqual(match.firstIndex, 0);
	assert.strictEqual(match.span, "a b c d e".length);
});

test("matchQuery: substring match is contiguous with span === query length", () => {
	const match = matchQuery("cat", "the cat sat");
	assert.notStrictEqual(match, null);
	assert.strictEqual(match.isContiguous, true);
	assert.strictEqual(match.firstIndex, 4);
	assert.strictEqual(match.span, 3);
});

test("tag-filter-then-search combination still ranks by match quality", () => {
	// script.js filters by selectedTags before calling rankItems - this
	// just confirms rankItems itself doesn't care about tags, only `search`.
	const items = [
		{ name: "zzz-exact", search: "zzz-exact fzf substring match cli" },
		{ name: "aaa-scattered", search: "aaa-scattered f z f scattered match cli" },
	];
	const results = rankItems("fzf", items);
	assert.deepStrictEqual(results.map((r) => r.name), ["zzz-exact", "aaa-scattered"]);
});

if (failures > 0) {
	console.error(`\n${failures} test(s) failed`);
	process.exitCode = 1;
} else {
	console.log("\nall tests passed");
}
