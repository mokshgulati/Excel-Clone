// elements
let addSheetButton = document.querySelector(".add_sheet_button");
let sheetsList = document.querySelector(".sheets_list");
let sheet = document.querySelector(".pSheet");

// clicking first (primary) sheet button
sheet.addEventListener("click", () => {
    // highlights the button
    for (let i = 0; i < sheetsList.children.length; i++) {
        sheetsList.children[i].classList.remove("active_sheet");
    }
    sheet.classList.add("active_sheet");

    // first sheet database becomes active
    db = sheetsDb[0];
    // UI is set according to the database
    setUI();

    // first cell is clicked
    firstCell.click();
    firstCell.focus();
})

// clicking the plus button that creates new sheets
addSheetButton.addEventListener("click", () => {
    // generate a new database for a new sheet
    generateDb();

    let noOfChildren = sheetsList.children.length;
    // create new sheet button
    let newSheet = document.createElement("div");
    newSheet.setAttribute("class", "sheet");
    newSheet.setAttribute("sheetId", noOfChildren + 1);
    newSheet.textContent = `Sheet ${noOfChildren + 1}`;
    sheetsList.appendChild(newSheet);

    // adding click-event-listener to that sheet
    newSheet.addEventListener("click", () => {
        // highlights thats specific sheet button
        for (let i = 0; i < sheetsList.children.length; i++) {
            sheetsList.children[i].classList.remove("active_sheet");
        }
        newSheet.classList.add("active_sheet");

        // activating that sheet's database & bringing it to UI
        let idx = parseInt(newSheet.getAttribute("sheetId"));
        db = sheetsDb[idx - 1];
        setUI();

        // clicking first cell
        firstCell.click();
        firstCell.focus();
    })

    // clicking that new sheet
    newSheet.click();
});

// creates new sheet buttons when database is already there
function sheetButtonAdder() {

    let noOfChildren = sheetsList.children.length;
    // create new sheet button
    let newSheet = document.createElement("div");
    newSheet.setAttribute("class", "sheet");
    newSheet.setAttribute("sheetId", noOfChildren + 1);
    newSheet.textContent = `Sheet ${noOfChildren + 1}`;
    sheetsList.appendChild(newSheet);

    // adding click-event-listener to that sheet
    newSheet.addEventListener("click", () => {
        // highlights thats specific sheet button
        for (let i = 0; i < sheetsList.children.length; i++) {
            sheetsList.children[i].classList.remove("active_sheet");
        }
        newSheet.classList.add("active_sheet");

        // activating that sheet's database & bringing it to UI
        let idx = parseInt(newSheet.getAttribute("sheetId"));
        db = sheetsDb[idx - 1];
        setUI();

        // clicking first cell
        firstCell.click();
        firstCell.focus();
    })
}