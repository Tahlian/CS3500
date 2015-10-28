'use strict';

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

var constraints = {audio: false, video: true};
var video = document.querySelector('video');

function successCallback(stream) {
  window.stream = stream; // stream available to console
  if (window.URL) {
    video.src = window.URL.createObjectURL(stream);
  } else {
    video.src = stream;
  }
 // source.canvas.width = video.videoWidth;
 // source.canvas.height = video.videoHeight;
 // draw();
}

function errorCallback(error){
  console.log('navigator.getUserMedia error: ', error);
}

//navigator.getUserMedia(constraints, successCallback, errorCallback);



function clickTag(){
   $("#taggable").click(function(e){
    	//var x = e.pageX - this.offsetLeft;
    	//var y = e.pageY - this.offsetTop;
	var x = e.pageX - $(this).offset().left;
	var y = e.pageY - $(this).offset().top;
    	//var url = $(this).attr("href");
    	//courl = url + '&x=' + x + '&y=' + y;
	
/*      $.ajax({
    	type:"GET",
     	url: courl,
    	dataType:"script"
    	});*/
	console.log(x);
	console.log(y);
	
	var imgData = source.getImageData(x,y,10,10);
	var Aves = getAverage(imgData);
	alert("red=" + Aves[0] + "  green=" + Aves[1] + "  blue=" + Aves[2]);
    	return false;
   }); 
}

function getAverage(imgData){
	var redTotal = 0;
	var greenTotal = 0;
	var blueTotal = 0;
	var total = 0;
	for (var i=0;i<imgData.data.length;i+=4)
	{
		redTotal += imgData.data[i+0];
		greenTotal += imgData.data[i+1];
		blueTotal += imgData.data[i+2];
		total++;
	}
	var Averages = new Array;
	Averages[0] = redTotal/total;
	Averages[1] = greenTotal/total;
	Averages[2] = blueTotal/total;
	
	return Averages;
}

$(document).ready(function(){
clickTag();
});

var video = document.querySelector('video');
var source = document.getElementById('display').getContext('2d'),
    output = source; //document.getElementById('output').getContext('2d'),
    //target = document.getElementById('display');
var videoSelect = document.querySelector('select#videoSource');

video.addEventListener('loadedmetadata', function () {
  // due to bug in Chrome: http://crbug.com/168700
  if (video.videoWidth) {
    source.canvas.width = video.videoWidth;
    source.canvas.height = video.videoHeight;
  }
  draw();
});


function draw() {
  requestAnimFrame(draw);
  source.drawImage(video, 0, 0, video.videoWidth, video.videoHeight, 0, 0, source.canvas.width, source.canvas.height);
  var pixels = source.getImageData(0, 0, source.canvas.width, source.canvas.height),
      i = 0,
      brightness;
  output.putImageData(pixels, 0, 0);
}


window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       || 
          window.webkitRequestAnimationFrame || 
          window.mozRequestAnimationFrame    || 
          window.oRequestAnimationFrame      || 
          window.msRequestAnimationFrame     || 
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();


function gotSources(sourceInfos) {
  for (var i = 0; i !== sourceInfos.length; ++i) {
    var sourceInfo = sourceInfos[i];
    var option = document.createElement('option');
    option.value = sourceInfo.id;
    if (sourceInfo.kind === 'audio') {
      //option.text = sourceInfo.label || 'microphone ' + (audioSelect.length + 1);
     // audioSelect.appendChild(option);
    } else if (sourceInfo.kind === 'video') {
      option.text = sourceInfo.label || 'camera ' + (videoSelect.length + 1);
      videoSelect.appendChild(option);
    } else {
      console.log('Some other kind of source: ', sourceInfo);
    }
  }
}

if (typeof MediaStreamTrack === 'undefined'){
  alert('This browser does not support MediaStreamTrack.\n\nTry Chrome Canary.');
} else {
  MediaStreamTrack.getSources(gotSources);
}

function start(){
  if (!!window.stream) {
    video.src = null;
    window.stream.stop();
  }
  //var audioSource = audioSelect.value;
  var videoSource = videoSelect.value;
  var constraints = {
    /*audio: {
      optional: [{sourceId: audioSource}]
    },*/
    video: {
      optional: [{sourceId: videoSource}]
    }
  };
  navigator.getUserMedia(constraints, successCallback, errorCallback);
}

videoSelect.onchange = start;

start();


