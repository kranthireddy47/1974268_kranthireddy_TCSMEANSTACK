import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  loginRef=new FormGroup({
      cname:new FormControl(),
      num:new FormControl()
    });
  msg1:string="";
  msg2:string="";
  msg3:any="";
  constructor() { }

  ngOnInit(): void {
  }
  checkUser() {
     console.log(this.loginRef.value);   // all value
     let user1 = this.loginRef.get("cname")?.value;  // get specific control value.
     let pass1 = this.loginRef.get("num")?.value;
     console.log(user1+" "+pass1);
     let un=localStorage.getItem('user1');
     console.log(un);

     this.msg3=un;

     this.msg1=user1;
     this.msg2=pass1;

   }

}
