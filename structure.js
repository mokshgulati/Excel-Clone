// elements
let alphabeticHeadingRow = document.querySelector(".alphabetic_heading_row");
let leftCol = document.querySelector(".left_col");
let gridItself = document.querySelector(".grid_itself");

//  address element -> contains address of selected cell
let address = document.querySelector(".address");

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

// array -> editable grid cells
let cell = document.querySelectorAll(".proper_cell");

// data base
let db = [];

// putting initial values in the database
function initDB() {
    // default value in database (set for every cell)
    for (let i = 0; i <= 100; i++) {
        let dbRow = [];
        for (let j = 0; j <= 26; j++) {
            let cellObj = {
                fontFamily: "Courier New",
                fontSize: 12,
                textAlign: "center",
                color: "black",
                bgColor: "white",
                italic: false,
                underline: false,
                bold: false,
                value: "",
                formula: "",
                children: []
            }
            dbRow.push(cellObj);
        }
        db.push(dbRow);
    }
}

// getting rId and cId from cell address
function getRidCidFromAddress(address) {
    let cId = address.charCodeAt(0) - 65 + 1;
    let rId = Number(address.substring(1));

    return { rId: rId, cId: cId }
}