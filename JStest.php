<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<link rel="stylesheet" type="text/css" href="mystyle.css">
	<script src="../js/lib/ga.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>Resources</title>
	<base target="_blank">
	<style>
	#webcam,
    #feed {
        display: none;
    }
	video {
	  object-fit: cover;
	}
	
	@media screen and (min-width: 1000px) {
	  video {
	    height: 480px;
	  }
	}
	</style>
</head>
<body>
	<div class="everything">
	<?php include 'menu.html'; ?>
	<div class="content">
	<h3>Test</h3><br>

	<p>This page is a Test environment for Javascript/JQuery programs.</p>
	<div class="select">
		<label for="videoSource">Video source: </label><select id="videoSource"></select>
	</div>
	<video id="taggable" autoplay=""></video>
	<canvas id="feed"></canvas>
	<canvas id="display"></canvas>
	<script type="text/javascript">
	window.requestAnimationFrame ||
        (window.requestAnimationFrame = window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function( callback ){
                window.setTimeout(callback, 1000 / 60);
            });
	var webrtc = (function() {
        var feed = document.getElementById('feed'),
            feedContext = feed.getContext('2d'),
            display = document.getElementById('display'),
            displayContext = display.getContext('2d');

        // our existing code.

        function streamFeed() {
            requestAnimationFrame(streamFeed);
            displayContext.drawImage(video, 0, 0, display.width, display.height);
        }
    })();
	</script>
	<script src="js/main.js"></script>
	</div>
	</div>
</body>
</html>

