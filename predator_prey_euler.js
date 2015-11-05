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

/* Old code
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

        x0=1500.0;
        y0=50.0;
        alpha=0.15;
        beta=0.001;
        delta=0.00015;
        gamma = 0.25;
        h=0.1;
        nprint=10;
        tfinal=50;

        n=tfinal/h;
        xt=x0;
        yt=y0;

        console.log("t       Time      X(t) Moose   Y(t) Wolves");
        for(i=0;i<n;i++){
                t=i*h;
                if((i%nprint) ==0){
                        console.log(t,xt,yt);
                }
                xtph = xt+h*(alpha*xt-beta*xt*yt);
                ytph = yt+h*(delta*xt*yt-gamma*yt);
                xt=xtph;
                yt=ytph;
        }
*/