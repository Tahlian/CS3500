<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<link rel="stylesheet" type="text/css" href="mystyle.css">
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<script language="javascript" type="text/javascript" src="js/jquery.js"></script>
	<script language="javascript" type="text/javascript" src="js/jquery.flot.js"></script>
	<script language="javascript" type="text/javascript" src="predator_prey_euler.js"></script>
<!--	<script type="text/javascript">

	function drawGraph(){
		$(function() {

			/*
					var d1 = [];
					for (var i = 0; i < 14; i += 0.5) {
						d1.push([i, Math.sin(i)]);
					}*/
			        var x0;
			        var y0;
			        var alpha, beta, delta, gamma;
			        var t=0.0;
			        var tfinal;
			        var nprint;
			        var h;
			        var n;
			        var i;
			        var xt;
			        var yt;
			        var xtph;
			        var ytph;
			        var MooseArray = [];
			        var WolfArray = [];
			        var TimeArray = [];

			        x0=parseInt(document.getElementById("mooseInput").value);
			        console.log(document.getElementById("mooseInput").value);
			        y0=parseInt(document.getElementById("wolvesInput").value);
			        console.log(document.getElementById("alphaInput").value);
			        //alpha=0.15;
			        alpha=parseFloat(document.getElementById("alphaInput").value);
			        //beta=0.001;
			        beta=parseFloat(document.getElementById("betaInput").value);
					//delta=0.00015;
			        delta=parseFloat(document.getElementById("deltaInput").value);
			        //gamma=0.25;
			        gamma=parseFloat(document.getElementById("gammaInput").value);
			        h=0.1;
			        nprint=5;
			        tfinal=50;
					
			        n=tfinal/h;
			        xt=x0;
			        yt=y0;

			        console.log("t       Time      X(t) Moose   Y(t) Wolves");
			        var j = 0;
			        for(i=0;i<n;i++){
			                t=i*h;
			                if((i%nprint) ==0){
			                        MooseArray.push([t, xt]);
			                        WolfArray.push([t, yt]);
			                        TimeArray[j] = t;
			                        j++;
			                        console.log(t,xt,yt);
			                }
			                xtph = xt+h*(alpha*xt-beta*xt*yt);
			                ytph = yt+h*(delta*xt*yt-gamma*yt);
			                xt=xtph;
			                yt=ytph;
			        }
					console.log(MooseArray);

					$.plot("#placeholder", [{
						data: MooseArray,
						lines: { show: true }
					},{
						data:WolfArray,
						lines: { show: true }
					}]);

					// Add the Flot version string to the footer

					$("#footer").prepend("Flot " + $.plot.version + " &ndash; ");
				});
	}
	</script>
-->

	<title>Predator Prey Model</title>
</head>
<body>
	<?php include 'menu.html'; ?>
	<div class="everything">
		<div class="content">
			<h3 class="title">Predator Prey Model</h3><br>
			<p>This page is a Javascript implementation of the Predator Prey model using Jquery and Flot</p>
			Number of Moose (integer only): <input type="text" id="mooseInput"><br>
			Number of Wolves (integer only): <input type="text" id="wolvesInput"><br>
			Alpha (&alpha;): <input type="text" id="alphaInput" value="0.15"><br>
			Beta (&beta;): <input type="text" id="betaInput" value="0.001"><br>
			Gamma (&gamma;): <input type="text" id="gammaInput" value="0.25"><br>
			Delta (&delta;): <input type="text" id="deltaInput" value="0.00015"><br><br>
			<input type="button" id="submit" onclick="drawGraph()" value="Draw Graph">	
		</div>

	<div class="graph">
					<div id="placeholder" class="demo-placeholder" style="height:1000px; width:1000px"></div>	
	</div>
	</div>
</body>
</html>