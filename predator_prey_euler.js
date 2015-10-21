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
