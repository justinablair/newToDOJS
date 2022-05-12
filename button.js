//IGNORE THIS CODE IT IS INACTIVE 


const inputLength=input.value.length;

/*
function inputLength() {
    return input.value.length; 
}
*/

/* create delete button */
function createListElement() {

const deleteButton = document.createElement("button"); //create new button element

deleteButton.setAttribute("class", "btn"); //set button class to be btn

deleteButton.appendChild(document.createTextNode("Delete")); //set button text to say delete

console.log(deleteButton);

/*end */

var li = document.createElement("li"); //create new li eleme

li.appendChild(document.createTextNode(input.value)); //creates an li text element from input

myUlDisplay.appendChild(li).addEventListener("click", toggleList); // li with input appended to ul parent+listens for click event

input.value = ""; //input value set to empty string

myUlDisplay>li.appendChild(deleteButton).addEventListener("click", removeItem); //append "delete button" to newly added "li"

}

/* if input create the list element with delete button */
function addListAfterClick() {
    if (inputLength > 0) {
        createListElement();
    }
}

/*if input and enter key create list element with delete button */
function addListAfterKeypress(event) {
    if (inputLength > 0 && event.keyCode === 13) { 
        createListElement();
    }
}


/* event listeners*/
button.addEventListener("click", addListAfterClick); //clicked button with input and enter key

input.addEventListener("keypress", addListAfterKeypress); //enter key with input ?? //newer documentation reccomends keydown instead

const list=document.querySelectorAll('ul>li');
for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("click", toggleList);
    }


//Toggle list item on and off when clicked on 

function toggleList() {
    e.target.classList.toggle("done"); //or this.classList.toggle("done");
  }

  //Delete list item by clicking on the delete button next to it
var deleteItem = document.getElementsByClassName("btn"); //get delete button ??
for (let i = 0; i < deleteItem.length; i++){ //increment amont of buttons, when button clicked remove item
    deleteItem[i].addEventListener("click", removeItem);
}
  
function removeItem(){
this.parentNode.remove();
}       





    const deleteButton = document.createElement("button"); //create new button element
    deleteButton.setAttribute("class", "btn"); //set button class to be btn
    
    deleteButton.appendChild(document.innerText("Delete")); //set button text to say delete
    
    console.log(deleteButton);
    myUlDisplay.li.appendChild(deleteButton)
    
    myUlDisplay.li.appendChild(deleteButton);
    }