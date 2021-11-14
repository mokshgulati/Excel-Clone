let alphabeticHeadingRow = document.querySelector(".alphabetic_heading_row");
let leftCol = document.querySelector(".left_col");
let gridItself = document.querySelector(".grid_itself");

for (let i = 1; i <= 26; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "alphabetic_cell");
    div.textContent = String.fromCharCode(64 + i);
    alphabeticHeadingRow.appendChild(div);
}

for(let i=1;i<=100;i++){
    let div = document.createElement("div");
    div.setAttribute("class", "numbering_cell");
    div.textContent = i;
    leftCol.appendChild(div);
}

for(let i=1;i<=100;i++){
    let div = document.createElement("div");
    div.setAttribute("class", "cell_row");
    for(let j=1;j<=26;j++){
        let cell = document.createElement("div");
        cell.setAttribute("class", "proper_cell");
        div.appendChild(cell);
    }
    gridItself.appendChild(div);
}