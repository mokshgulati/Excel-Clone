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
let firstCell = document.querySelector(".proper_cell[rId='1'][cId='1']");

// data base
let sheetsDb = [];

// putting initial values in the database
function generateDb() {
    // default value in database (set for every cell)
    let db = [];
    for (let i = 0; i <= 100; i++) {
        let dbRow = [];
        for (let j = 0; j <= 26; j++) {
            let cellObj = {
                fontFamily: "Courier New",
                fontSize: 16,
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
    sheetsDb.push(db);
}

// initialize database to its initial value
generateDb();
let db = sheetsDb[0];

// getting rId and cId from cell address
function getRidCidFromAddress(address) {
    let cId = address.charCodeAt(0) - 65 + 1;
    let rId = Number(address.substring(1));

    return { rId: rId, cId: cId }
}

// sets all the properties on the UI with matching rId and cId (from db -> UI)
function setUI() {
    for (let i = 1; i <= 100; i++) {
        for (let j = 1; j <= 26; j++) {
            let cellObj = db[i][j];
            let cellToBeChanged = document.querySelector(`.proper_cell[rId='${i}'][cId='${j}']`);
            // cell properties
            cellToBeChanged.innerText = cellObj.value;
            cellToBeChanged.style.color = cellObj.color;
            cellToBeChanged.style.backgroundColor = cellObj.bgColor;
            cellToBeChanged.style.fontFamily = cellObj.fontFamily;
            cellToBeChanged.style.textAlign = cellObj.textAlign;
            cellToBeChanged.style.fontSize = cellObj.fontSize;
            cellToBeChanged.style.fontWeight = cellObj.bold == true ? "bold" : "normal";
            cellToBeChanged.style.fontStyle = cellObj.italic == true ? "italic" : "normal";
            cellToBeChanged.style.textDecoration = cellObj.underline == true ? "underline" : "none";
        }
    }
}