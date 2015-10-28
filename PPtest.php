
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>Flot Examples: Series Types</title>
	<!--<link href="../examples.css" rel="stylesheet" type="text/css">-->
	<!--[if lte IE 8]><script language="javascript" type="text/javascript" src="../../excanvas.min.js"></script><![endif]-->
	<script language="javascript" type="text/javascript" src="js/jquery.js"></script>
	<script language="javascript" type="text/javascript" src="js/jquery.flot.js"></script>
	<script type="text/javascript">

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

        x0=1500.0;
        y0=50.0;
        alpha=0.15;
        beta=0.001;
        delta=0.00015;
        gamma = 0.25;
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

	</script>
</head>
<body>

	<div id="header">
		<h2>Series Types</h2>
	</div>

	<div id="content">

		<div class="demo-container">
			<div id="placeholder" class="demo-placeholder" style="height:1000px; width:1000px"></div>
		</div>

		<p>Flot supports lines, points, filled areas, bars and any combinations of these, in the same plot and even on the same data series.</p>

	</div>

	<div id="footer">
		Copyright &copy; 2007 - 2014 IOLA and Ole Laursen
	</div>

</body>
</html>

