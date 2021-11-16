//data base
let db = [];
// initialize database to its initial value
initDB();

function initDB(){
    // default value in database (set for every cell)
    for (let i = 0; i <= 100; i++) {
        let dbRow = [];
        for(let j=0;j<=26;j++){
            let cellObj = {
                fontFamily : "Courier New",
                fontSize : "12",
                textAlign : "center",
                color : "black",
                bgColor : "white",
                italic : "false",
                underline : "false",
                bold : "false",
                value : ""
            }
            dbRow.push(cellObj);
        }
        db.push(dbRow);
    }
}