import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',

})
export class TodoService {

  private baseUrl="http://localhost:8080/api/todos/displaytask"
  private createurl="http://localhost:8080/api/todos/createnewtask"
  private findurl="http://localhost:8080/api/todos/findtask"
  private updateurl="http://localhost:8080/api/todos/updatetask"
  private deleteurl="http://localhost:8080/api/todos/deletetask"

  constructor(private httpclient:HttpClient) { }


  getalltasks(): Observable<Todo[]>{
    return this.httpclient.get<Todo[]>(`${this.baseUrl}`);
  }

  createTask(todoadd:Todo): Observable<Object>{
  return this.httpclient.post(`${this.createurl}`,todoadd);
}

getTaskbyid(id:number):Observable<Todo>{
  return this.httpclient.get<Todo>(`${this.findurl}/${id}`);

}

updateTask(id:number,todos:Todo): Observable<Object>{
  return this.httpclient.put(`${this.updateurl}/${id}`,todos);

}
deleteTask(id:number):Observable<Object>{
  return this.httpclient.delete(`${this.deleteurl}/${id}`);

}
}
