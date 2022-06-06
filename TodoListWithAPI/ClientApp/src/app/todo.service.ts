import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  urlRoot: string;
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.urlRoot = baseUrl;
  }

  SearchByTask(taskToSearch: string): Observable<Todo[]> {
    if (taskToSearch === "") {
      return this.GetAllTodos(); // For when search bar is empty. The URL doesn't like that, so it doesn't update searchedTodos.
    }
    else {
      return this.http.get<Todo[]>(this.urlRoot + "todo/SearchByTask/" + taskToSearch);
    }
  }

  GetAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.urlRoot + "todo/GetAllTodos");
  }

  CreateTodo(newTodo: Todo): Observable<Todo> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

    return this.http.post<Todo>(this.urlRoot + "todo/CreateTodo/",
      JSON.stringify(newTodo), { headers: headers });
  }

  DeleteTodo(id: number): Observable<Todo> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

    return this.http.put<Todo>(this.urlRoot + "todo/DeleteTodo/" + id, { headers: headers });
  }

  UpdateTodo(id: number, todo: Todo): Observable<Todo> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    console.log(todo.task);
    console.log(JSON.stringify(todo));
    console.log(todo.completed);
    return this.http.put<Todo>(this.urlRoot + "todo/UpdateTodo/" + id, JSON.stringify(todo), { headers: headers });
  }
}
