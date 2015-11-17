<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<link rel="stylesheet" type="text/css" href="mystyle.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>Resources</title>
	<base target="_blank">
	<style>#myCanvas{display: none;}</style>
</head>
<body>
<?php include 'menu.html'; ?>
<video id="video" width="800" height="600" style="max-width:100%;background:#111;border:1px solid #666;" autoplay></video>
<canvas id="myCanvas" width="800" height="600"></canvas>
<button id="MediaStreamStartButton">Start</button> <button id="MediaStreamStopButton">Stop</button>
<select id="videoSource"></select>
<script src=js/adapter.js></script>
<script src=js/main.js></script>
</body>
</html>

