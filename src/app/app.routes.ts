import { Routes } from '@angular/router';
import path from 'node:path';
import { TaskComponent } from './task/task.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { UpdatetaskComponent } from './updatetask/updatetask.component';

export const routes: Routes = [
    {path:"todos",component:TaskComponent},
    {path:"add",component:AddtaskComponent},
    {path:"",redirectTo:"todos",pathMatch:'full'},
    {path:"updatetask/:id",component:UpdatetaskComponent}
  
];
