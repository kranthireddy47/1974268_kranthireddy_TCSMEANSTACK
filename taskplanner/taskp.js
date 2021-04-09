let http = require("http");
let url = require("url");
let fs=require("fs");

let port = 9999;
let emp = [];
let loginInfo = `
    <style>
    .container {
    width: 500px;
    clear: both;
    padding: 16px;
    }
    .container input {
    width: 100%;
    clear: both;
    }
    input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
 }
 input[type=submit], input[type=reset] {
  background-color: red;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

    </style>
    <div class="container" style="text-align:center;">
    <h1>Task Planner</h1>
    <h2>Add Task</h2>
    <form action="/store" method="get">
        <label>Emp ID</label>
        <input type="text" name="user"/><br/>
        <label>Task ID</label>
        <input type="text" name="taskid"/><br/>
        <label>Task</label>
        <input type="text" name="task"/><br/>
        <label>DeadLine</label>
        <input type="text" name="deadline"/><br/>
        <label>Password</label>
        <input type="password" name="pass"/><br/>
       &nbsp;  <input type="submit" value="Add Task"/>
        &nbsp; <input type="reset" value="Reset"/><br/>
    </form>
    <form action="/delete" method="get">
    <h2>Delete Task</h2>
    <label>Task Id:</label>
    <input type="text" name="task1"/><br/>
    <input type="submit" value="Delete Task"/>
    </form>
    </div>
`
var fileread=fs.readFileSync('emp5.json')
emp=JSON.parse(fileread)

let server = http.createServer((req,res)=> {
    //console.log(url.parse(req.url,true))
    var pathInfo = url.parse(req.url,true).pathname;
    //console.log(req.url);
    if(req.url=="/")
    {
    res.setHeader("content-type","text/html");  // by default data consider as a html
    res.end(loginInfo);
    }
    else if(pathInfo=="/store")
    {
        var data = url.parse(req.url,true).query;
        if(data.user=="Ajay" && data.pass=="Kumar")
        {
            res.write("Successfully Login!");
        }
        else
        {
         res.write("Failure try once again");
        }
        data={
              "empid":data.user,
              "taskid":data.taskid,
              "task":data.task,
              "deadline":data.deadline,
              "password":data.pass
             }
        emp.push(data);
        emp=JSON.stringify(emp,null,2)
        fs.writeFile("emp5.json",emp,function (err) {
           if (err) return console.log(err);
        });
    res.end();
    }
    else if(pathInfo=="/display")
    {
      var fileread=fs.readFileSync('emp5.json')
      emp=JSON.parse(fileread)
      var head = `
           <div style="text-align:center;">
           <h1>List Task</h1>
           <h2>List All Tasks</h2>
           <div>
           `
      var tabledata = `
      <div style="text-align:center;">
      <h1>List Task</h1>
      <h2>List All Tasks</h2>
      <div>
       <table border="2" align="center">
       <tr>
           <th>Emp Id</th>
           <th>Task Id</th>
           <th>Task</th>
           <th>Deadline</th>
           <th>Password</th>
       </tr>
      `
      for(let i=0;i<emp.length;i++)
      {
        const ele=emp[i];
        tabledata += `
        <tr>
          <td>${ele.empid}</td>
          <td>${ele.taskid}</td>
          <td>${ele.task}</td>
          <td>${ele.deadline}</td>
          <td>${ele.password}</td>
        </tr>
        `
      }
      tabledata += `</table>`
      res.end(tabledata);

    }
    else if(pathInfo=="/delete")
    {
      let id = req.params.task1;
      let flag = 0;
      let j = 0;
      emp.find((c,i)=> {
      let ccId = c.taskid;
      if( ccId== id){
          j=i;
          flag++;
      }
     })

     if(flag==0)
     {
          res.send("entered taskid is invalid")
     }
     else
     {
           emp.splice(j,1);
          res.send("Task deleted successfully....")
        }
     }
})
server.listen(port,()=>console.log(`running on port num ${port}`));
