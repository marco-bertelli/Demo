import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodosFacadeService } from '../../services/todos-facade.service';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/core/model/todo.interface';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  

  constructor(private todosFacadeService: TodosFacadeService) {
  }

  ngOnInit(): void {
    
  }

  addForm(todo: Todo) {
    this.todosFacadeService.addTodo(todo);
    
  }

  undo(todo: Todo) {
    this.todosFacadeService.goToDetail(todo.id);
  }
}
