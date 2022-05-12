
class Todo {
  constructor() {}

  submit() {
    const form = document.getElementById("js-form");
   form.addEventListener("click", function(e){
    e.preventDefault();
  });
  }

  button() {
    const deleteButton = document.createElement("button"); //create new button element
    const container = document.createElement("div");
    container.appendChild(deleteButton);
    deleteButton.setAttribute("class", "btn"); //set button class to be btn
    deleteButton.appendChild(document.createTextNode("x")); //set button text to say delete
    const ulDisplay = document.querySelector("#myUl");
    ulDisplay.addEventListener("click", (e) => {
      const target = e.target;
      if (target.className === "btn") {
        target.parentNode.parentNode.remove();
      }
    });
    return container;
    
  }

  async getData() {
    const url = "https://jsonplaceholder.typicode.com/users/1/todos";
    const todoData = await fetch(url);
    const todos = await todoData.json();
    const ulDisplay = document.querySelector("#myUl");
    const todoTemplate = document.querySelector("#todo-template");

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
      const deleteButton = this.button(); //to call function defined in the Todo class

      apiLi.appendChild(deleteButton);
      //p element placeholder added to fetched api li
      const todoCompleted = document.createElement("p");
      apiLi.appendChild(todoCompleted);

      //title and completed placeholders replaced with api data
      todoTitle.innerText = title;
      todoCompleted.innerText = completed;
      ulDisplay.appendChild(newTodo); //todoTemplate added to ui display

      if (todoCompleted.innerText === "true") {
        todoCompleted.classList.add("strike");
        todoTitle.classList.add("strike");
      }
    });
  }


 
  

  handleFormSubmission(e) {
    const input = document.querySelector("#js-form input");
    if (input.value.length === 2) {
      alert("Please enter a task");
    } else {
      const domObject = document.createElement("li");
      domObject.innerText = input.value;

      const deleteButton = this.delete();

      domObject.appendChild(deleteButton);
     
      input.value = "";
      const ulDisplay = document.querySelector("#myUl");
      ulDisplay.prepend(domObject); //List item+delete button added to top of Ui display
    }
    e.preventDefault();
  }
  


  

}

new Todo().getData();

