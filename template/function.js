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
		//ctx.arc(75,75,30,0,Math.PI/2, false);  // ����һ����Բ����
		ctx.closePath();    // �Զ�����һ��ֱ�����رջ��ߡ��������ô˷�������������ʾһ����Բ��
		ctx.fill();      // ���Գ���ע�͵� fill ���� stroke �������۲�ͼ�εı仯
		ctx.stroke();  
}