//TO ADD NEW TASK
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);

  const removebtn = document.createElement('removebtn');
  const checkbtn = document.createElement('checkbtn');
  
  removebtn.innerHTML = '<i class="fa fa-trash"></i>';
  checkbtn.innerHTML = '<i class="fa fa-check-circle"></i>';

  if(myInput.value !==''){
    li.text=myInput.value;
    myInput.value = '';
    myList.appendChild(li);
    li.appendChild(removebtn);
    li.appendChild(checkbtn);
  }
  else{
    alert("Please input task!");
  }
//PAG CHECK MABALHIN DAYON SA COMPLETED TASK
  checkbtn.addEventListener('click' , function(){
    const parent = this.parentNode;
    completedList.appendChild(parent);
    li.style.textDecoration="line-through";
    checkbtn.style.display = "none";
  })
//TO REMOVE TASK
  removebtn.addEventListener('click' , function(){
    const parent = this.parentNode;
    parent.remove();
  })
}