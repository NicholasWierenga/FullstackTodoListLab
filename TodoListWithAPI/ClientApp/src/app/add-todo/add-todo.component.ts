import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../Todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
  providers: [FormsModule]
})
export class AddTodoComponent implements OnInit {
  searchedArray: Todo[] = [];
  task: string = "";
  newTodo: Todo = {id: -1, task: this.task, completed: false};
  
  constructor( private todoMethods: TodoService ) { 
    this.GetAllTodos(); // To populate searchedArray with all the todos initially.
  }

  CreateTodo(task: string): void {
    this.newTodo = {id: undefined, task: task, completed: false};
 
    this.todoMethods.CreateTodo(this.newTodo).subscribe();
    this.GetAllTodos();
    this.task = "";
  }

  GetAllTodos(): void {
    this.todoMethods.GetAllTodos().subscribe((response) => {
      this.searchedArray = response;
    });
  }

  ngOnInit(): void {
  }
}
