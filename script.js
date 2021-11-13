let headRow = document.querySelector(".head_row");
for (let i = 0; i < 26; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "cell");
    div.textContent = String.fromCharCode(65 + i);
    headRow.appendChild(div);
}

let leftCol = document.querySelector(".left_col");
for (let i = 1; i <= 100; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "cell");
    div.textContent = i;
    leftCol.appendChild(div);
}

let grid = document.querySelector(".grid");
for (let i = 1; i <= 100; i++) {
    let row = document.createElement("div");
    row.setAttribute("class","row");
    for (let j = 1; j <= 26; j++) {
        let div = document.createElement("div");
        div.setAttribute("class","cell");
        div.setAttribute("contentEditable","true");
        div.setAttribute("rid",i);
        div.setAttribute("cid",j);
        row.appendChild(div);
    }
    grid.appendChild(row);
}

let addressBox = document.querySelector("address_box");
let allGridCells = document.querySelectorAll(".grid .cell");
for(let i=0;i<allGridCells.length;i++){

}