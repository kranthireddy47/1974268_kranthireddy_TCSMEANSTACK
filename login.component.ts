import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginRef=new FormGroup({
      user:new FormControl(),
      pass:new FormControl()
    });
    msg:string=""
  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  checkUser() {
     console.log(this.loginRef.value);   // all value
     let user1 = this.loginRef.get("user")?.value;  // get specific control value.
     let pass1 = this.loginRef.get("pass")?.value;
     console.log(user1+" "+pass1);
     let un=localStorage.getItem('user1');
     console.log(un);

     let ps=localStorage.getItem('pass1');
     console.log(ps);

     //let ps=JSON.parse(localStorage.getItem('pass1').value);
     if(user1==un && pass1==ps){
       this.msg = "Successfully Login!"
       this.router.navigate(["portfolio"]);
     }else {
       this.msg = "Failure try once again";
     }
   }
}
