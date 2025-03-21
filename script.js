const grid = document.querySelector(".container");
for (let i = 0; i < 16; i++) {
    let row = document.createElement("div");
    row.classList.add("row")
    grid.appendChild(row);

    for (let j = 0; j < 16; j++) {
        let tile = document.createElement("div");
        tile.classList.add("tile")
        row.appendChild(tile);
    }   
}

const tiles = document.querySelectorAll(".tile");
tiles.forEach(tile => {
    tile.addEventListener("mouseover", () => {
        tile.style.backgroundColor = "black";
    });
    tile.addEventListener("mouseout", () => {
        tile.style.backgroundColor = "white";
    });
});
