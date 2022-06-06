import { Component, OnInit } from '@angular/core';
import { Todo } from '../Todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-search',
  templateUrl: './todo-search.component.html',
  styleUrls: ['./todo-search.component.css']
})
export class TodoSearchComponent implements OnInit {
  searchedArray: Todo[] = []; // This is used when we display todos and changes constantly based on what is being searched.
  searchArrayByString: string = ""; // Is updated to whatever the user entered to search.
  
  constructor(private todoMethods: TodoService) {
    this.GetAllTodos(); // To populate searchedArray with all the todos initially.
  }

  SearchArray(): void {
    this.todoMethods.SearchByTask(this.searchArrayByString).subscribe((response) => {
      this.searchedArray = response;
    });
  }

  GetAllTodos(): void {
    this.todoMethods.GetAllTodos().subscribe((response) => {
      this.searchedArray = response;
    });
  }

  ngOnInit(): void {
  }
}
