// Create a "close" button and append it to each list item
var Node = document.getElementsByClassName("defaultList");
var i;
for (i = 0; i < Node.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  Node[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

function addNewElement() {
    var elem = document.createElement("li");
    var inputElement = document.getElementById("inputText").value;
    var take = document.createTextNode(inputElement);
    elem.appendChild(take);
    if (inputElement === '') {
      alert( "Write something!");
    } else {
      document.getElementById("list").appendChild(elem);
    }
    document.getElementById("inputText").value = " ";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    elem.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
}


