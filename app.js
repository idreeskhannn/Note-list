var card = document.getElementById("div")


function add() {
 

  var input = document.getElementById("inpt").value
  var disc = document.getElementById("desc").value
  
 
if((input.length >3 && disc.length >3))
  {

    var di = `
    <div class="card cc" style="width: 18rem;">
<div class="card-body " >
  <h1 class="card-title" id="h">${input}</h1>

  <p class="card-text" id="p1">${disc}</p>
  <a href="#" class="card-link" onclick="dlt(this)">DELETE</a>
  <a href="#" class="card-link" onclick="edit(this)">EDIT</a>
</div>
 </div>
 `

 
// console.log(di)
card.innerHTML += di

}
else{
  alert("enter more than 3 words")
}



  }

function myDel(){
  card.innerHTML=""
}

function dlt(e) {
  e.parentNode.parentNode.remove()
}

function edit(e) {
  console.log(e.parentNode.firstElementChild)
  // var ad = prompt("add Title", e.parentNode.firstElementChild)
  // console.log(ad)


  // var ad1 = prompt("add discription")

}
