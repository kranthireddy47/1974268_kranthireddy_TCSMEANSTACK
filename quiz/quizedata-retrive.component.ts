import { Component, OnInit } from '@angular/core';
import { Quizedata } from '../quizedata.model';
import { QuizedataService } from '../quizedata.service';

@Component({
  selector: 'app-quizedata-retrive',
  templateUrl: './quizedata-retrive.component.html',
  styleUrls: ['./quizedata-retrive.component.css']
})
export class QuizedataRetriveComponent implements OnInit {

 answerSelected= false;
 correctAnswers=0;
 incorrectAnswers=0;
 result=false;
 qns:Array<string>=[];
 employees:Array<Quizedata>=[];
  constructor(public empSer:QuizedataService) { }

  ngOnInit(): void {
    //this.employees=this.empSer.getquizzes();
    this.empSer.loadEmployeeDetails().subscribe(result=>this.employees=result,error=>console.log(error))
      //console.log(this.employees);
  }
  onAnswer(opt1:string,opt2:string,opt3:string){

  this.answerSelected=true;
  if(opt1==opt2){
    this.correctAnswers++;

  }
  else{
    this.incorrectAnswers++;
    this.qns.push(opt3);
    this.qns.push("Your Answer:");
    this.qns.push(opt1);
    this.qns.push("Correct Answer:");
    this.qns.push(opt2);
  }
  }
  showResult(){
    this.result=true;
  }


}
