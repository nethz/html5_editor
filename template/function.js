function draw_rect(ctx, json)
{

document.write(json);
			 ctx.stroke();  
		ctx.fillStyle = '#00f'; 
		 ctx.strokeStyle = '#f00'; 
		 ctx.beginPath(); 
		  ctx.moveTo(0,0);
		  
		  ctx.lineTo(10,0);
		  ctx.lineTo(15,5);
		  ctx.lineTo(20,0);
		  ctx.lineTo(100,0);
		  
		  ctx.lineTo(100,10);
		  ctx.lineTo(95,15);
		  ctx.lineTo(100,20);
		  
		  
		  
		  ctx.lineTo(100,25);
		  ctx.arc(100,35,5,Math.PI*3/2 ,Math.PI/2, true);
		  
		  
		  
		  ctx.lineTo(100,50);
		  ctx.lineTo(95,52);
		  ctx.lineTo(95,58);
		  ctx.lineTo(100,60);
		  
		  ctx.lineTo(100,70);
		  ctx.lineTo(20,70);
		  ctx.lineTo(20,180);
		  ctx.lineTo(100,180);
		  
		  
		  ctx.arc(100,190,5,Math.PI*3/2 ,Math.PI/2, false);
		  
		  ctx.lineTo(100,200);
		  
		  
		  ctx.lineTo(20,200);
		  ctx.lineTo(15,205);
		  ctx.lineTo(10,200);
		  
		  ctx.lineTo(0,200);
		//ctx.arc(75,75,30,0,Math.PI/2, false);  // 绘制一条半圆弧线
		ctx.closePath();    // 自动绘制一条直线来关闭弧线。若不调用此方法，将仅仅显示一条半圆弧
		ctx.fill();      // 可以尝试注释掉 fill 或者 stroke 函数，观察图形的变化
		ctx.stroke();  
}