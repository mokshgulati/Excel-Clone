// array -> editable grid cells
let cell = document.querySelectorAll(".proper_cell");

// If any of the cell is clicked
for (let i = 0; i < cell.length; i++) {
    let clickedCell = cell[i];
    clickedCell.addEventListener("click", (e) => {

        // extracting rId and cId of the cell
        let rId = clickedCell.getAttribute("rId");
        let cId = clickedCell.getAttribute("cId");

        // string -> number (conversion)
        rId = Number(rId);
        cId = Number(cId);

        // converting rId, cId into address format and display on the address bar
        address.value = String.fromCharCode(64 + cId) + rId;

        // *********** 2-way binding ************
        // menu styling (bring from database to the UI)
        let cellObj = db[rId][cId];

        // font styling
        if(cellObj.bold){
            boldIcon.classList.add("selected");
        }
        if(cellObj.italic){
            italicIcon.classList.add("selected");
        }
        if(cellObj.underline){
            underlineIcon.classList.add("selected");
        }

        // formula display
        formula.value = cellObj.formula;
    })
}