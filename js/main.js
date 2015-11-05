'use strict';

var videoElement = document.querySelector('video');
var videoSelect = document.getElementById("videoSource");

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

document.getElementById('MediaStreamStartButton').onclick = start;
videoSelect.onchange = start;
document.getElementById('MediaStreamStopButton').onclick = function() {if (window.stream) { window.stream.stop(); }};


