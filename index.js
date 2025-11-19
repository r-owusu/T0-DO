
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
var notesPage= document.querySelector(".notesPage");
var datetrack = [];
var scheduleContainer = document.querySelector('.scheduleContainer');
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
var label = myDate.getFullYear() +"-"+ monthNumberString+"-" + selectedDayString



 scheduleContainer.innerHTML="";
   var eventsFound=false;

    for(var i=0;i<datetrack.length; i++){
        if(datetrack[i].date === label){
        eventsFound=true;
            var circle= document.createElement('div');
circle.classList.add('circle');
var eventCard = document.createElement('div');
eventCard.classList.add('eventCard');
circle.innerHTML=selectedDay||myDate.getDate();
var title = document.createElement('h4');
title.innerHTML=datetrack[i].title;
var place =document.createElement('p');
place.innerHTML=datetrack[i].place;
var notes = document.createElement('p');
notes.innerHTML=datetrack[i].notes;
var line = document.createElement('hr');
eventCard.appendChild(title);
line.classList.add("line");
eventCard.appendChild(line);
eventCard.appendChild(place);
eventCard.appendChild(notes);
var newEvent = document.createElement('div');
newEvent.classList.add("event");
newEvent.appendChild(circle);
newEvent.appendChild(eventCard);
scheduleContainer.appendChild(newEvent);

        }
     
    }    
if (eventsFound===false){
  var noEventText = document.createElement("div");
  noEventText.innerText="No events for this date";
  scheduleContainer.appendChild(noEventText);
}









    }
   

  }



var today = myDate.getDate();


var allDivs = dates.children; 

for (var i = 0; i < allDivs.length; i++) {
    var div = allDivs[i];

 
    if (div.innerHTML !== "") {

        if (parseInt(div.innerHTML) === today) {
            div.classList.add("active");
            selectedDay = today;         
        }
    }
}



}
date();
var today = myDate.getDate();
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

var Fulldaytoggle = document.querySelector('#Fulldaytoggle');
var eventField= document.querySelector(".eventField");
var timespan = document.querySelector(".timespan");
 Fulldaytoggle.onclick=function(){
  if(timespan.classList.contains("blur")){
  timespan.classList.remove("blur");
}
  else{
    timespan.classList.add("blur")
  }
  console.log("Hello");
 }




done.onclick = function(){  
var eventTitleValue = document.querySelector('#eventTitle').value;
var placeValue =document.querySelector('#place').value;
var noteValue= document.querySelector('#notes').value;

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


const trackoject = {
  date: label,
  title: eventTitleValue,
  notes: noteValue,
  place: placeValue
}
datetrack.push(trackoject);
console.log(datetrack);


scheduleContainer.innerHTML="";
   var eventsFound=false;

    for(var i=0;i<datetrack.length; i++){
        if(datetrack[i].date === label){
        eventsFound=true;
            var circle= document.createElement('div');
circle.classList.add('circle');
var eventCard = document.createElement('div');
eventCard.classList.add('eventCard');
circle.innerHTML=selectedDay||myDate.getDate();
var title = document.createElement('h4');
title.innerHTML=datetrack[i].title;
var place =document.createElement('p');
place.innerHTML= "<strong>Place:</strong> " +datetrack[i].place;
var notes = document.createElement('p');
notes.innerHTML="<strong>Notes: </strong> "+datetrack[i].notes;
var line = document.createElement('hr');
eventCard.appendChild(title);
line.classList.add("line");
eventCard.appendChild(line);
eventCard.appendChild(place);
eventCard.appendChild(notes);
var newEvent = document.createElement('div');
newEvent.classList.add("event");
newEvent.appendChild(circle);
newEvent.appendChild(eventCard);
scheduleContainer.appendChild(newEvent);

        }
     
    }    
if (eventsFound===false){
  var noEventText = document.createElement("div");
  noEventText.innerText="No events for this date";
  scheduleContainer.appendChild(noEventText);
}




}

var noteButton = document.querySelector(".noteButton");
noteButton.onclick=function(){
 if(notesPage.classList.contains("hidden")){
  notesPage.classList.remove("hidden");
 }
 else {
  notesPage.classList.add("hidden")
 }
}
var backbuttonfornotes = document.querySelector(".backbuttonfornotes");
backbuttonfornotes.onclick=function(){
  notesPage.classList.add("hidden")
}
var startfrom = document.querySelector("#startfrom");
var startTime= document.querySelector("#startTime");
var StartfromEventRowValue = startfrom.querySelector(".eventRowValue");
startTime.addEventListener('change', updateStartfield );


function updateStartfield(){
 var startTimeValue = startTime.value;
 console.log(startTimeValue);
 StartfromEventRowValue.innerText=startTimeValue;
 var startobj = new Date(startTimeValue);
 StartfromEventRowValue.innerText=startobj.toLocaleString('en-US', {weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  hour12: true});
}


startfrom.onclick = function() {
    try {
        startTime.showPicker();
        console.log("Picker opened!");
    } catch (error) {
        console.log("showPicker not supported, trying click");
        startTime.focus();
        startTime.click();
    }
}






var finish =document.querySelector("#finish");
var finishEventRowValue = finish.querySelector(".eventRowValue");
var finishTime = document.querySelector("#finishTime");
finishTime.addEventListener("change", updatefinishfield);
function updatefinishfield(){
 var finishTimeValue = finishTime.value;
 console.log(finishTimeValue);
 finishEventRowValue.innerText=finishTimeValue;
 var finishobj = new Date(finishTimeValue);
 finishEventRowValue.innerText=finishobj.toLocaleString('en-US', {weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  hour12: true});
}


finish.onclick=function(){
   finishTime.showPicker();
}










var repeatButton = document.querySelector("#repeatButton");
var repeatPopup= document.querySelector(".repeatPopup");
var repeatValueSpan = repeatButton.querySelector(".eventRowValue");

repeatButton.onclick=function(){
  if(repeatPopup.classList.contains("hidden")){
  repeatPopup.classList.remove("hidden");
  }
  else{
    repeatPopup.classList.add("hidden");
  }
}
var repeatOptions = document.querySelectorAll(".repeatPopup>div");
for(var i=0; i<repeatOptions.length; i++){
   repeatOptions[i].onclick=function(){
      var value = this.textContent;
repeatValueSpan.textContent = value;
repeatPopup.classList.add("hidden");
   }
}

var reminderButton= document.querySelector("#reminderButton");
var reminderPopup = document.querySelector(".reminderPopup");
reminderButton.onclick=function(){
   if(reminderPopup.classList.contains("hidden")){
  reminderPopup.classList.remove("hidden");
  }
  else{
    reminderPopup.classList.add("hidden");
  }
}
 var reminderOptions = reminderPopup.querySelectorAll("div");
 var reminderEventRowValue = reminderButton.querySelector(".eventRowValue");
 for(var i=0; i<reminderOptions.length; i++){
  reminderOptions[i].onclick=function(){
reminderEventRowValue.textContent=this.textContent;
reminderPopup.classList.add("hidden");
}
}
var addNote = document.querySelector(".addNote");

let activeNote = null;
var writeNotes=document.querySelector(".writeNotes");

addNote.onclick=function(){
 console.log("God is good");
  var note = document.createElement("div");
 note.classList.add("notetext");
 var notesSection = document.querySelector(".notesSection");
 notesSection.appendChild(note);
 note.onclick=function(){
 activeNote=note;
writeNotes.classList.remove("hidden");
if(note.hasChildNodes()){
var text =  note.firstElementChild.innerText;
noteText.value=text

}
 }
}


var backforwritenote = document.querySelector(".backforwritenote");
var noteText = document.querySelector("#noteText");

backforwritenote.onclick=function(){
  var  noteTextValue = document.querySelector("#noteText").value;
  if(activeNote.hasChildNodes()){
   activeNote.firstElementChild.innerText = noteTextValue;
   writeNotes.classList.add("hidden");
  }
  else{
var notechild=document.createElement('div');
notechild.innerText=noteTextValue;
activeNote.appendChild(notechild);
writeNotes.classList.add("hidden");
  }
  noteText.value="";

}








