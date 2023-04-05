import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Todo } from "../model/Todo";


@Injectable()
export class TodoService{
    public todos: Todo[] = [];
    
    getAllTodos(): Todo[] {

        if(localStorage.getItem('localData')){
            this.todos = JSON.parse(localStorage.getItem('localData') || '{}');
            console.log('Second');
        }
        else{
            var todoArrayData = [
                {
                     id: 1,
                     title: 'Dr.',
                     salutation: "Mr.",
                     firstName: "John",
                     middleName: "Cena",
                     lastName: "Cant see me",
                     phone: "12345",
                     email: "johnCena@gmail.com",
                     gender: "Male"
                },
                {
                    id: 2,
                     title: 'Engg.',
                     salutation: "Mr.",
                     firstName: "Sanjay",
                     middleName: "Rawat",
                     lastName: "pahadi",
                     phone: "8888272213",
                     email: "sanjayRawat@gmail.com",
                     gender: "Male"
                },
                {
                    id: 3,
                     title: 'Dr.',
                     salutation: "Mr.",
                     firstName: "Rahul",
                     middleName: "Tiwari",
                     lastName: "Pandit",
                     phone: "098765",
                     email: "RahulTiwari@gmail.com",
                     gender: "Male"
                }

            ];
            localStorage.setItem('localData', JSON.stringify(todoArrayData));
            this.todos = JSON.parse(localStorage.getItem('localData') || '{}')
            console.log('First');
        }

        let returningTodos=this.todos;

        return returningTodos;
    }

    getTodoById(id:number): Todo {
        var todoArray = JSON.parse(localStorage.getItem('localData') || '{}');
        console.log(todoArray);

        let arr = todoArray.filter((todo:{id:number;})=>todo.id==id).pop();
        return arr;
        
    }

    updateTodoById(todo: Todo): Todo {
        if(todo.id === 0){
            var todoArray = JSON.parse(localStorage.getItem('localData') || '{}');
            var todoid= todoArray.length;
            todo.id = ++todoid;
            todoArray.push(todo);
            localStorage.setItem('localData', JSON.stringify(todoArray));
        }
        else{
            var todoSaveArray = JSON.parse(localStorage.getItem('localData') || '{}');
            for( var i in todoSaveArray){
                if(todoSaveArray[i].id === todo.id){
                    todoSaveArray[i] = todo;
                    localStorage.setItem('localData', JSON.stringify(todoSaveArray));
                }
            }
        }
        
        return todo;
    }

    deleteTodoDetail(id:any){
        var todoArray = JSON.parse(localStorage.getItem('localData') || '{}');
        for(var i in todoArray){
            if(todoArray[i].id === id){
                todoArray.splice(i, 1);
                localStorage.setItem('localData', JSON.stringify(todoArray));
            }
        }
    };
}