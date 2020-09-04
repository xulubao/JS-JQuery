function timer() {
    var date = new Date();
    var div = document.getElementById("v");
    div.innerHTML = date.toLocaleString();
    setTimeout("timer()", 1000);

}
timer();

