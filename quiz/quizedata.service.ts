import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quizedata } from './quizedata.model';

@Injectable({
  providedIn: 'root'
})
export class QuizedataService {

  constructor(public http:HttpClient) { }
  //getquizzes():Observable<Quizedata[]> {
    //return this.http.get<Quizedata[]>("/assets/quizedata.json");
  //}
  loadEmployeeDetails():Observable<Quizedata[]> {

   return this.http.get<Quizedata[]>("/assets/quizedata.json");
 }
}
