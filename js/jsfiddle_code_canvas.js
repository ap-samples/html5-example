var canv = document.getElementById("canv");
var ctx = canv.getContext("2d");
ctx.fillStyle = "#FF0000";

var FILL_ENUM = {
    FILL: { value: 0},
    NO_FILL: {value: 1}
}

var GRAD_ENUM = {
    LINEAR:{value:0},
    RADIAL:{value:1}
}

function drawLine(ctx, x, y){
    ctx.moveTo(0,0);
    ctx.lineTo(x,y);
    ctx.stroke();    
}

function drawCircle(ctx, x, y, radius, angle_start, angle_stop){
    ctx.beginPath();
    ctx.arc(x,y,radius,angle_start,angle_stop);
    ctx.stroke();    
}

function drawText(ctx, font_name, text, x, y, enum_fill){
    ctx.font = font_name;
    if (enum_fill === FILL_ENUM.FILL){
		ctx.fillText(text,x,y);
    }
    else if(enum_fill === FILL_ENUM.NO_FILL){
        ctx.strokeText(text,x,y);
    }
	else throw new Error("Unknown fill enum");
}

function drawGradient(ctx, x0, y0, x1, y1, color0, color1, enum_grad, radius0, radius1){
    if(enum_grad === GRAD_ENUM.LINEAR){
        var grd = ctx.createLinearGradient(x0,y0,x1,y1);
    }
    else if(enum_grad === GRAD_ENUM.RADIAL){
        var grd = ctx.createRadialGradient(x0,y0,radius0,x1,y1,radius1);    
    }
    else throw new Error("Undefined grad enum");
    
    grd.addColorStop(0,color0);
    grd.addColorStop(1,color1);
    ctx.fillStyle = grd;
    ctx.fillRect(10,10,200,80);
}


//drawLine(ctx, 100, 100);
//drawCircle(ctx, 100, 100, 50, 0, Math.PI*2);

//drawGradient(ctx,75,50,90,60,"#111","#FFF",GRAD_ENUM.RADIAL,10,150);
//drawGradient(ctx,0,50,190,60,"#111","#FFF",GRAD_ENUM.LINEAR);
drawText(ctx,"30px Arial","Hello, lol",10,30,FILL_ENUM.FILL);