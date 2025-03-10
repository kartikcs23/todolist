import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { FormBuilder,  FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TodoService } from '../todo.service';
import { error } from 'console';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';
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
    selector: 'app-addtask',
    standalone: true,
    templateUrl: './addtask.component.html',
    styleUrl: './addtask.component.css',
    imports: [AddtaskComponent, FormsModule, AppComponent, ReactiveFormsModule, CommonModule, MatSlideToggleModule, MatFormFieldModule, MatCardModule, MatInputModule, MatSelectModule, ToggleComponent,MatIconModule,MatDividerModule,MatButtonModule]
})
export class AddtaskComponent implements OnInit{


  todoadd : Todo = new  Todo({});
  reactiveForm:FormGroup;
  submitted:FormGroup;
formControls: any;
priorityOptions = [
  { value: 'Important', viewValue: 'Important' },
  { value: 'Not Important', viewValue: 'Not Important' }
];

  


  constructor(private taskservice:TodoService,private router:Router,private formBuilder:FormBuilder){ 
  }
  ngOnInit(): void {
this.reactiveForm=this.formBuilder.group({
  title: ['', Validators.required],
      description: ['', Validators.required],
      priority: ['', Validators.required]
    });
         
    
  }


  savetask() {
    if (this.reactiveForm.valid) {
      this.taskservice.createTask(this.reactiveForm.value).subscribe(
        data => {
          console.log(data);
          this.gototasklist();
        },
        error => console.log(error)
      );
    }
  }

  gototasklist(){
    this.router.navigate(['/todos']);

  }
  onSubmit() {
    if (this.reactiveForm.valid) {
      console.log(this.reactiveForm.value);
      this.savetask();
    }
    else{
      alert("Fields Cannot be Blank");
      
    }
  }
  
}
