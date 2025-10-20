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
var myDate = new Date();

var date = function(){
  dates.innerHTML = "";
var numd;

/*if(myDate.getMonth()==8||myDate.getMonth()==3||myDate.getMonth()==5||myDate.getMonth()==10){
  numd=30;
}
else if(myDate.getMonth()==1){
numd=28;
}

else{
  numd=31;
}*/



var numd = new Date(myDate.getFullYear(), myDate.getMonth() + 1, 0).getDate();







var firstDay = new Date(myDate.getFullYear(), myDate.getMonth(), 1);
var firstDaynum= firstDay.getDay();
console.log(firstDaynum);
for(var i=0; i<firstDaynum;i++){
 var space= document.createElement('div');
 dates.appendChild(space);
}
  for(var i=0; i<numd; i++){
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
var monthNames=["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
var monthName=monthNames[myDate.getMonth()];
console.log(myDate.getDate() + " "+monthName+" "+myDate.getFullYear() );
var month=document.querySelector(".month");
month.innerHTML=monthName;
var monthList = document.querySelector(".monthList");
var year = document.querySelector(".year");
year.innerHTML=myDate.getFullYear();
month.onclick=function(){
if( monthList.classList.contains("hidden")){
 monthList.classList.remove("hidden");
 }
 else{
  monthList.classList.add("hidden");
 }
}
var allmonths = document.querySelectorAll('li');
for(var i=0; i<allmonths.length; i++){
  allmonths[i].onclick=function(){
   var monthtext= this.innerText;
    month.innerHTML=monthtext;
      monthList.classList.add("hidden");
var newMonthIndex = monthNames.indexOf(this.innerText.trim());
     myDate.setMonth(newMonthIndex);
        dates.innerHTML="";
date();


}
}
