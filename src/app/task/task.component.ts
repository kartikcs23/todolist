import { Component, OnInit } from '@angular/core';

import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';
import { UpdatetaskComponent } from '../updatetask/updatetask.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ToggleComponent } from "../toggle/toggle.component";
import { MatIcon } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';




@Component({
    selector: 'app-task',
    standalone: true,
    templateUrl: './task.component.html',
    styleUrl: './task.component.css',
    imports: [TaskComponent, UpdatetaskComponent, MatSlideToggleModule, ToggleComponent,ToggleComponent,MatIcon,MatTableModule,MatButtonModule,MatIconModule,MatDividerModule]
})
export class TaskComponent implements OnInit {
  isChecked: boolean = false;

  displayedColumns: string[] = ['id', 'priority', 'description', 'title', 'action'];
 




  
  

  tasks: Todo[] = [];




  constructor(private todoservice: TodoService,
    private router: Router) {


  }

  ngOnInit(): void {
    this.getTask();
  }
  private getTask() {
    this.todoservice.getalltasks().subscribe(data => {
      this.tasks = data;
    })

  }
  updateTask(id:number){
    this.router.navigate(['updatetask',id]);

  }
  deleteTask(id:number) {
    this.todoservice.deleteTask(id).subscribe(data=>{
      console.log(data);
      this.getTask();
    })

  }


}
