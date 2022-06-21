import { Component } from '@angular/core';
import { ToDo } from './ToDo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  todos : ToDo[] = [];
  newTodo : string;

  saveToDo(){
    if(this.newTodo){
      let todo = new ToDo()
      todo.name = this.newTodo
      todo.isCompleted = true
      this.todos.push(todo)
      this.newTodo = ''

    }else{
      alert('Favor digitar o ToDo')
    }
  }

  
  done(id:number){
    this.todos[id].isCompleted = !this.todos[id].isCompleted
  }

  remove(id:number){
    this.todos = this.todos.filter((v,i) => i !== id)
  }


}
