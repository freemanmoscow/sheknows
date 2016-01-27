/* 	Sheknows Tracking Object
 *	Author: Pavel Usmanov
 *	Created: 26 Jan 2016, 6.34pm
 */

/*
 * Global sheknows object
 */
sheknows = (function() {
	var data = {},
	updateUrl = 'http://techolution.mobi/pavel/userInfo.php',
	updateMethod = 'POST',
	placementInit = 0,
	queue = arguments[0] || false,
	command = "";
	/*
	 * Method: Populates Data object with necessary data
	 */
	this.setData = function (placement){
		var topLocationHostname = "",
			placement = placement?parseInt(placement):false;
		try {
			topLocationHostname = document.referrer;
			var parser = document.createElement('a');
			parser.href = topLocationHostname;
			topLocationHostname = parser.hostname;
		}
		catch (e) {
			console.error("Error:", e.message);
		}
		data.title = document.title;
		data.frame = window.self !== window.top;
		data.hostname = data.frame?topLocationHostname + ',' + window.location.hostname:window.location.hostname;
		data.order = placement || ++placementInit || 0;
		return data
	}
	/*
	 * Method: Sends data to web service
	 */
	this.sendData = function(callback, url, method) {
		var callback = typeof callback === "function"?callback:function() {};
		var xhr = new XMLHttpRequest();
		url = url || updateUrl,
		method = method || updateMethod;
		xhr.open(method, url);
		console.log("data",'{"data":[' + JSON.stringify(data) + ']}');
		xhr.send('{"data":[' + JSON.stringify(data) + ']}');
		xhr.onreadystatechange = function () {
			var DONE = 4; // readyState 4 means the request is done.
			var OK = 200; // status 200 is a successful return.
			if (xhr.readyState === DONE) {
				if (xhr.status === OK) {
					console.log(xhr.responseText);
					callback();
				} else {
					console.error('Error: ' + xhr.status); // An error occurred during the request.
				}
			}
		}
		return xhr
	}
	/*
	 * Method: Populates Data object with necessary data and sends it to web service
	 */
	this.setSendData = function(placement) {
		this.setData(placement);
		this.sendData();
	}
	/*
	 * Method: Processes initial queue created before this script is loaded or performs tracking when this script is already loaded
	 */
	this.processQueue = function() {
		var result;
		if(Array.isArray(queue)){
			queue.forEach(function(item){
				command = item[0];
				placement = item[1];
				typeof this[command] === "function"?result = this[command](placement):console.error("No method:",command);
			})
			queue = false;
		} else {
			command = arguments[0];
			placement = arguments[1];
			typeof this[command] === "function"?result = this[command](placement):console.error("No method:",command);
		}
		return result
	}
	processQueue();
	/*
	 * After initial queue is processed returns reference to tracking method
	 */
	return processQueue
})(sheknows.queue);