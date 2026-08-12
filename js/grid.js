// Grid Logic

document.addEventListener("DOMContentLoaded", () => {
	console.log("Grid Logic");
	populateGrid();
});

function populateGrid() {
	const gridContainer = document.querySelector(".grid-container");
	for (let i = 0; i < 16; i++) {
		const button = document.createElement("button");
		button.className = "grid-button";
		button.id = `grid-button-${i+1}`;
		gridContainer.appendChild(button);
	}
}
