document.querySelector("#time").textContent = moment().format("dddd MMM DD");


document.querySelector("#hour").textContent = moment().format("h");
var time = document.querySelector("#hour").textContent; 
document.querySelector("#hour").classList.add("hide");
//past times
// if(time > 9){
//     document.querySelector("#hour-9").classList.add("bg-danger");
// }
// if(time > 10){
//     document.querySelector("#hour-10").classList.add("bg-danger");
// }
// if(time > 11){
//     document.querySelector("#hour-11").classList.add("bg-danger");
// }
// if(time > 12){
//     document.querySelector("#hour-12").classList.add("bg-danger");
// }
// if(time > 13){
//     document.querySelector("#hour-13").classList.add("bg-danger");
// }
// if(time > 14){
//     document.querySelector("#hour-14").classList.add("bg-danger");
// }
// if(time > 15){
//     document.querySelector("#hour-15").classList.add("bg-danger");
// }
// if(time > 16){
//     document.querySelector("#hour-16").classList.add("bg-danger");
// }
// if(time > 17){
//     document.querySelector("#hour-17").classList.add("bg-danger");
// }
// // for(var i=0; i<){
// //     if(document.querySelector().classList.add)
// // }
// //current time
// if(time == 9){
//     document.querySelector("#hour-9").classList.add("bg-success");
// }
// if(time == 10){
//     document.querySelector("#hour-10").classList.add("bg-success");
// }
// if(time == 11){
//     document.querySelector("#hour-11").classList.add("bg-success");
// }
// if(time == 12){
//     document.querySelector("#hour-12").classList.add("bg-success");
// }
// if(time == 13){
//     document.querySelector("#hour-13").classList.add("bg-success");
// }
// if(time == 14){
//     document.querySelector("#hour-14").classList.add("bg-success");
// }
// if(time == 15){
//     document.querySelector("#hour-15").classList.add("bg-success");
// }
// if(time == 16){
//     document.querySelector("#hour-16").classList.add("bg-success");
// }
// if(time == 17){
//     document.querySelector("#hour-17").classList.add("bg-success");
// }

var arrayTimeBlock = document.querySelectorAll(".time-block");
var currentHour = moment().hour();
for (let i = 0; i < arrayTimeBlock.length; i++) {
    //get time block info
    var timeBlockHour = arrayTimeBlock[i].getAttribute("hour");

    //compare time
    if (timeBlockHour < currentHour) {
        arrayTimeBlock[i].children[1].classList.add("bg-danger");
    }
    if (timeBlockHour == currentHour) {
        arrayTimeBlock[i].children[1].classList.add("bg-success");
    }    
};

//give save btn click ability - store data on click
var arraySaveBtn = document.querySelectorAll(".saveBtn");
arraySaveBtn.forEach(function(saveBtn) {
    saveBtn.addEventListener("click",function(event) {
        //get the local data if there is if no empty string
        var data = JSON.parse(localStorage.getItem("timeData")) || [];
        //get the hour data
        var hourData = event.target.parentNode.getAttribute("hour");
        //get the text data

        var textData = event.target.parentNode.children[1].value;
        //contruct new data entry obj
        var dataEntry = {
            hour: hourData,
            text: textData
        }
        //push newEntry obj into local data copy
        data.push(dataEntry);
        //setitem with updated local copy
        localStorage.setItem("timeData",JSON.stringify(data))
    });
});

//document.querySelector('[hour="11"]')

//show data
var data = JSON.parse(localStorage.getItem("timeData")) || [];
data.forEach(function(datum) {
    var queryString = `[hour="${datum.hour}"]`;
    document.querySelector(queryString).children[1].value = datum.text
});