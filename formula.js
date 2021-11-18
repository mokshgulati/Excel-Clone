// formula input bar
let formula = document.querySelector(".formula");

// when enter is pressed in formula input bar after writing formula
formula.addEventListener("keydown", (e) => {
    if(e.key == "Enter" && formula.value !=""){
        // formula equation (String)
        let formulaValue = formula.value;

        // cell to be edited
        let addressValue = address.value;
        let {rId,cId} = getRidCidFromAddress(addressValue);

        // database of that cell
        let cellDatabase = db[rId][cId];

        // removing old links to the past formula from the database
        if(cellDatabase.formula != formulaValue){
            removeFormula(addressValue,cellDatabase.formula);
        }
        // putting new formula in there
        cellDatabase.formula = formulaValue;
        // setting the formula for that cell (for the formula to function)
        setFormula(addressValue,formulaValue);

        // changing UI appereance by displaying formula result on that cell
        let value = evaluateFormula(formulaValue);
        displayFormulaResultOnUI(value,rId,cId);
    }
})

// basically puts the cell address (that has the formula) into it's parent's database
function setFormula(address, formula){
    let formulaElements = formula.split(" ");

    for(let i=0;i<formulaElements.length;i++){
        let ascii = formulaElements[i].charCodeAt(0);
        if(ascii>=65 && ascii <=90){
            // extracting (parent) cell elements from formula
            let rIdcId = getRidCidFromAddress(formulaElements[i]);
            let parentObj = db[rIdcId.rId][rIdcId.cId];

            // making the link
            // putting the address of the cell (as a children) in it's parent's database
            parentObj.children.push(address);
        }
    }
}

// basically removes the cell address (that has the formula) from it's parent's database
function removeFormula(address, formula){
    let formulaElements = formula.split(" ");

    for(let i=0;i<formulaElements.length;i++){
        let ascii = formulaElements[i].charCodeAt(0);
        if(ascii>=65 && ascii <=90){
            // extracting (parent) cell elements from formula
            let rIdcId = getRidCidFromAddress(formulaElements[i]);
            let parentObj = db[rIdcId.rId][rIdcId.cId];
            
            // cutting off the link
            // removing the address of the cell from it's parent's database
            let idx = parentObj.children.indexOf(address);
            parentObj.children.splice(idx,1);
        }
    }
}

// calculates real value from formula string
function evaluateFormula(formula) {
    // ( A1 + B1 ) => [(,A1,+,B1,)]
    let formulaElements = formula.split(" ");

    for (let i = 0; i < formulaElements.length; i++) {
        // A1 -> (A) -> 65
        let ascii = formulaElements[i].charCodeAt(0);

        if (ascii >= 65 && ascii <= 90) {
            // address -> rId, cId
            let cellRidCid = getRidCidFromAddress(formulaElements[i]);
            // extract value from database
            let value = db[cellRidCid.rId][cellRidCid.cId];
            // replace in formula -> ( A1 + B1 ) => ( 10 + 20 )
            formula = formula.replace(formulaElements[i], value);
        }
    }

    // evaluate => eval (inbuilt function)
    let result = eval(formula);
    return result;
}

// displays formula result on UI
// this will update UI for cell -> child -> grandchild -> grand2child -> until the end.
function displayFormulaResultOnUI(val, rId, cId) {
    // updating cell value on UI
    let cell = document.querySelector(`.proper_cell[rId='${rId}'][cId='${cId}']`);
    cell.textContent = val;

    // updating cell value in cell database
    let cellDatabase = db[rId][cId];
    cellDatabase.value = val;

    // doing the same for all the cell children
    let cellChildrenArray = cellDatabase.children;
    for (let i = 0; i < cellChildrenArray.length; i++) {
        let child = cellChildrenArray[i];
        let childRidCid = getRidCidFromAddress(child);

        // child cell database
        let childDatabase = db[childRidCid.rId][childRidCid.cId];

        // evaluating formula for child
        let childFormula = childDatabase.formula;
        let value = evaluateFormula(childFormula);

        // display formula result on UI (for child)
        displayFormulaResultOnUI(value, childRidCid.rId, childRidCid.cId);
    }
}