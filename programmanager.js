
var empObj =[];

function storeInSession() {
    sessionStorage.setItem("projectinfo",JSON.stringify(empObj))
}
function retrieveFromSession() {
    var obj = JSON.parse(sessionStorage.getItem("projectinfo"));
    console.log(obj);

}
function onFormSubmit(){
    //alert("Event generated...")
    var data = readFormData();
    insertNewRecord(data);
    empObj.push(data);      //in empObj
    resetData();

}

function readFormData() {
    var obj = {}    // empty object
    obj.client = document.getElementById("client").value;
    obj.project = document.getElementById("project").value;
    obj.budget = document.getElementById("budget").value;
    console.log(obj);
    return obj;
}
function insertNewRecord(data){
 var table = document.getElementById("projectdetails")
 var body = table.getElementsByTagName("tbody")[0];
 var newRow = body.insertRow(body.length);  // row created

 var cell1 = newRow.insertCell(0);          // cell created
 cell1.innerHTML=data.client;                 // value placed

 var cell2 = newRow.insertCell(1);          // cell created
 cell2.innerHTML=data.project;                 // value placed

 var cell3 = newRow.insertCell(2);          // cell created
 cell3.innerHTML=data.budget;

}

function resetData() {
document.getElementById("client").value="";
document.getElementById("project").value="";
document.getElementById("budget").value="";
}
