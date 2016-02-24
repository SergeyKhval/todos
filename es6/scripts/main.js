'use strict';

class TodoApp {
  constructor() {}
}

class TodoList {
  constructor() {
    this.todoList = [];
  }

  addTodo(todo) {
    this.todoList.push(todo);
  }

  removeTodoAt(index) {
    this.todoList.splice(index, 1);
  }

  renderTodos() {
    this.todoList.forEach(todo => todo.render());
  }
}

class Todo {
  constructor(task, state) {
    this.task = task;
    this.state = state || 'open';
    this.template = `<p class="${this.state}">${this.task}</p>`
  }

  update(task, state) {
    this.task = task;
    this.state = state;
  }
}

let myTodoList = new TodoList();
myTodoList.addTodo(new Todo('Commit me', 'open'));
