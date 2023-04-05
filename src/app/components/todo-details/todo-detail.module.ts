import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TodoService } from "src/app/services/todo.service";
import { TodoDetailRoutingModule } from "./todo-details-routing.module";
import { TodoDetailsComponent } from "./todo-details.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TodoDetailRoutingModule
    ],
    declarations: [TodoDetailsComponent],
    providers: [TodoService]
})

export class TododetailModule{
    
}