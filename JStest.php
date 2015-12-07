<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<link rel="stylesheet" type="text/css" href="mystyle.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script language="javascript" type="text/javascript" src="js/CamStorage.js"></script>
	<script language="javascript" type="text/javascript">window.onload = function(){ getNames(); };</script>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>Light Test</title>
	<base target="_blank">
	<style>#myCanvas{display: none;}</style>
	<style>#red, #green, #blue{display: inline;}</style>
</head>
<body>
<?php include 'menu.html'; ?>
<video id="video" width="800" height="600" style="max-width:100%;background:#111;border:1px solid #666;" autoplay></video>
<canvas id="myCanvas" width="800" height="600"></canvas><br>
<button id="MediaStreamStartButton">Start</button> <button id="MediaStreamStopButton">Stop</button>
<select id="videoSource"></select><br>
Name: <input type="text" id="saveInput" value="">
<input type="button" id="saveButton" onclick="Save()" value="Save"><br>
Averages<br>
Red: <p id="red">0</p>
Green: <p id="green">0</p>
Blue: <p id="blue">0</p><br>
<input type="button" id="load" onclick="Load()" value="Load Averages">	
<input type="button" id="delete" onclick="deleteSave()" value="Delete">
<select id="saves">
</select><br>
<script src=js/adapter.js></script>
<script src=js/main.js></script>
</body>
</html>

