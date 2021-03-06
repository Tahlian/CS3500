'use strict';

var videoElement = document.querySelector('video');
var videoSelect = document.getElementById("videoSource");
var c1 = document.getElementById("myCanvas");
var ctx1 = c1.getContext("2d");

navigator.getUserMedia = navigator.getUserMedia ||
  navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

/*function gotSources(sourceInfos) {
  for (var i = 0; i !== sourceInfos.length; ++i) {
    var sourceInfo = sourceInfos[i];
    var option = document.createElement('option');
    option.value = sourceInfo.id;
    if (sourceInfo.kind === 'audio') {
      option.text = sourceInfo.label || 'microphone ' + (audioSelect.length + 1);
      audioSelect.appendChild(option);
    } else if (sourceInfo.kind === 'video') {
      option.text = sourceInfo.label || 'camera ' + (videoSelect.length + 1);
      videoSelect.appendChild(option);
    } else {
      console.log('Some other kind of source: ', sourceInfo);
    }
  }
}*/

if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
	  alert("enumerateDevices() not supported.");
	} else {
		navigator.mediaDevices.enumerateDevices()
		.then(function(devices) {
			  devices.forEach(function(device) {
			    console.log(device.kind + ": " + device.label +
			                " id = " + device.deviceId);
			    var option = document.createElement("option");
			    option.value = device.deviceId;
			    if (device.kind == 'videoinput') {
			        option.text = device.label || 'camera ';
			        videoSelect.add(option);
			    } else {
			    	console.log('Some other kind of source: ', device);
			    }
			  });
			});
		}


function successCallback(stream) {
  window.stream = stream; // make stream available to console
  videoElement.src = window.URL.createObjectURL(stream);
  videoElement.play();
}

function errorCallback(error){
  console.log('navigator.getUserMedia error: ', error);
}

function start(){
  if (!!window.stream) {
    videoElement.src = null;
    window.stream.stop();
  }
  var videoSource = videoSelect.value;
  var constraints = {
    video: {
      optional: [{sourceId: videoSource}]
    },
    audio: false
  };
  navigator.getUserMedia(constraints, successCallback, errorCallback);
}

function coloravg () {
	ctx1.drawImage(videoElement, 0, 0, videoElement.width, videoElement.height);
	var imgData = ctx1.getImageData(0, 0, videoElement.width, videoElement.height);
	var aves = getAverage(imgData);
	alert("red=" + aves[0] + "  green=" + aves[1] + "  blue=" + aves[2]);
	document.getElementById("red").innerHTML = aves[0];
	document.getElementById("green").innerHTML = aves[1];
	document.getElementById("blue").innerHTML = aves[2];
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

document.getElementById('MediaStreamStartButton').onclick = start;
videoSelect.onchange = start;
document.getElementById('MediaStreamStopButton').onclick = function() {if (window.stream) { window.stream.stop(); }};
videoElement.onclick = coloravg;


