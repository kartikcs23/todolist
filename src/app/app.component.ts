import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TaskComponent } from "./task/task.component";
import { TodoService } from './todo.service';
import { AddtaskComponent } from './addtask/addtask.component';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { UpdatetaskComponent } from './updatetask/updatetask.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import { DropDownComponent } from "./drop-down/drop-down.component";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldControl } from '@angular/material/form-field';








@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    providers: [TodoService, UpdatetaskComponent,{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}],
    imports: [RouterOutlet, TaskComponent, AddtaskComponent, RouterLink, RouterLinkActive, FormsModule, MatSlideToggleModule, MatIconModule, DropDownComponent]
})
export class AppComponent implements OnInit{

  title = 'TaskApp';





  ngOnInit(): void {
    
  }
  

 
}
function provideAnimationsAsync(): import("@angular/core").Provider {
  throw new Error('Function not implemented.');
}

