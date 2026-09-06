"use strict";

/*
 * Loads compiled/items.json + compiled/tags.json (built by build.py from
 * data.json - see CLAUDE.md) and renders the searchable, tag-filterable
 * list. Relies on search.js (loaded before this file) for matchQuery /
 * rankItems.
 *
 * Event handling is fully delegated: one listener per stable container,
 * attached once here at init, never re-attached per render. This is the
 * fix for the old event-listener leak (CLAUDE.md problem #2) - #results
 * and #selectedTags get rebuilt on every render, but the listener lives on
 * their unchanging parent, so rebuilding the children never touches it.
 */

const state = {
	items: [],
	selectedTags: [],
};

function main() {
	const searchInput = document.getElementById("searchInput");
	const resultsList = document.getElementById("results");
	const allTagsPanel = document.getElementById("allTags");
	const selectedTagsContainer = document.getElementById("selectedTags");
	const resultsNumber = document.getElementById("results-number");
	const resetButton = document.getElementById("resetButton");
	const sortAlphabeticallyCheckbox = document.getElementById("sortAlphabetically");

	function addSelectedTag(tag) {
		if (state.selectedTags.includes(tag)) return;
		state.selectedTags.push(tag);
		renderSelectedTags(selectedTagsContainer, state.selectedTags);
		renderResults();
	}

	function removeSelectedTag(tag) {
		state.selectedTags = state.selectedTags.filter((t) => t !== tag);
		renderSelectedTags(selectedTagsContainer, state.selectedTags);
		renderResults();
	}

	function renderResults() {
		const query = searchInput.value;
		const candidates =
			state.selectedTags.length === 0
				? state.items
				: state.items.filter((item) => state.selectedTags.every((tag) => item.tags.includes(tag)));

		let results = rankItems(query, candidates);
		if (sortAlphabeticallyCheckbox.checked) {
			results = [...results].sort((a, b) => a.name.localeCompare(b.name));
		}

		const fragment = document.createDocumentFragment();
		for (const item of results) {
			fragment.appendChild(buildResultItem(item));
		}
		resultsList.textContent = "";
		resultsList.appendChild(fragment);

		resultsNumber.textContent = `${results.length} results`;
	}

	// Delegated listeners, attached once. #results and #allTags both hold
	// ".tag" chips that add a tag filter when clicked; #selectedTags holds
	// the ".remove-tag" x buttons that remove one.
	function handleTagChipClick(event) {
		const tagEl = event.target.closest(".tag");
		if (!tagEl) return;
		addSelectedTag(tagEl.dataset.tag);
	}
	resultsList.addEventListener("click", handleTagChipClick);
	allTagsPanel.addEventListener("click", handleTagChipClick);

	selectedTagsContainer.addEventListener("click", (event) => {
		const removeEl = event.target.closest(".remove-tag");
		if (!removeEl) return;
		removeSelectedTag(removeEl.dataset.tag);
	});

	searchInput.addEventListener("input", renderResults);
	sortAlphabeticallyCheckbox.addEventListener("change", renderResults);

	resetButton.addEventListener("click", () => {
		searchInput.value = "";
		state.selectedTags = [];
		renderSelectedTags(selectedTagsContainer, state.selectedTags);
		renderResults();
	});

	loadData()
		.then(({ items, tags }) => {
			state.items = items;
			renderAllTags(allTagsPanel, tags);
			renderResults();
		})
		.catch((err) => {
			console.error(err);
			resultsNumber.textContent =
				"Failed to load compiled/items.json and compiled/tags.json. " +
				"If you opened this file directly (file://), fetch() of local files is blocked by most browsers - " +
				"serve the directory instead, e.g. `python3 -m http.server`, then open http://localhost:8000/.";
		});
}

async function loadData() {
	const [itemsResponse, tagsResponse] = await Promise.all([
		fetch("compiled/items.json"),
		fetch("compiled/tags.json"),
	]);
	if (!itemsResponse.ok) throw new Error(`compiled/items.json: HTTP ${itemsResponse.status}`);
	if (!tagsResponse.ok) throw new Error(`compiled/tags.json: HTTP ${tagsResponse.status}`);
	const [itemsPayload, tagsPayload] = await Promise.all([itemsResponse.json(), tagsResponse.json()]);
	return { items: itemsPayload.items, tags: tagsPayload.tags };
}

function buildResultItem(item) {
	const li = document.createElement("li");

	const strong = document.createElement("strong");
	strong.textContent = item.name;
	li.appendChild(strong);
	li.appendChild(document.createElement("br"));

	li.appendChild(document.createTextNode(item.description));
	li.appendChild(document.createElement("br"));

	const link = document.createElement("a");
	link.setAttribute("href", item.url);
	link.setAttribute("target", "_blank");
	link.setAttribute("rel", "noopener noreferrer");
	link.textContent = item.url;
	li.appendChild(link);
	li.appendChild(document.createElement("br"));

	li.appendChild(document.createTextNode("Tags: "));
	item.tags.forEach((tag, index) => {
		if (index > 0) li.appendChild(document.createTextNode(", "));
		li.appendChild(buildTagChip(tag));
	});

	return li;
}

function buildTagChip(tag) {
	const span = document.createElement("span");
	span.className = "tag";
	span.dataset.tag = tag;
	span.textContent = tag;
	return span;
}

function renderAllTags(container, tags) {
	const fragment = document.createDocumentFragment();
	for (const tag of tags) {
		fragment.appendChild(buildTagChip(tag));
	}
	container.textContent = "";
	container.appendChild(fragment);
}

function renderSelectedTags(container, selectedTags) {
	const fragment = document.createDocumentFragment();
	for (const tag of selectedTags) {
		const tagEl = document.createElement("div");
		tagEl.className = "selected-tag";

		const label = document.createElement("span");
		label.textContent = tag;
		tagEl.appendChild(label);

		const remove = document.createElement("span");
		remove.className = "remove-tag";
		remove.dataset.tag = tag;
		remove.textContent = "×";
		tagEl.appendChild(remove);

		fragment.appendChild(tagEl);
	}
	container.textContent = "";
	container.appendChild(fragment);
}

main();
