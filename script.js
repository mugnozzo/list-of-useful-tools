let selectedTags = [];
renderAllTags();
filterElements();

function filterElements() {
	const input = document.getElementById("searchInput").value.toLowerCase();
	const results = document.getElementById("results");

	// Clear existing results
	results.innerHTML = '';

	elements.forEach(element => {
		const isFuzzySearchEnabled = document.getElementById("fuzzySearch").checked;
		const matchFunction = isFuzzySearchEnabled ? fuzzyMatch : (a, b) => b.includes(a);
		console.log(input);
		console.log(element.name.toLowerCase());
		console.log(matchFunction(input, element.name.toLowerCase()));

		if ((matchFunction(input, element.name.toLowerCase()) ||
		matchFunction(input, element.description.toLowerCase()) ||
		element.tags.some(tag => matchFunction(input, tag.toLowerCase()))) &&
		(selectedTags.length === 0 || selectedTags.every(tag => element.tags.includes(tag)))) {
			const li = document.createElement("li");
			li.innerHTML = `
								<strong>${element.name}</strong><br>
								${element.description}<br>
								<a href="${element.url}" target="_blank">${element.url}</a><br>
								Tags: ${element.tags.map(tag => `<span class="tag" data-tag="${tag}">${tag}</span>`).join(", ")}
						`;
			results.appendChild(li);
		}
	});

	// Add event listeners to tags for filtering
	document.querySelectorAll(".tag").forEach(tagEl => {
		tagEl.addEventListener("click", function() {
			const tag = this.getAttribute("data-tag");
			if (!selectedTags.includes(tag)) {
				selectedTags.push(tag);
				renderSelectedTags();
				filterElements();
			}
		});
	});
}

function renderSelectedTags() {
	const container = document.getElementById("selectedTags");
	container.innerHTML = '';
	selectedTags.forEach(tag => {
		const tagEl = document.createElement("div");
		tagEl.className = "selected-tag";
		tagEl.innerHTML = `
						<span>${tag}</span><span class="remove-tag" data-tag="${tag}">X</span>
				`;
		container.appendChild(tagEl);
	});

	// Add event listeners to the remove buttons
	document.querySelectorAll(".remove-tag").forEach(removeEl => {
		removeEl.addEventListener("click", function() {
			const tag = this.getAttribute("data-tag");
			selectedTags = selectedTags.filter(t => t !== tag);
			renderSelectedTags();
			filterElements();
		});
	});
}

function renderAllTags() {
    const allTags = getAllUniqueTags();
    const tagsContainer = document.getElementById('allTags');
    tagsContainer.innerHTML = '';
    allTags.forEach(tag => {
        const tagEl = document.createElement("span");
        tagEl.className = 'tag';
        tagEl.setAttribute('data-tag', tag);
        tagEl.textContent = tag;
        tagsContainer.appendChild(tagEl);
    });

    // Add event listeners to these tags for filtering
    document.querySelectorAll("#allTags .tag").forEach(tagEl => {
        tagEl.addEventListener("click", function() {
            const tag = this.getAttribute("data-tag");
            if (!selectedTags.includes(tag)) {
                selectedTags.push(tag);
                renderSelectedTags();
                filterElements();
            }
        });
    });
}

function fuzzyMatch(pattern, str) {
    pattern = '.*' + pattern.split('').join('.*') + '.*';
    return new RegExp(pattern).test(str);
}
