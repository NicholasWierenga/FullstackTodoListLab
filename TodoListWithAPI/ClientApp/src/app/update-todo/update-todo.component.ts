import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../Todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css'],
  providers: [FormsModule]
})
export class UpdateTodoComponent implements OnInit {
  searchedArray: Todo[] = [];
  id!: number;
  task: string = "";
  completed!: boolean;

  constructor( private todoMethods: TodoService ) { 
    this.GetAllTodos(); // To populate searchedArray with all the todos initially.
  }
  
  UpdateTodo(id: number, task: string, completed: boolean): void {
    let oldTodo: Todo = { id: -1, task: "bad thing happened", completed: false };

    this.searchedArray.forEach(todo => {
      if (todo.id === id) {
        oldTodo = todo;
      }
    });

    if (task === "") {
      task = oldTodo.task;
    }

    if (completed.toString() === "true") {
      completed = true;
    }
    else if (completed.toString() === "false") {
      completed = false;
    }
    else {
      completed = oldTodo.completed;
    }

    let updatedTodo: Todo = {id: id, task: task, completed: Boolean(completed)};

    this.todoMethods.UpdateTodo(id, updatedTodo).subscribe();

    this.GetAllTodos();
    let resetNum!: number;
    this.id = resetNum;
    task = "";
    let resetBool!: boolean;
    completed = resetBool;
  }
  
  GetAllTodos(): void {
    this.todoMethods.GetAllTodos().subscribe((response) => {
      this.searchedArray = response;
    });
  }

  ngOnInit(): void {
  }

}
