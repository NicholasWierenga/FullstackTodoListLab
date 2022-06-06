import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { TodoSearchComponent } from './todo-search/todo-search.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { DeleteTodoComponent } from './delete-todo/delete-todo.component';
import { UpdateTodoComponent } from './update-todo/update-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    TodoSearchComponent,
    AddTodoComponent,
    DeleteTodoComponent,
    UpdateTodoComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'todo-search', component: TodoSearchComponent },
      { path: 'add-todo', component: AddTodoComponent },
      { path: 'delete-todo', component: DeleteTodoComponent },
      { path: 'update-todo', component: UpdateTodoComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
