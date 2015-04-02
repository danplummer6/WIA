/*
     Name: Daniel Plummer
     Date: 4/2/15
     Class & Section:  April 2015, Section 1
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here

window.onload = function(){
	if(Modernizr.canvas){
		var theCanvas1 = document.getElementById("canvas1");
		var ctx = theCanvas1.getContext("2d");

		ctx.strokeStyle = "black";
			ctx.fillStyle = "#00B8FF";
			ctx.lineWidth = 5;

			//x,y,width,height
			ctx.strokeRect(0,0,50,100);
			ctx.fillRect(0,0,50,100);
	}else{
		//canvas is not supported
	}



/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here 

	if(Modernizr.canvas){
		var circle = document.getElementById("canvas2");
		var ctx = circle.getContext("2d");

		ctx.strokeStyle = "black";
		ctx.fillStyle = "rgba(255,0,0,.5)";
		ctx.lineWidth = 5;
		ctx.beginPath();
		ctx.arc(50,50,20,0,2*Math.PI);
		ctx.stroke();
		ctx.fill();
	}else{
		//canvas is not supported
	}



/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here

	if(Modernizr.canvas){
		var star = document.getElementById("canvas3");
		var ctx = star.getContext("2d");

		ctx.fillStyle = "yellow";
		ctx.strokeStyle = "black"
		ctx.beginPath();
		ctx.moveTo(107,0);
		ctx.lineTo(141,67);
		ctx.lineTo(215,78);
		ctx.lineTo(161,130);
		ctx.lineTo(174,205);
		ctx.lineTo(107,170);
		ctx.lineTo(41,205);
		ctx.lineTo(53,130);
		ctx.lineTo(0,78);
		ctx.lineTo(74,67);
		ctx.lineTo(107,0);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
	}else{
		//canvas is not supported
	}



/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here




/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here

	if(Modernizr.canvas){
		var text = document.getElementById("canvas5");
		var ctx = text.getContext("2d");
		var textString = "Web Design";

		ctx.font = "38pt Georgia";
		ctx.fillStyle = "green";
		ctx.strokeStyle = "black"
		ctx.fillText(textString, 10, 60);
		ctx.strokeText(textString, 10, 60);
	}else{
		//canvas is not supported
	}

/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here

	if(Modernizr.canvas){
		var image = document.getElementById("canvas6");
		var ctx = image.getContext("2d");
		var imageSrc = document.getElementById("logo");

		//Full Image
		ctx.drawImage(imageSrc,0,0);

		//Scaled down half
		ctx.drawImage(imageSrc,0,1000,1650,544);

		//section of image
		//(sx, sy, sw, sh, dx , dy, dw, dh)
		ctx.drawImage(imageSrc,1100,150,2000,310,50,1700,1800,600);
	}else{
		//canvas is not supported
	}



/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here

	if(Modernizr.canvas){
		var circle = document.getElementById("canvas7");
		var ctx = circle.getContext("2d");

		//head
		ctx.strokeStyle = "black";
		ctx.fillStyle = "yellow";
		ctx.lineWidth = 5;
		ctx.beginPath();
		ctx.arc(150,70,50,0,2*Math.PI);
		ctx.stroke();
		ctx.fill();

		//right eye
		ctx.fillStyle = "black";
		ctx.lineWidth = 5;
		ctx.beginPath();
		ctx.arc(130,50,10,0,2*Math.PI);
		ctx.fill();

		//left eye
		ctx.fillStyle = "black";
		ctx.lineWidth = 5;
		ctx.beginPath();
		ctx.arc(170,50,10,0,2*Math.PI);
		ctx.fill();

		//mouth
		ctx.strokeStyle = "black";
		ctx.lineWidth = 5;
		ctx.beginPath();
		ctx.arc(150,75,30,0,1*Math.PI);
		ctx.stroke();
	}else{
	//canvas is not supported
	}
} //ends onLoad function