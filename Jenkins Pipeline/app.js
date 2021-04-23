let app = require("express")();
let http= require("http").Server(app);
let io = require("socket.io")(http);


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
        name:String,
        message:String
    });
var Chatlog = obj.model("",courseschema,"Chatlog");

app.get("/chat",(req,res)=>{

  res.sendFile(__dirname+"/index.html");
})


app.post("/chat",(req,res)=>{

      var myData = new Chatlog({name:req.body.ename,message:req.body.area});

      myData.save((err) =>{
   if(err)
     sendStatus(500);
   socket.emit('myData', req.body);
   res.sendStatus(200);
 })

})


io.on("connection",(socket)=>{
    console.log("client connected to application");

  /*  app.post("/chat",(req,res)=>{

        var myData = new Chatlog(req.body);
        //myData.save();
        myData.save((err,result)=>{
            if(!err){
                console.log("record inserted successfully"+result);
            }else {
                console.log(err);
            }
        });

    //res.sendFile(__dirname+"/index.html");
  })*/

    socket.on("chat message",(msg)=>{
        console.log(msg);
  })



});
})

http.listen(9090,()=>console.log("server running on port number 9090"));
