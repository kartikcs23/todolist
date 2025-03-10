import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Todo } from '../todo';
import { TaskComponent } from '../task/task.component';
import { AddtaskComponent } from '../addtask/addtask.component';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../todo.service';
import { error } from 'console';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ToggleComponent } from "../toggle/toggle.component";
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';



@Component({
    selector: 'app-updatetask',
    standalone: true,
    templateUrl: './updatetask.component.html',
    styleUrl: './updatetask.component.css',
    imports: [UpdatetaskComponent, FormsModule, TaskComponent, ReactiveFormsModule, MatSlideToggleModule, MatFormFieldModule, MatFormFieldModule, MatCardModule, MatInputModule, MatSelectModule, ToggleComponent,MatIconModule,MatDividerModule,MatButtonModule]
})
export class UpdatetaskComponent implements OnInit{  


  id!: number;
  todos : Todo = new  Todo({});

  reactiveForm:FormGroup;

  constructor(private taskservice :TodoService,private route :ActivatedRoute,private router:Router,private formbuilder :FormBuilder){

  }
  
    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.reactiveForm = this.formbuilder.group({
        title: ['', Validators.required],
        description: ['', Validators.required],
        priority: ['', Validators.required]
      });
      this.taskservice.getTaskbyid(this.id).subscribe(data => {
        this.todos = data;
        this.reactiveForm.patchValue({
          title: this.todos.title,
          description: this.todos.description,
          priority: this.todos.priority
        });
      },
      error => console.log(error));
    }


    onSubmit() {
      if (this.reactiveForm.valid) {
        this.taskservice.updateTask(this.id, this.reactiveForm.value).subscribe(data => {
          this.gototasklist();
        },
        error => console.log(error));
      }
      else{
        alert("Fields Cannot be Blank")
      }
    }
  
  gototasklist(){
    this.router.navigate(['/todos']);

  }

}
