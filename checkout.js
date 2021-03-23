function setItems(item, price) {
    console.log(item);
    console.log(price);
    //var js:any[]=["item",price];
    var js = {
        "item": item,
        "price": price
    };
    if (!localStorage.getItem("details")) {
        console.log(js);
        localStorage.setItem("details", JSON.stringify([js]));
    }
    else {
        console.log(typeof (localStorage.getItem('details')));
        var session = JSON.parse(localStorage.getItem('details'));
        console.log(typeof (session));
        session.push(js);
        console.log(session);
        localStorage.setItem('details', JSON.stringify(session));
    }
}
function addBlock() {
    var item = document.getElementById('item').innerHTML;
    var price = document.getElementById('price').innerHTML;
    console.log("kp");
    console.log(item);
    console.log(price);
    alert("Item Added");
    setItems(item, price);
}
function blockCreation() {
    var session = JSON.parse(localStorage.getItem('details'));
    console.log(session);
    for (var i = 0; i < session.length; i++) {
        var temp = "<div class='insideBlock'><p>" + session[i].item + "</p><p>" + session[i].price + "</p></div>";
        document.getElementById('blockHead').innerHTML += temp;
    }
}
