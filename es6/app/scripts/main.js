'use strict';

class TodoList {
  constructor() {
    this.todos = [];
    this.container = null;
    this.todoInput = document.createElement('input');
    this.addButton = document.createElement('button');

    this.addButton.addEventListener('click', this.addTodo.bind(this));
  }

  addTodo() {
    let newTodo = new Todo(this.todoInput.value);

    this.todos.push(newTodo);
    this.todoInput.value = '';

    this.container.appendChild(newTodo.createTodoElement());
  }

  createContainer() {
    let bodyFirstChild = document.body.firstChild;

    this.todoInput.type = 'text';
    this.addButton.innerText = 'Add todo';

    this.container = document.createElement('div');
    this.container.appendChild(this.todoInput);
    this.container.appendChild(this.addButton);

    document.body.insertBefore(this.container, bodyFirstChild);
  }

  render() {
    if (!this.container) {
      this.createContainer();
    }
  }
}

class Todo {
  constructor(task) {
    this.task = task;
    this.state = 'open';
  }

  createTodoElement() {
    let el = document.createElement('div');

    el.innerHTML = `<p class="${this.state}">${this.task}</p>`;

    return el;
  }
}

let todoList = new TodoList();
todoList.render();
