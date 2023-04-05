import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Todo } from 'src/app/model/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
public todoId: any;
public todoDetail = <Todo>{};
public mode: string ='';

  constructor( private activatedRoute: ActivatedRoute, private router: Router, private todoService: TodoService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.todoId = params['id'];
      if(this.todoId){
        console.log(this.todoId);
        this.getTodoDetailById(this.todoId);
        this.mode = 'Edit';
      }
      else
      {
        console.log(this.todoId);
        this.todoDetail['id']=0;
        this.mode = 'Add';
      }
    });
  }

  getTodoDetailById(id:string){
    this.todoDetail = this.todoService.getTodoById(parseInt(id));
    console.log(this.todoDetail);
  }

  onTodoSubmitForm(form: {valid: any;}){
    console.log(form);
    if(form.valid)
    {
      this.todoService.updateTodoById(this.todoDetail);
      this.router.navigate(['/todo-list']);
    }
    else {
    }
  }

  onClickCancel(){
    this.router.navigate(['/todo-list']);
  }

  

}
