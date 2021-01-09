let grid = document.querySelector("tbody");

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
        newRow.insertCell();
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
        row.insertCell();
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