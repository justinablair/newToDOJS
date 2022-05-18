class Todo {
  constructor() {
    this.cacheElements();
    this.setUpEvents();
    this.getData();
  }

  cacheElements() {
    this.ulDisplay = document.querySelector("#myUl");
    this.todoTemplate = document.querySelector("#todo-template");
    this.input = document.querySelector("#js-form input");
    this.addButton = document.querySelector("#js-form button");
  }

  setUpEvents(){
    this.addButton.addEventListener("click", this.handleFormSubmission.bind(this))
  }

  async getData() {
    const url = "https://jsonplaceholder.typicode.com/users/1/todos";
    const todoData = await fetch(url);
    const todos = await todoData.json();

    todos.forEach((todo) => {
      const title = todo.title;
      const completed = todo.completed;

      //li to contain fetched todo items
      const apiLi = document.createElement("li");

      this.ulDisplay.appendChild(apiLi);

      const newTodo = document.importNode(this.todoTemplate.content, true);
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
      this.ulDisplay.appendChild(newTodo); //todoTemplate added to ui display

      if (todoCompleted.innerText === "true") {
        todoCompleted.classList.add("strike");
        todoTitle.classList.add("strike");
      }
    });
  }

  handleFormSubmission(e) {
debugger;
    e.preventDefault();
      if (this.input.value.length === 0) {
        alert("Please enter a task");
      } else {
        const domObject = document.createElement("li");
        domObject.innerText = this.input.value;
        const deleteButton = this.button();
        domObject.appendChild(deleteButton);
        this.input.value = "";
       this.ulDisplay.prepend(domObject);
      }
    }

  button() {
    const deleteButton = document.createElement("button"); //create new button element
    const container = document.createElement("div");
    container.appendChild(deleteButton);
    deleteButton.setAttribute("class", "btn"); //set button class to be btn
    deleteButton.appendChild(document.createTextNode("x")); //set button text to say delete
   this.ulDisplay.addEventListener("click", (e) => {
      const target = e.target;
      if (target.className === "btn") {
        target.parentNode.parentNode.remove();
      }
    });
    return container;
  }

  /*

  handleFormSubmission(e) {
    const input = document.querySelector("#js-form input");
    if (input.value.length === 2) {
      alert("Please enter a task");
    } else {
      const domObject = document.createElement("li");
      domObject.innerText = input.value;

      const deleteButton = this.button();
      domObject.appendChild(deleteButton);
     
      input.value = "";
      constthis.ulDisplay = document.querySelector("#myUl");
     this.ulDisplay.prepend(domObject); //List item+delete button added to top of Ui display
    }

  } */
}

new Todo();
