import { Component } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  newTodo: Todo = new Todo();

  constructor(private _todoDataService: TodoDataService) {}

  addTodo() {
    this._todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }
  
  toggleTodoComplete(todo) {
    this._todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this._todoDataService.deleteTodo(todo.id);
  }

  get todos() {
    return this._todoDataService.getAll();
  }

}
