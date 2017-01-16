(function() {
  
  var btn = document.getElementById("btn");
  var input = document.getElementById("input");
  var list = document.querySelector('ul');
  
  
  function addCloseMark() {

    var listItem = document.getElementsByTagName("li");
  
    for(var i = 0; i < listItem.length; i++) {

      var span = document.createElement("span");
      var spanText = document.createTextNode("\u00D7");

      span.className = "close";
      span.appendChild(spanText);
      listItem[i].appendChild(span);
    }
    
  }
  
  addCloseMark();
  
  function elementHide() {

     var close = document.getElementsByClassName("close");
  
    for(var i = 0; i < close.length; i++) {

      close[i].addEventListener("click", function(e){

        e.preventDefault();

        var parent = this.parentElement;
        parent.style.display = "none";

      }, false) 
    }
    
  }
  
  elementHide();
  
  
//   adding checked class to <li> element

  list.addEventListener("click", function(e){
    
    if(e.target.tagName === "LI") {

      e.target.classList.toggle("checked");
    }
    
  }, false);
 
  
  
  function addToList() {
    
    var newListItem = document.createElement('li');
    var inputVal = document.getElementById("input").value;
    var text = document.createTextNode(inputVal);
    newListItem.appendChild(text);
    
    if(inputVal === '') {

      alert("Add another item");

    } else {

      document.getElementById("list").appendChild(newListItem);
    }
    
   var inputVal = document.getElementById("input").value = '';
    
    
    addCloseMark();
    
    elementHide();
    
  }
  
  input.addEventListener("keydown", function(e){
   
    if(e.keyCode ===13) {
     addToList();
       e.preventDefault();
    }
      
  }, false);
  
  btn.onclick = addToList;
  
})();


    