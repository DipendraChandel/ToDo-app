import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TodoService } from "src/app/services/todo.service";
import { TodoListRoutingModule } from "./todo-list-routing.module";
import { TodoListComponent } from "./todo-list.component";

@NgModule({
    imports: [ CommonModule,
    TodoListRoutingModule],
    
    declarations: [TodoListComponent],
    providers: [
        TodoService
    ]

})
export class TodoListModule{}