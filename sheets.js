let addSheetButton = document.querySelector(".add_sheet_button");
let sheetsList = document.querySelector(".sheets_list");
let sheet = document.querySelector(".pSheet");

sheet.addEventListener("click", () => {
    for (let i = 0; i < sheetsList.children.length; i++) {
        sheetsList.children[i].classList.remove("active_sheet");
    }
    sheet.classList.add("active_sheet");

    db = sheetsDb[0];
    setUI();
    
    firstCell.click();
    firstCell.focus();
})

addSheetButton.addEventListener("click", sheetAdder);

function sheetAdder() {
    generateDb();

    let noOfChildren = sheetsList.children.length;

    let newSheet = document.createElement("div");
    newSheet.setAttribute("class", "sheet");
    newSheet.setAttribute("sheetId", noOfChildren + 1);
    newSheet.textContent = `Sheet ${noOfChildren + 1}`;
    sheetsList.appendChild(newSheet);

    newSheet.addEventListener("click", () => {
        for (let i = 0; i < sheetsList.children.length; i++) {
            sheetsList.children[i].classList.remove("active_sheet");
        }
        newSheet.classList.add("active_sheet");

        let idx = parseInt(newSheet.getAttribute("sheetId"));
        db = sheetsDb[idx - 1];
        setUI();
        
        firstCell.click();
        firstCell.focus();    
    })

    newSheet.click();
}

function sheetButtonAdder() {
    let noOfChildren = sheetsList.children.length;

    let newSheet = document.createElement("div");
    newSheet.setAttribute("class", "sheet");
    newSheet.setAttribute("sheetId", noOfChildren + 1);
    newSheet.textContent = `Sheet ${noOfChildren + 1}`;
    sheetsList.appendChild(newSheet);

    newSheet.addEventListener("click", () => {
        for (let i = 0; i < sheetsList.children.length; i++) {
            sheetsList.children[i].classList.remove("active_sheet");
        }
        newSheet.classList.add("active_sheet");

        let idx = parseInt(newSheet.getAttribute("sheetId"));
        db = sheetsDb[idx - 1];
        setUI();
        
        firstCell.click();
        firstCell.focus();    
    })
}