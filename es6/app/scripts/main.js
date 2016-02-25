'use strict';

class TodoList {
  constructor() {
    this.todos = [];
    this.container = document.createElement('div');
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

  removeTodo(index) {
    this.todos[index].removeTodo();
    this.todos.splice(index, 1);
  }

  assembleContainer() {
    this.todoInput.type = 'text';
    this.addButton.innerText = 'Add todo';

    this.container.appendChild(this.todoInput);
    this.container.appendChild(this.addButton);
  }

  render() {
    let bodyFirstChild = document.body.firstChild;

    this.assembleContainer();

    document.body.insertBefore(this.container, bodyFirstChild);
  }
}

class Todo {
  constructor(task) {
    this.task = task;
    this.state = 'open';
    this.container = document.createElement('div');
  }

  createTodoElement() {
    this.container.innerHTML = `<p class="${this.state}">${this.task}</p>`;

    return this.container;
  }

  removeTodo(){
    this.container.parentNode.removeChild(this.container);
  }
}

let todoList = new TodoList();
todoList.render();
