/* 	Global Project File
 *	Author: Pavel Usmanov
 *	Created: 26 Jan 2016, 6.34pm */

//TESTING ONLY

//Method: Autoresize iframes to fit content
function autoResize(id){
    var newheight;
    var newwidth;

    if(document.getElementById){
        newheight = document.getElementById(id).contentWindow.document.body.scrollHeight;
        newwidth = document.getElementById(id).contentWindow.document.body.scrollWidth;
    }

    document.getElementById(id).height = (newheight + 20) + "px";
    document.getElementById(id).width = (newwidth + 20) + "px";
}

//Method: displays iframe information
window.onload = function() {
	var newElement = document.createElement("div"),
		parentNode = document.getElementsByTagName("body")[0];
	newElement.innerHTML = window.self !== window.top?"This is a frame":"This is not a frame";
	newElement.style.color = "#FF9966";
	parentNode.insertBefore(newElement, parentNode.firstChild);
	autoResize("frame1");
}
