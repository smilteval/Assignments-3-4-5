// 1) Select the section with an id of container without using querySelector.

const container1 = document.getElementById("container");
console.log(container1); //testing



// 2) Select the section with an id of container using querySelector.

const container2 = document.querySelector("#container");
console.log(container2); //testing



// 3) Select all of the list items with a class of "second".

const listItemsSecond = document.querySelectorAll("li.second");
listItemsSecond.forEach(listItem => console.log(listItem)); //testing



// 4) Select a list item with a class of third, but only the list item inside of the ol tag.

const listItemThird = document.querySelectorAll("ol li.third");
listItemThird.forEach(listItem => console.log(listItem)); //testing



// 5) Give the section with an id of container the text "Hello!".

container1.append("Hello!"); //reusing container1 from part 1
//result is visible on the page



// 6) Add the class main to the div with a class of footer.

const divWithFooter = document.querySelector(".footer");
divWithFooter.classList.add("main");
console.log(divWithFooter); //testing



// 7) Remove the class main on the div with a class of footer.

divWithFooter.classList.remove("main"); //reusing divWithFooter from problem 6
console.log(divWithFooter); //testing



// 8) Create a new li element.

const newLiElement = document.createElement("li");
console.log(newLiElement); //testing



// 9) Give the li the text "four".

newLiElement.innerHTML = "four"; //reusing newLiElement from problem 8
//result is visible on the page



// 10) Append the li to the ul element.

const ulElement = document.querySelector("ul");
ulElement.append(newLiElement);
//result is visible on the page



// 12) Loop over all of the lis inside the ol tag and give them a background color of "green".

const lisInsideOl = document.querySelectorAll("ol li");
lisInsideOl.forEach(li => {
    li.style.backgroundColor ="green";
})
//result is visible on the page



// 13) Remove the div with a class of footer.

divWithFooter.remove(); //reusing divWithFooter from problem 6