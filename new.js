// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("Close");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.transition = "0.5s"
    div.style.marginLeft = "-200vw"
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);




// Create a new list item when clicking on the "Add" button
 function newElement() {


  var li = document.createElement("li");
  li.className = "newList";
 
  var inputValue = i+1+ ".  " + document.getElementById("myInput").value ;

  var t = document.createTextNode(inputValue);
  
  li.appendChild(t);
  if (inputValue === "") {
    alert("Dodaj Mysie Zadanie !");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";


  var span = document.createElement("SPAN");
  var txt = document.createTextNode("close");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);


  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
     div.style.transition = "0.5s"
    div.style.marginLeft = "-200vw"
    }
  }
 

 };






