function draw_slot(ctx)
{
	 ctx.lineTo(0,0);
	 ctx.lineTo(5,5);
	 ctx.lineTo(10,0);
}

function draw_function(ctx, json)
{

		ctx.save();  
		 ctx.fillStyle = json.function.color; 
		 ctx.strokeStyle = '#000'; 
		 ctx.beginPath(); 
		 ctx.moveTo(10,0);
		 ctx.translate(20,0);
		 
		 draw_slot(ctx);
		
		  
		 ctx.translate(100,0);
		  
		 ctx.lineTo(0,0);
		 
		 ctx.translate(0,10);
		  
		  ctx.lineTo(0,0);
		  ctx.lineTo(-5,5);
		  ctx.lineTo(0,10);
		  
		  ctx.translate(0,20);
		  
		  ctx.arc(0,5,5,Math.PI*3/2 ,Math.PI/2, true);
		  
		  
		  ctx.translate(0,20);
		  
		  ctx.lineTo(0,0);
		  ctx.lineTo(-5,2);
		  ctx.lineTo(-5,8);
		  ctx.lineTo(0,10);
		  
		  ctx.translate(0,20);
		  
		  ctx.lineTo(0,0);
		  
		  ctx.translate(-60,0);
		  
		  
		  ctx.lineTo(10,0);
		  ctx.lineTo(5,5);
		  ctx.lineTo(0,0);
		  
		  ctx.translate(-20,0);
		  ctx.lineTo(0,0);
		  
		  ctx.translate(0,110);
		  ctx.lineTo(0,0);
		  
		  ctx.translate(80,00);
		  ctx.lineTo(0,0);
		  
		  ctx.translate(0,10);
		  ctx.arc(0,0,5,Math.PI*3/2 ,Math.PI/2, false);
		  
		  ctx.translate(0,10);
		  ctx.lineTo(0,0);
		  
		  
		  ctx.translate(-100,0);
		  
		  ctx.lineTo(10,0);
		  ctx.lineTo(5,5);
		  ctx.lineTo(0,0);
		  
		  ctx.translate(-10,0);
		  ctx.lineTo(0,0);
		  
		  ctx.translate(0,-200);
		  ctx.lineTo(0,0);
		ctx.fill();      // 可以尝试注释掉 fill 或者 stroke 函数，观察图形的变化
		ctx.stroke();  
}