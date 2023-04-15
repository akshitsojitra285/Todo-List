let mynodelist = document.getElementsByTagName("li");
for (let i = 0; i < mynodelist.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className="close";
    span.appendChild(txt);
    mynodelist[i].appendChild(span);
}
let close = document.getElementsByClassName("close");
for (let j = 0; j < close.length; j++) {
    close[j].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";
    }
}
function add() {
    let li = document.createElement("li");
    let input = document.getElementById("text").value;
    let t = document.createTextNode(input);
    li.appendChild(t);
    if (input=="") {
        alert("you must write something!");
    } else {
        document.getElementById("mylist").appendChild(li);
    }
    document.getElementById("text").value="";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className="close";
    span.appendChild(txt);
    li.appendChild(span);

    for (let k = 0; k < close.length; k++) {
        close[k].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}


/*function add(){
    let node = document.createElement("li");
    let text = document.getElementById("text").value;
    node.setAttribute('id',text)
    let textnode = document.createTextNode(text);
    node.append(textnode);
    document.getElementById("mylist").append(node);
    document.getElementById("text").value = "";
}
function remove(){
    let list = document.getElementById("mylist");
    let textr =document.getElementById("text").value;
    let item = document.getElementById(textr);
    list.removeChild(item);
    document.getElementById("text").value = "";
}*/
