/*user list */
const input = document.querySelector("#js-form input");
const uiDisplay = document.querySelector("#myUl");
const todoTemplate = document.querySelector("#todo-template");

function handleFormSubmission(e) {
  if (input.value.length === 0) {
    alert("Please enter a task");
  } else {
    const domObject = document.createElement("li");
    domObject.innerText = input.value;
    uiDisplay.prepend(domObject);
  }
  // return false; //do not submit the form
  e.preventDefault();
}

// your form
var form = document.getElementById("js-form");

// attach event listener
form.addEventListener("submit", handleFormSubmission, true);


const url = "https://jsonplaceholder.typicode.com/users/1/todos";

async function getData() {
  const todoData = await fetch(url);
  const todos = await todoData.json();

  todos.forEach((todo) => {
    const title = todo.title;
    const completed = todo.completed;

    //li to contain fetched todo items
    const apiLi = document.createElement("li");
    uiDisplay.appendChild(apiLi);

    const newTodo = document.importNode(todoTemplate.content, true);

    //h3 element placeholder added to fetched api li
    const todoTitle = document.createElement("h3");
    apiLi.appendChild(todoTitle); //h3 added to li

    //p element placeholder added to fetched api li
    const todoCompleted = document.createElement("p");
    apiLi.appendChild(todoCompleted);

    //title and completed placeholders replaced with api data
    todoTitle.innerText = title;
    todoCompleted.innerText = completed;
    uiDisplay.appendChild(newTodo); //todoTemplate added to ui display
  });
}
getData().catch((err) => console.error(err));
