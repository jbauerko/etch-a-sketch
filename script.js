const grid = document.querySelector(".container");

grid.addEventListener("delete", () => {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
});

function generateGrid(size) {
    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        grid.appendChild(row);
    
        for (let j = 0; j < size; j++) {
            let tile = document.createElement("div");
            tile.classList.add("tile");
            tile.addEventListener("mouseover", () => {
                tile.style.backgroundColor = "black";
            });
            tile.addEventListener("mouseout", () => {
                tile.style.backgroundColor = "white";
            });
            row.appendChild(tile);
        }
    }
}

const button = document.querySelector("button");
button.addEventListener("click", () => {
    let grid_size = prompt("Enter grid size: ");
    if (grid_size > 100) {
        alert("That's too large!");
    } else {
        let delete_event = new CustomEvent("delete");
        grid.dispatchEvent(delete_event);
        generateGrid(grid_size);  
    }
});








