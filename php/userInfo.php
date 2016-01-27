<?php
/* 	PHP web service to store tracking data
 *	Author: Pavel Usmanov
 *	Created: 26 Jan 2016, 6.34pm */

header('Access-Control-Allow-Origin: *');

include_once('db.php');

/*
 * Populates variables with POST request data
 */
$entityBody = file_get_contents("php://input");
$array = json_decode($entityBody,TRUE);
$title		= $array['data'][0]['title'];
$hostname	= $array['data'][0]['hostname'];
$frame 		= $array['data'][0]['frame'];
$order 		= $array['data'][0]['order'];
$remoteip	= $_SERVER['REMOTE_ADDR'];

/*
 * Inserts data in SQL table and sends a response on success / failure
 */
if(mysql_query("INSERT INTO user (`date`, `title`, `hostname`, `frame`, `order`, `remoteip`) VALUES(now(), '$title', '$hostname', '$frame', '$order', '$remoteip')"))
	echo "Successfully inserted";
else
	echo "Insertion failed";

?>
