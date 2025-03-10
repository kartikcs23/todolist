import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { UpdatetaskComponent } from '../updatetask/updatetask.component';
import { AddtaskComponent } from '../addtask/addtask.component';

@Component({
  selector: 'app-task-form',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css']
})
export class TaskFormComponent implements OnInit {
  id: number;
  isEditMode: boolean;
  todo: Todo;
  taskForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.isEditMode = this.id ? true : false;
    this.initForm();
  }

  initForm(): void {
    this.taskForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      priority: ['', Validators.required]
    });

    if (this.isEditMode) {
      this.todoService.getTaskbyid(this.id).subscribe(
        (data) => {
          this.todo = data;
          this.taskForm.patchValue({
            title: this.todo.title,
            description: this.todo.description,
            priority: this.todo.priority
          });
        },
        (error) => console.log(error)
      );
    }
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      const formData = this.taskForm.value;
      if (this.isEditMode) {
        this.todoService.updateTask(this.id, formData).subscribe(
          (data) => {
            this.router.navigate(['/todos']);
          },
          (error) => console.log(error)
        );
      } else {
        this.todoService.createTask(formData).subscribe(
          (data) => {
            this.router.navigate(['/todos']);
          },
          (error) => console.log(error)
        );
      }
    } else{
      console.log('All fields are required');
    }
  }
}
