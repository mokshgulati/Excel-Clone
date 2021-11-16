// elements for putting color to cell text
let textColorIcon = document.querySelector(".textColor_icon");
let textColor = document.querySelector(".text_color");
// elements for putting color into cell background
let bgColorIcon = document.querySelector(".backgroundColor_icon");
let bgColor = document.querySelector(".bg_color");

// elements for font styling -> bold / italic / underline
let boldIcon = document.querySelector(".bold_icon");
let italicIcon = document.querySelector(".italic_icon");
let underlineIcon = document.querySelector(".underline_icon");

// clicking text color icon
textColorIcon.addEventListener("click", function (e) {
    // hidden click target (takes input)
    textColor.click();
})

// clicking background color icon
bgColorIcon.addEventListener("click", (e) => {
    // hidden click target (takes input)
    bgColor.click();
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

// after choosing color for cell background (from color input box)
bgColor.addEventListener("change", (e) => {
    let colorValue = textColor.value;
    let addressValue = address.value;

    // selected cell address (rId, cId)
    let { rId, cId } = getRidCidFromAddress(addressValue);

    // change -> on UI
    let cellUnderConsideration = document.querySelector(`.proper_cell[rId='${rId}'][cId='${cId}']`);
    cellUnderConsideration.style.backgroundcolor = colorValue;

    // change -> in Database
    db[rId][cId].bgColor = colorValue;
})

