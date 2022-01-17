const card = document.getElementById("div")
let add =_=> {
  let input = document.getElementById("inpt").value
  let disc = document.getElementById("desc").value
  if((input.length >3 && disc.length >3))
  {  var di = `
    <div class="card cc" style="width: 18rem;">
    <div class="card-body " >
    <h1 class="card-title" id="h">${input}</h1>
    <p class="card-text" id="p1">${disc}</p>
    <a href="#" class="card-link" onclick="dlt(this)">DELETE</a>
    <a href="#" class="card-link" onclick="edit(this)">EDIT</a>
    </div></div> ` 
    // console.log(di)
    card.innerHTML += di
    // input.value = ""
    // disc.value=""
}
else{
  alert("enter more than 3 words")
}} 
let myDel=_=> card.innerHTML=""
let dlt= e =>e.parentNode.parentNode.remove()
let edit=e=> {
  // console.log(e.parentNode.children[1].innerHTML)
  var ad = prompt("add Title", e.parentNode.firstElementChild.innerHTML)
  var ad1 = prompt("add Title", e.parentNode.children[1].innerHTML)
  // console.log(ad)
  // console.log(ad1)
  e.parentNode.firstElementChild.innerHTML = ad
  e.parentNode.children[1].innerHTML = ad1
  // var ad1 = prompt("add discription")
}