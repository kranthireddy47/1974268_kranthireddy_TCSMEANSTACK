import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Taskdata } from '../task.model';
//import tasklist from './todolist.json' ;

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasklist:Array<Taskdata>=[];
  constructor(public taskSer:TaskService) { }

  ngOnInit(): void {
    this.taskSer.loadTaskDetails().subscribe(result=>this.tasklist=result,error=>console.log(error))
  }
  storeTask(empRef:any) {
    console.log(empRef);
    this.taskSer.storeTask(empRef);
  }

}
