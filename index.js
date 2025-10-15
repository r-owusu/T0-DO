/*var note = document.querySelector(".note");
var schedule= document.querySelector(".schedule");
note.onclick=function(){
  this.setAttribute('class',"note active");
schedule.classList.remove("active")
}
schedule.onclick=function(){
    this.setAttribute('class', "schedule active")
    note.classList.remove("active")
}*/
var dates = document.querySelector(".dates");
var date = function(){

  for(var i=0; i<30; i++){
    console.log(i+1);
    var num =document.createElement('div');
    num.innerHTML=i+1;
    dates.appendChild(num);
    num.onclick=function(){
    var allday =  dates.querySelectorAll('div');
    for(var i=0; i<allday.length; i++){
      allday[i].classList.remove("active");
    }
    this.classList.add("active")
    }
  }
}

date();
console.log("hello");