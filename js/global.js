/* 	Global Project File
 *	Author: Pavel Usmanov
 *	Created: 26 Jan 2016, 6.34pm */

//TESTING ONLY

//Method: Autoresize iframes to fit content

//Method: displays iframe information
window.onload = function() {
	var newElement = document.createElement("div"),
		parentNode = document.getElementsByTagName("body")[0];
	newElement.innerHTML = window.self !== window.top?"This is a frame":"This is not a frame";
	newElement.style.color = "#FF9966";
	parentNode.insertBefore(newElement, parentNode.firstChild);
	autoResize("frame1");
}
