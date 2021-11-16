// elements
let alphabeticHeadingRow = document.querySelector(".alphabetic_heading_row");
let leftCol = document.querySelector(".left_col");
let gridItself = document.querySelector(".grid_itself");
let firstCell = document.querySelector(`.proper_cell[rId='1'][cId='1']`);

//  address element -> contains address of selected cell
let address = document.querySelector(".address");

// clicking first cell at load
// firstCell.click();
// firstCell.focus();

// alphabetic head row
for (let i = 1; i <= 26; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "alphabetic_cell");
    div.textContent = String.fromCharCode(64 + i);
    alphabeticHeadingRow.appendChild(div);
}

// numbered head col
for (let i = 1; i <= 100; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "numbering_cell");
    div.textContent = i;
    leftCol.appendChild(div);
}

// grid cells
for (let i = 1; i <= 100; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "cell_row");
    for (let j = 1; j <= 26; j++) {
        let cell = document.createElement("div");
        cell.setAttribute("class", "proper_cell");
        cell.setAttribute("contentEditable", "true");
        cell.setAttribute("rId", i);
        cell.setAttribute("cId", j);
        div.appendChild(cell);
    }
    gridItself.appendChild(div);
}