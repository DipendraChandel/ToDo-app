import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/model/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public todos: Todo[] = [];

  constructor( private router: Router, private todoService: TodoService) { }

  ngOnInit(): void {
    this.loadAllTodoList();
  }

  loadAllTodoList(){
    this.todos = this.todoService.getAllTodos();
  }

  onClickEditTodoDetails(id: any){
    console.log(id);
    this.router.navigate(['/todo-detail'], {queryParams: {id:id}});
  }

  onClickAddTodo(){
    this.router.navigate(['/todo-detail']);
  }

  onClickTodoDelete(id: any){
    this.todoService.deleteTodoDetail(id);
    this.loadAllTodoList();
  }
}
