import { Component, OnInit } from '@angular/core';
import { Todo } from '../Todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-delete-todo',
  templateUrl: './delete-todo.component.html',
  styleUrls: ['./delete-todo.component.css']
})
export class DeleteTodoComponent implements OnInit {
  searchedArray: Todo[] = [];
  id!: number;

  constructor(private todoMethods: TodoService) { 
    this.GetAllTodos(); // To populate searchedArray with all the todos initially.
  }

  DeleteTodo(id: number): void {
    this.todoMethods.DeleteTodo(id).subscribe();

    this.GetAllTodos();
    let resetNum!: number;
    this.id = resetNum;
  }

  GetAllTodos(): void {
    this.todoMethods.GetAllTodos().subscribe((response) => {
      this.searchedArray = response;
    });
  }

  ngOnInit(): void {
  }

}
