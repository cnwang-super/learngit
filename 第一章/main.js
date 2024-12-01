
$(document).ready(function(){
		'use strict';		
		paper.install(window);
		paper.setup(document.getElementById('mainCanvas'));
		//var c = Shape.Circle(200,200,50); // 三个参数, 横竖坐标和半径
		/*
		var c;
		for (let x=25; x<400; x+=50){
			for (let y=25; y<400; y+=50){
				c = Shape.Circle(x, y, 20);
				c.fillColor = "green";
			}
		}
		//c.fillColor = "green";
		*/

		var c = Shape.Circle(200, 200, 80);
		c.fillColor = 'black';
		var text = new PointText(200, 200);
		text.justification = 'center';
		text.fillColor = 'white';
		text.fontSize = 20;
		text.content = 'Hello World';
		/*
		var tool = new Tool();
		tool.onMouseDown = function(event){
			let c = Shape.Circle(event.point, 10);
			c.fillColor = 'green';
		}*/
		paper.view.draw();
});
