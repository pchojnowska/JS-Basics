function setUpEvents() {

    var content = document.getElementById("content");
    var button = document.getElementById("show-more");
    var myMessage = document.getElementById("message");

    //changing colors at certain intervals - variables
    var colorChanger = document.getElementById("color-changer");
    var colors = ["red", "blue", "green", "pink"];
    var counter = 0;


    //function to expand and shrink a box with content upon the click of a button
    button.onclick = function (){
        if(content.className === "open") {
            //shrink the box
            content.className = "";
            button.innerHTML = "Show more";
        } else {
            //expand the box
            content.className = "open";
            button.innerHTML = "Show less";
        }
    };

    // function to show a message after specific time
    function showMessage(){
        myMessage.className = "show";

    }

    setTimeout(showMessage, 3000);

    //function to change the color of a box at specific intervals
    //Goes through all the colors in the array & then starts anew
    function changeColor(){
        if(counter >= colors.length){
            counter = 0;
        }
        colorChanger.style.background = colors[counter];
        counter++;

    }

    //we store the setInterval function in a variable to reuse it later to stop the color changer
    var myTimer = setInterval(changeColor, 3000);

    //stop changing colours when you click on the box & change the text there
    colorChanger.onclick = function() {
        clearInterval(myTimer);
        colorChanger.innerHTML = "Timer stopped";
    };
}



window.onload = function() {

    setUpEvents();

};