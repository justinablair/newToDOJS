/*user list */
const input = document.querySelector("#js-form input");
const ulDisplay = document.querySelector("#myUl");
const todoTemplate = document.querySelector("#todo-template");
const addButton = document.querySelector(".push");
const form = document.getElementById("js-form");

const url = "https://jsonplaceholder.typicode.com/users/1/todos";

const getData=async()=> {
  const todoData = await fetch(url);
  const todos = await todoData.json();

  todos.forEach((todo) => {
    const title = todo.title;
    const completed = todo.completed;

    //li to contain fetched todo items
    const apiLi = document.createElement("li");
   ulDisplay.appendChild(apiLi);

    const newTodo = document.importNode(todoTemplate.content, true);

    //h3 element placeholder added to fetched api li
    const todoTitle = document.createElement("h3");
    apiLi.appendChild(todoTitle); //h3 added to li
    const deleteButton = button();

    const addDeleteBtn= apiLi.appendChild(deleteButton);
    //p element placeholder added to fetched api li
    const todoCompleted = document.createElement("p");
   apiLi.appendChild(todoCompleted);

    //title and completed placeholders replaced with api data
    todoTitle.innerText = title;
    todoCompleted.innerText = completed;
  ulDisplay.appendChild(newTodo); //todoTemplate added to ui display

    if (todoCompleted.innerText === "true") {
      const strikeTitle= todoCompleted.classList.add("strike");
      const strikeStatus= todoTitle.classList.add("strike");
    }
  });
}
getData();



ulDisplay.addEventListener("click", (e) => {
  const target = e.target;
  if (target.className === "btn") {
    target.parentNode.parentNode.remove();
  }
});

form.addEventListener("submit", handleFormSubmission, true); // attach event listener


 button=()=> {
  const deleteButton = document.createElement("button"); //create new button element
  const container = document.createElement("div");
  container.appendChild(deleteButton);
  deleteButton.setAttribute("class", "btn"); //set button class to be btn
  deleteButton.appendChild(document.createTextNode("x")); //set button text to say delete
  return container;
}



function handleFormSubmission(e) {
  if (input.value.length === 0) {
    alert("Please enter a task");
  } else {
    const domObject = document.createElement("li");
    domObject.innerText = input.value;

    const deleteButton = button();

    domObject.appendChild(deleteButton);
    input.value = "";
    ulDisplay.prepend(domObject); //List item+delete button added to top of Ui display
  }

  e.preventDefault(); // return false; //do not submit the form
}
