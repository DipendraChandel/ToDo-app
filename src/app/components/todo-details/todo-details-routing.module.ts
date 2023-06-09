import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { TodoDetailsComponent } from "./todo-details.component";

const routes: Routes = [
    {
        path: '', component: TodoDetailsComponent   }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TodoDetailRoutingModule {}
