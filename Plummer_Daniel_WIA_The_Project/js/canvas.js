window.onload = function(){
	var theCanvas = document.getElementById('canvas1');
	if (theCanvas && theCanvas.getContext){
	var ctx = theCanvas.getContext('2d');
	if (ctx){

		/*-----Logo-----*/

			ctx.fillStyle="rgb(198,210,209)";
			ctx.lineStyle="rgb(0,0,0)";
			ctx.lineWidth=2;
			ctx.beginPath();
			ctx.moveTo(119,170);
			ctx.lineTo(207,17);
			ctx.lineTo(295,170);
			ctx.lineTo(119,170);
			ctx.fill();
			ctx.stroke();

			ctx.fillStyle="rgb(0,0,0)";
			ctx.beginPath();
			ctx.moveTo(195,52);
			ctx.lineTo(195,141);
			ctx.lineTo(189,141);
			ctx.lineTo(189,127);
			ctx.bezierCurveTo(184,136,174,142,163,142);
			ctx.bezierCurveTo(146,142,132,130,132,109);
			ctx.bezierCurveTo(132,89,146,77,163,77);
			ctx.bezierCurveTo(174,77,184,82,189,92);
			ctx.lineTo(189,52);
			ctx.lineTo(195,52);
			ctx.fill();

			ctx.fillStyle="rgb(255,255,255)";
			ctx.beginPath();
			ctx.moveTo(138,109);
			ctx.bezierCurveTo(138,127,150,135,164,135);
			ctx.bezierCurveTo(178,135,189,125,189,109);
			ctx.bezierCurveTo(189,94,178,83,164,83);
			ctx.bezierCurveTo(150,83,138,92,138,109);
			ctx.fill();

			ctx.fillStyle="rgb(0,0,0)";
			ctx.beginPath();
			ctx.moveTo(213,167);
			ctx.lineTo(213,78);
			ctx.lineTo(219,78);
			ctx.lineTo(219,93);
			ctx.bezierCurveTo(224,83,234,77,246,77);
			ctx.bezierCurveTo(263,78,277,89,277,109);
			ctx.bezierCurveTo(277,130,263,142,245,142);
			ctx.bezierCurveTo(234,142,224,137,219,126);
			ctx.lineTo(219,167);
			ctx.lineTo(213,167);
			ctx.fill();

			ctx.fillStyle="rgb(255,255,255)";
			ctx.beginPath();
			ctx.moveTo(270,109);
			ctx.bezierCurveTo(270,92,259,83,245,83);
			ctx.bezierCurveTo(230,83,220,94,220,109);
			ctx.bezierCurveTo(220,125,231,136,245,136);
			ctx.bezierCurveTo(259,136,270,127,270,109);
			ctx.fill();
		}	
	}

	var theCanvas = document.getElementById('canvas2');
	if (theCanvas && theCanvas.getContext){
	var ctx = theCanvas.getContext('2d');
	if (ctx){

		/*----- Facebook & Twitter -----*/

			ctx.fillStyle="rgb(0,0,0)";
			ctx.beginPath();
			ctx.moveTo(93,84);
			ctx.lineTo(93,116);
			ctx.bezierCurveTo(93,117,92,118,91,118);
			ctx.lineTo(82,118);
			ctx.lineTo(82,104);
			ctx.lineTo(87,104);
			ctx.lineTo(87,99);
			ctx.lineTo(82,99);
			ctx.lineTo(82,95);
			ctx.bezierCurveTo(82,93,82,92,85,92);
			ctx.lineTo(87,92);
			ctx.lineTo(87,87);
			ctx.bezierCurveTo(87,87,85,87,83,87);
			ctx.bezierCurveTo(79,87,76,90,76,94);
			ctx.lineTo(76,99);
			ctx.lineTo(71,99);
			ctx.lineTo(71,104);
			ctx.lineTo(76,104);
			ctx.lineTo(76,118);
			ctx.lineTo(59,118);
			ctx.bezierCurveTo(57,118,56,117,56,116);
			ctx.lineTo(56,84);
			ctx.bezierCurveTo(56,83,57,82,59,82);
			ctx.lineTo(91,82);
			ctx.bezierCurveTo(92,82,93,83,93,84);
			ctx.fill();

			ctx.fillStyle="rgb(0,0,0)";
			ctx.beginPath();
			ctx.moveTo(140,111);
			ctx.bezierCurveTo(140,115,137,118,134,118);
			ctx.lineTo(111,118);
			ctx.bezierCurveTo(107,118,104,115,104,111);
			ctx.lineTo(104,88);
			ctx.bezierCurveTo(104,85,107,82,111,82);
			ctx.lineTo(134,82);
			ctx.bezierCurveTo(137,82,140,85,140,88);
			ctx.lineTo(140,111);
			ctx.fill();

			ctx.fillStyle="rgb(255,255,255)";
			ctx.beginPath();
			ctx.moveTo(129,109);
			ctx.bezierCurveTo(129,109,128,110,127,110);
			ctx.bezierCurveTo(125,110,124,108,124,107);
			ctx.lineTo(124,97);
			ctx.lineTo(130,97);
			ctx.lineTo(130,92);
			ctx.lineTo(124,92);
			ctx.lineTo(124,85);
			ctx.bezierCurveTo(120,85,120,85,120,85);
			ctx.bezierCurveTo(119,85,119,85,119,85);
			ctx.bezierCurveTo(119,87,118,91,113,93);
			ctx.lineTo(113,97);
			ctx.lineTo(116,97);
			ctx.lineTo(116,107);
			ctx.bezierCurveTo(116,110,119,115,126,115);
			ctx.bezierCurveTo(128,115,130,114,131,113);
			ctx.lineTo(129,109);
			ctx.fill();
		}
	}
}