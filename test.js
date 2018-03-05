/* var myBody = document.getElementsByTagName("body");
myBody[0].innerHTML = "<p>I'm a paragraph</p>"; */

/* var firstLinkText = document.getElementById("first-link");
firstLinkText.textContent = "My first super link"; */

// Let's add attributes
var link = document.getElementById("test");
link.setAttribute("class", "toyota");
link.setAttribute("alt", "This is a link");
link.className = "ninja";

// Let's add some styling to HTML elements
var styledLink = document.getElementById("third-link");
styledLink.setAttribute("style", "position: relative; left: 10px;");

styledLink.style.margin = "10px";
styledLink.style.color = "green";
styledLink.style.backgroundColor = "yellow";

//Let's add a new list item before the JS script reference
var newHref = document.createElement("a");
var allLinks = document.getElementsByTagName("body")[0];
allLinks.insertBefore(newHref, allLinks.getElementsByTagName("script")[0]);
newHref.innerHTML = "New link";
newHref.setAttribute("href", "#");

// Let's remove the first link - it's Link zero anyways
var toBeRemoved = allLinks.getElementsByTagName("a")[0];

// store it in a variable to reinstall it back if needed
var removed = allLinks.removeChild(toBeRemoved);

// to add the removed element back
// allLinks.appendChild(removed);