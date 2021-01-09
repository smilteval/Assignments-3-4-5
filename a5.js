//user story 1 
function addRow(){
    let grid = document.querySelector("tbody");

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