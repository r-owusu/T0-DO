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
var selectedDay;
var date = function(){
  dates.innerHTML = "";
//var numd;

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
    this.classList.add("active");
     selectedDay= this.innerHTML;
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
month.onclick=function(){
if( monthList.classList.contains("hidden")){
 monthList.classList.remove("hidden");
 }
 else{
  monthList.classList.add("hidden");
 }
}
var allmonths = document.querySelectorAll('.monthList>li');
for(var i=0; i<allmonths.length; i++){
  allmonths[i].onclick=function(){
   var monthtext= this.innerText;
    month.innerHTML=monthtext;
      monthList.classList.add("hidden");
var newMonthIndex = monthNames.indexOf(this.innerText.trim());
     var newDay = myDate.getDate();
     myDate.setDate(1);
     myDate.setMonth(newMonthIndex);
     console.log("New month index:", newMonthIndex);
console.log("myDate month after set:", myDate.getMonth());
      console.log(month);
      console.log(myDate.getMonth());
      console.log(this.innerText.trim());
      console.log(myDate.getMonth());
     
      date();
}
}

var year = document.querySelector(".year");
year.innerHTML=myDate.getFullYear();
var yearList = document.querySelector(".yearList");
year.onclick=function(){
  if( yearList.classList.contains("hidden")){
 yearList.classList.remove("hidden");
 }
 else{
  yearList.classList.add("hidden");
 }
}



var curryear = myDate.getFullYear();  
console.log("Current year:", curryear);

var startyear = curryear - 15;
var endyear = curryear +15;
yearList.innerHTML="";
for(var i=startyear; i<=endyear; i++){
  var yli=document.createElement('li');
  yli.innerText=i;
  
  var allyears = document.querySelectorAll('.yearList > li');

  yli.onclick=function(){
   var yeartext= this.innerText;
   myDate.setDate(1);
    year.innerHTML=yeartext;
      yearList.classList.add("hidden");
      myDate.setFullYear(yeartext);
      date();

}
yearList.appendChild(yli);

}                                                                                                                                                                                              
console.log();

var backbutton= document.querySelector(".backbutton");
var addEvent = document.querySelector(".addEvent");
var addEventPage = document.querySelector(".addEventPage");
addEvent.onclick=function(){
  if(addEventPage.classList.contains("hidden")){
    addEventPage.classList.remove("hidden");
  }
  else{
  addEventPage.classList.add("hidden");
  }
}
backbutton.onclick=function(){
  addEventPage.classList.add("hidden");
}

var done = document.querySelector("#done");
var input = document.querySelectorAll('input');

var scheduleContainer = document.querySelector('.scheduleContainer');
done.onclick = function(){  
var eventTitleValue = document.querySelector('#eventTitle').value;
var placeValue =document.querySelector('#place').value;
var noteValue= document.querySelector('#notes').value;
var isFullday = document.querySelector('#scheduletoggle').checked;
var newEvent = document.createElement('div');
newEvent.classList.add('event');


var monthNumber = myDate.getMonth()+1;
var monthNumberString =monthNumber.toString();
if(monthNumberString.length==1){
  var newmonthNumberString ="0"+ monthNumberString;
  monthNumberString=newmonthNumberString;
}

var selectedDayString = (selectedDay !== undefined ? selectedDay : myDate.getDate()).toString();
if(selectedDayString.length==1){
  var newselectedDayString= "0"+selectedDayString;
  selectedDayString=newselectedDayString;
}
var label = myDate.getFullYear() +"-"+ monthNumberString+"-" + selectedDayString;


var circle= document.createElement('div');
circle.classList.add('circle');
var eventCard = document.createElement('div');
eventCard.classList.add('eventCard');
circle.innerHTML=selectedDay||myDate.getDate();
var title = document.createElement('h4');
title.innerHTML=eventTitleValue;
var place =document.createElement('p');
place.innerHTML=placeValue;
var notes = document.createElement('p');
notes.innerHTML=noteValue;
var line = document.createElement('hr');
eventCard.appendChild(title);
line.classList.add("line");
eventCard.appendChild(line);
eventCard.appendChild(place);
eventCard.appendChild(notes);

newEvent.appendChild(circle);
newEvent.appendChild(eventCard);
scheduleContainer.appendChild(newEvent);
addEventPage.classList.add("hidden");
}