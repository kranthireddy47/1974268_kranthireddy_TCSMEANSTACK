import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { Taskdata } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(public http:HttpClient) { }

  storeTask(task:any){
    this.http.post("http://localhost:3000/employees",task).
    subscribe(result=>console.log(result),error=>console.log(error));
  }
  loadTaskDetails():Observable<Taskdata[]> {

   return this.http.get<Taskdata[]>("/assets/todolist.json");
   console.log(this.http.get<Taskdata[]>("/assets/todolist.json"));

 }
}
