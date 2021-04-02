let obj=require("readline-sync");
let fs=require("fs");
// let rec=obj.question("enter the records: ");

let emp = [];
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

todaydate = mm + '/' + dd + '/' + yyyy;
debugger;
todaytime= today.getHours() + ":"
                + today.getMinutes() + ":"
                + today.getSeconds();
debugger;
let entries=obj.question("enter entries:");
var fileread=fs.readFileSync('emp.json')
emp=JSON.parse(fileread)
for(var i=0;i<entries;i++){
    let fname=obj.question("Enter your First Name: ");
    let lname=obj.question("Enter your Last Name: ");
    let gender=obj.question("Enter your Gender: ");
    let email=obj.question("Enter your EmailId: ");
  //  let date=obj.question(Date.now());
    data={
      "fname":fname,
      "lname":lname,
      "gender":gender,
      "email":email,
      "date":todaydate,
      "time":todaytime
    }
    emp.push(data)
    debugger;
}
emp=JSON.stringify(emp,null,2)
fs.writeFile("emp.json",emp,function (err) {
  if (err) return console.log(err);
});
module.exports={todaydate,todaytime}
