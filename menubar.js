/****************************** COLOR TOOLS IN MENU ************************************/

// elements for putting color to cell text
let textColorIcon = document.querySelector(".textColor_icon");
let textColor = document.querySelector(".text_color");
// elements for putting color into cell background
let bgColorIcon = document.querySelector(".backgroundColor_icon");
let bgColor = document.querySelector(".bg_color");

// clicking text color icon
textColorIcon.addEventListener("click", function (e) {
    // hidden click target (takes input)
    textColor.click();
})

// after choosing color for cell text (from color input box)
textColor.addEventListener("change", function (e) {
    let colorValue = textColor.value;
    let addressValue = address.value;

    // selected cell address (rId, cId)
    let rIdcIdObj = getRidCidFromAddress(addressValue);
    let rId = rIdcIdObj.rId;
    let cId = rIdcIdObj.cId;

    // change -> on UI
    let cellUnderConsideration = document.querySelector(`.proper_cell[rId='${rId}'][cId='${cId}']`);
    cellUnderConsideration.style.color = colorValue;

    // change -> in Database
    db[rId][cId].color = colorValue;
})

// clicking background color icon
bgColorIcon.addEventListener("click", (e) => {
    // hidden click target (takes input)
    bgColor.click();
})

// after choosing color for cell background (from color input box)
bgColor.addEventListener("change", (e) => {
    let colorValue = bgColor.value;
    let addressValue = address.value;

    // selected cell address (rId, cId)
    let { rId, cId } = getRidCidFromAddress(addressValue);

    // change -> on UI
    let cellUnderConsideration = document.querySelector(`.proper_cell[rId='${rId}'][cId='${cId}']`);
    cellUnderConsideration.style.backgroundColor = colorValue;

    // change -> in Database
    db[rId][cId].bgColor = colorValue;
})


/**************************** FONT STYLE TOOLS IN MENU *********************************/

// elements for font styling -> bold / italic / underline
let boldIcon = document.querySelector(".bold_icon");
let italicIcon = document.querySelector(".italic_icon");
let underlineIcon = document.querySelector(".underline_icon");

// clicking bold icon
boldIcon.addEventListener("click", function (e) {
    let addressValue = address.value;
    let { rId, cId } = getRidCidFromAddress(addressValue);

    // cell to be edited on UI
    let cellUnderConsideration = document.querySelector(`.proper_cell[rId='${rId}'][cId='${cId}']`);
    // database of that cell
    let cellObj = db[rId][cId];

    if (cellObj.bold == true) {
        // change into database
        cellObj.bold = false;
        // change icon appereance
        boldIcon.classList.remove("selected");
        // bring change to UI
        cellUnderConsideration.style.fontWeight = "normal";
    } else {
        cellObj.bold = true;
        boldIcon.classList.add("selected");
        cellUnderConsideration.style.fontWeight = "bold";
    }
})

// clicking italic icon
italicIcon.addEventListener("click", function (e) {
    let addressValue = address.value;
    let { rId, cId } = getRidCidFromAddress(addressValue);

    // cell to be edited on UI
    let cellUnderConsideration = document.querySelector(`.proper_cell[rId='${rId}'][cId='${cId}']`);
    // database of that cell
    let cellObj = db[rId][cId];

    if (cellObj.italic == true) {
        // change into database
        cellObj.italic = false;
        // change icon appereance
        italicIcon.classList.remove("selected");
        // bring change to UI
        cellUnderConsideration.style.fontStyle = "italic";
    } else {
        cellObj.italic = true;
        italicIcon.classList.add("selected");
        cellUnderConsideration.style.fontStyle = "italic";
    }
})

// clicking underline icon
underlineIcon.addEventListener("click", function (e) {
    let addressValue = address.value;
    let { rId, cId } = getRidCidFromAddress(addressValue);

    // cell to be edited on UI
    let cellUnderConsideration = document.querySelector(`.proper_cell[rId='${rId}'][cId='${cId}']`);
    // database of that cell
    let cellObj = db[rId][cId];

    if (cellObj.underline == true) {
        // change into database
        cellObj.underline = false;
        // change icon appereance
        underlineIcon.classList.remove("selected");
        // bring change to UI
        cellUnderConsideration.style.textDecoration = "none";
    } else {
        cellObj.underline = true;
        underlineIcon.classList.add("selected");
        cellUnderConsideration.style.textDecoration = "underline";
    }
})


/******************************* FONT SIZE IN MENU *************************************/

// drop down element of font size
let fontSize = document.querySelector(".font_size");

// changing font size
fontSize.addEventListener("change", (e) => {
    let fontSizeValue = fontSize.value;

    let addressValue = address.value;
    let { rId, cId } = getRidCidFromAddress(addressValue);

    // cell to be edited on UI
    let cellUnderConsideration = document.querySelector(`.proper_cell[rId='${rId}'][cId='${cId}']`);
    // database of that cell
    let cellObj = db[rId][cId];

    // bring change to UI
    cellUnderConsideration.style.fontSize = fontSizeValue + "px";
    // change into database
    cellObj.fontSize = fontSizeValue;
})


/******************************* FONT FAMILY IN MENU *************************************/

// drop down element of font family
let fontFamily = document.querySelector(".font_family");

// changing font family
fontFamily.addEventListener("change", (e) => {
    let fontFamilyValue = fontFamily.value;

    let addressValue = address.value;
    let { rId, cId } = getRidCidFromAddress(addressValue);

    // cell to be edited on UI
    let cellUnderConsideration = document.querySelector(`.proper_cell[rId='${rId}'][cId='${cId}']`);
    // database of that cell
    let cellObj = db[rId][cId];

    // bring change to UI
    cellUnderConsideration.style.fontFamily = fontFamilyValue;
    // change into database
    cellObj.fontFamily = fontFamilyValue;
})


/***************************** TEXT ALIGNMENT IN MENU ************************************/

// element -> text alignment toolbar
let textAlignmentToolBox = document.querySelector(".textAlignment_container");

// clicking any alignment icon
textAlignmentToolBox.addEventListener("click", function (e) {
    // alignment icon clicked
    let textAlign = e.target;

    if (textAlign != textAlignmentToolBox) {
        // showing which icon is selected
        let alignmentArr = textAlignmentToolBox.children;
        for (let i = 0; i < alignmentArr.length; i++) {
            alignmentArr[i].classList.remove("selected");
        }
        textAlign.classList.add("selected");

        // type of alignment
        let alignment = textAlign.classList[3];

        // extracting rId, cId from address
        let addressValue = address.value;
        let { rId, cId } = getRidCidFromAddress(addressValue);

        // change on UI (cell)
        let cellUnderConsideration = document.querySelector(`.proper_cell[rId='${rId}'][cId='${cId}']`);
        cellUnderConsideration.style.textAlign = alignment;

        // changing the database value for that cell
        let cellObj = db[rId][cId];
        cellObj.textAlign = alignment;
    }
})