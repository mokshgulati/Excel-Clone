// new open save elements on the menu bar
let newIcon = document.querySelector(".new_icon");
let openIcon = document.querySelector(".open_icon");
let saveIcon = document.querySelector(".save_icon");
//  it's the input element that takes files as input
let openFile = document.querySelector(".open_file");

// creates a new empty document of excel
newIcon.addEventListener("click", function () {
    // seting database to empty
    sheetsDb = [];
    // taking db to its initial state
    generateDb();
    db = sheetsDb[0];

    // map UI -> according to db
    setUI();

    configureSheetBar();
})

function configureSheetBar() {
    sheetsList.innerHTML = "";
    for(let i=0;i<sheetsDb.length;i++){
        sheetButtonAdder();
    }
    sheetsList.children[0].click();
}

// click -> to download a json file of the database
saveIcon.addEventListener("click", function (e) {
    // encodes the data of the database by converting into first json string and then into utf-8 sequences
    let stringCode = encodeURIComponent(JSON.stringify(sheetsDb));
    let data = "data:text/json;charset=utf-8," + stringCode;

    // creating an anchor element that downloads file when clicked
    let a = document.createElement("a");
    a.href = data;
    a.download = "file.json";

    // anchor click
    a.click();
})

// click -> to open popup to take input (file)
openIcon.addEventListener("click", (e) => {
    openFile.click();
})

// after we select a file as input, this happens
openFile.addEventListener("change", function (e) {
    // files are collected in the form of an array
    let files = openFile.files;
    // first file from the files array
    let file = files[0];

    // file reader to load file
    let fileReader = new FileReader();
    fileReader.readAsText(file);
    fileReader.addEventListener("load", (event) => {
        // data in the file => event.tarhet.result
        let jsonData = JSON.parse(event.target.result);
        sheetsDb = jsonData;
        db = sheetsDb[0];
        setUI();
        configureSheetBar();
    })
})