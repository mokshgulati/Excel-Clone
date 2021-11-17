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

        // ****************** 2-way binding **********************

        // menu styling (bring from database to the UI)
        let cellObj = db[rId][cId];

        // font sizing
        let fontSizeValue = cellObj.fontSize;
        fontSize.value = fontSizeValue;

        // font styling
        // resetting the ground =>
        boldIcon.classList.remove("selected");
        italicIcon.classList.remove("selected");
        underlineIcon.classList.remove("selected");
        // making changes for that specific cell according to db =>
        if (cellObj.bold == true) {
            boldIcon.classList.add("selected");
        }
        if (cellObj.italic == true) {
            italicIcon.classList.add("selected");
        }
        if (cellObj.underline == true) {
            underlineIcon.classList.add("selected");
        }

        // text alignment
        // resetting the ground =>
        let alignmentArr = textAlignmentToolBox.children;
        for (let i = 0; i < alignmentArr.length; i++) {
            alignmentArr[i].classList.remove("selected");
        }
        // making changes for that specific cell according to db =>
        for (let i = 0; i < alignmentArr.length; i++) {
            let alignment = alignmentArr[i].classList[1];
            if (cellObj.textAlign == alignment) {
                alignmentArr[i].classList.add("selected");
            }
        }

        // formula display
        formula.value = cellObj.formula;
    })
}