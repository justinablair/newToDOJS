/*user list */
const input = document.querySelector("#js-form input");
const myUlDisplay = document.querySelector("#myUl");
/*api list */
const todoSection = document.querySelector("#todo-section");
const todoTemplate = document.querySelector("#todo-template");

function handleFormSubmission(e) {
  e.preventdefault();
  if (input.value.length === 0) {
    alert("Please enter a task");
  } else {
    const DOMobject = document.createElement("li");
    DOMobject.innerText = input.value;
    myUlDisplay.appendChild(DOMobject);
  }
 // return false; //do not submit the form
}

const url = "https://jsonplaceholder.typicode.com/users/1/todos";



async function getData() {
  const todoData = await fetch(url);
  const todos = await todoData.json();
  
  todos.forEach((todo) => {
    const title = todo.title;
    const completed = todo.completed;

      
        const newTodo = document.importNode(todoTemplate.content, true);
        const todoTitle = newTodo.querySelector(".todo-title");
        const todoCompleted = newTodo.querySelector(".todo-completed");
        todoTitle.innerText = title;
        todoCompleted.innerText = completed;
        todoSection.appendChild(newTodo);
      });
    }
  
getData().catch((err) => console.error(err));




// function deleting (){

//     const deleteButton = document.createElement("button"); //create new button element
//     deleteButton.setAttribute("class", "btn"); //set button class to be btn
//     deleteButton.textContent="Delete";//set button text to say delete
//     console.log(deleteButton);
//    deleteButton.style.display = 'none'
//    button.addEventListener('click', function(event) {

//     deleteButton.style.display = 'block'

//   })
// }
// deleting ();
