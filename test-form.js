var myForm = document.forms.myForm;
var message = document.getElementById("message");
myForm.name.onfocus = function() {
    myForm.name.style.border = "4px solid pink";
};

myForm.name.onblur = function() {
    myForm.name.style.border = "none";
};


//validation for name input

myForm.onsubmit = function() {

    if(myForm.name.value == "") {
        message.innerHTML = "please enter a name";
        return false;

    } else{
        message.innerHTML = "";
        return true;
    }
};
