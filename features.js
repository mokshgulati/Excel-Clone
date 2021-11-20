// If any of the cell is clicked
for (let i = 0; i < cell.length; i++) {
    let clickedCell = cell[i];
    clickedCell.addEventListener("click", (e) => {
        // stopping the highlighting of last clicked cell
        let prevAddress = address.value;
        if (prevAddress != "") {
            let { rId, cId } = getRidCidFromAddress(prevAddress);
            let prevCell = document.querySelector(`.proper_cell[rId='${rId}'][cId='${cId}']`);
            prevCell.style.borderRadius = "0px";
            prevCell.style.border = "0.02px solid rgb(160, 158, 158)"
            prevCell.style.borderLeft = "none";
            prevCell.style.borderTop = "none";
        }

        // extracting rId and cId of the cell
        let rId = clickedCell.getAttribute("rId");
        let cId = clickedCell.getAttribute("cId");

        // string -> number (conversion)
        rId = Number(rId);
        cId = Number(cId);

        // converting rId, cId into address format and display on the address bar
        address.value = String.fromCharCode(64 + cId) + rId;

        // highlighting the cell
        clickedCell.style.borderRadius = "4px";
        clickedCell.style.border = "2px solid green";

        // ****************** 2-way binding **********************

        // menu styling (bring from database to the UI)
        let cellObj = db[rId][cId];

        // font family
        let fontFamilyValue = cellObj.fontFamily;
        fontFamily.value = fontFamilyValue;

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
            let alignment = alignmentArr[i].classList[3];
            if (cellObj.textAlign == alignment) {
                alignmentArr[i].classList.add("selected");
            }
        }

        // formula display
        formula.value = cellObj.formula;
    })
}

// initialize database to its initial value
initDB();

// first cell
let firstCell = document.querySelector(".proper_cell[rId='1'][cId='1']");
// clicking first cell at load
firstCell.click();
firstCell.focus();