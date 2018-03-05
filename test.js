/* var myBody = document.getElementsByTagName("body");
myBody[0].innerHTML = "<p>I'm a paragraph</p>"; */

/* var firstLinkText = document.getElementById("first-link");
firstLinkText.textContent = "My first super link"; */

var link = document.getElementById("test");
link.setAttribute("class", "toyota");
link.setAttribute("alt", "This is a link");
link.className = "ninja";


var styledLink = document.getElementById("third-link");
styledLink.setAttribute("style", "position: relative; left: 10px;");

styledLink.style.margin = "10px";
styledLink.style.color = "green";
styledLink.style.backgroundColor = "yellow";