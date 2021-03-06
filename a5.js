let grid = document.querySelector("tbody");
let selectedColor = " ";
let canApplyColor = false;

function initCells(cell){
    
    //adding a class of uncolored to every new cell
    cell.classList.add("uncolored");
    
    //adding an event listener to every cell
    
    //user story 6
    cell.addEventListener("click", changeColor);
    
    //user story 10
    cell.addEventListener("mousedown", e =>{
        canApplyColor = true;
    })
    cell.addEventListener("mousemove", e=>{
        //color while the mouse is clicked and moving
        if(canApplyColor){
            cell.style.backgroundColor = selectedColor;
            cell.classList.remove("uncolored");
        }
    })
    cell.addEventListener("mouseup", e=>{
        canApplyColor = false;
    })
}

//user story 1 

function addRow(){

    //add a row to the end of the grid
    let newRow = grid.insertRow();

    //Getting a number of cells to add to a row

    //get the first row
    let firstRow = document.querySelector("tr");
    //get a list of cells in that row
    let colList = firstRow.querySelectorAll("td");
    //turn it into an array
    let colArray = Array.from(colList);
    //get the length of the array
    let colNum = colArray.length;

    //filling the row with cells
    for(let i = 0; i < colNum; i++){
        let newCell = newRow.insertCell();

        //user story 6 
        initCells(newCell); //helper function
    }
}

//user story 2
function addColumn(){

    //get a list of rows
    let rowList = grid.querySelectorAll("tr");
    //turn it into an array
    let rowArray = Array.from(rowList);
    
    //for every row add a cell at the end of it
    rowArray.forEach(row=>{
        let newCell2 = row.insertCell();

        //user story 6
        initCells(newCell2);
    })
}

//user story 3
function removeRow(){
    
    //get the last row
    let lastRow = grid.lastElementChild;
    
    //remove it
    lastRow.remove();
}

//user story 4
function removeColumn(){

    //get a list of rows
    let rowList = grid.querySelectorAll("tr");
    //turn it into an array
    let rowArray = Array.from(rowList);
    
    //for every row, remove the last cell
    rowArray.forEach(row=>{
        row.lastElementChild.remove();
    })
}

//user story 6 

//saving the selected color from the dropdown menu
function selectColor(color){
    selectedColor = color;
}

//changing cell's color to the selected one
function changeColor(){
    if(selectedColor !== " "){
        this.style.backgroundColor = selectedColor;
        this.classList.remove("uncolored");
    }
    else{
        alert("please select a color");
    }
}

//user story 7

function fillAllUncolored(){

    if(selectedColor !== " "){
        //get a list of uncolored cells
        let uncoloredCells = document.getElementsByClassName("uncolored");
        //turn it into array
        uncoloredCells = Array.from(uncoloredCells);
        
        //change every uncolored cell's color to the selected one
        uncoloredCells.forEach(cell=>{
            cell.style.backgroundColor = selectedColor;
            cell.classList.remove("uncolored");
        })
    }
    else{
        alert("please select a color");
    }
}

//user story 8

function fillAll(){

    if(selectedColor !== " "){
        //get a list of all cells
        let allCells = document.getElementsByTagName("td");
        //turn it into array
        allCells = Array.from(allCells);

        allCells.forEach(cell=>{
            cell.style.backgroundColor = selectedColor;
            cell.classList.remove("uncolored");
        })
    }
    else{
        alert("please select a color");
    }
}

//user story 9

function clearAll(){
    
    //get a list of all cells
    let allCells = document.getElementsByTagName("td");
    //turn it into array
    allCells = Array.from(allCells);

    allCells.forEach(cell=>{
        cell.style.backgroundColor = null;
        cell.classList.add("uncolored");
    })
}
