let app = require("express")();
let port =9090;
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

let obj = require("mongoose");
obj.Promise = global.Promise;
let url = "mongodb://localhost:27017/meanstack";
const mongodboption = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

obj.connect(url,mongodboption);
let db = obj.connection;
db.on("error",(err)=>console.log(err));
db.once("open",()=>{
    var courseschema = obj.Schema({
        _courseid:Number,
        coursename:String,
        coursedescription:String,
        amount:Number
    });
var Course = obj.model("",courseschema,"Course");

app.get("/",(req,res)=>{
    
    res.sendFile(__dirname+"/index.html");
})

app.get("/course",(req,res)=>{
    
    res.sendFile(__dirname+"/course.html");
})

app.post("/course",(req,res)=>{

    var myData = new Course({_courseid:req.body.id,coursename:req.body.name,coursedescription:req.body.desc,amount:req.body.amount});
    console.log(req.body);
    myData.save((err,result)=>{
        if(!err){
            console.log("record inserted successfully"+result);
        }else {
            console.log(err);
        }
        obj.disconnect();  //close the connection
    });

    res.sendFile(__dirname+"/course.html");
})
app.get("/delete.html",(req,res)=>{
    res.sendFile(__dirname+"/delete.html");
})

app.post("/delete",(req,res)=>{

    //var myData = new Course({_courseid:req.body.delcourse});
    console.log(req.body);
    Course.deleteOne({_courseid:req.body.delcourse},(err,result)=>{
        if(!err){
          // console.log("record successfully deleted");
          if(result.deletedCount>0)
          {
             console.log("record successfully deleted");
          }
          else{
              console.log("record not present");
          }
        }
        obj.disconnect();
 })
 res.sendFile(__dirname+"/delete.html");
})

app.get("/update.html",(req,res)=>{
    res.sendFile(__dirname+"/update.html");
})

app.post("/update",(req,res)=>{

    //var myData = new Course({_courseid:req.body.delcourse});

    //  Product.updateOne({price:{$gt:70000}},{$set:{price:80000}},
    console.log(req.body);
    Course.updateOne({_courseid:{$eq:req.body.upid}},{$set:{amount:req.body.upamount}},(err,result)=> {    
        if(!err){
            if(result.nModified>0){
                console.log("Record updated")
            }else {
                console.log("Record didn't update")
            }
        }
        obj.disconnect();
   })
 res.sendFile(__dirname+"/update.html");
})


app.get("/fetch.html",(req,res)=>{
    console.log(req.body);
        Course.find({},(err,result)=>{
        if(!err){
             result.forEach(doc=>console.log(doc));
        }
        obj.disconnect();
    })
    res.sendFile(__dirname+"/fetch.html");
})


app.post("/fetch",(req,res)=>{

    console.log(req.body);
        Course.find({},(err,result)=>{
        if(!err){
             result.forEach(doc=>console.log(doc));
        }
        obj.disconnect();
    })
 res.sendFile(__dirname+"/fetch.html");
})


});
app.listen(port,()=>console.log(`Server running on port nubmer ${port}`));
