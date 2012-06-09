
function draw_slot_down(ctx)
{
	 ctx.lineTo(0,0);
	 ctx.lineTo(5,5);
	 ctx.lineTo(10,0);
	 
	ctx.translate(10,0);
	ctx.lineTo(0,0);  
	return 10;
}

function draw_slot_up(ctx)
{
	ctx.lineTo(0,0);
	ctx.lineTo(-5,5);
	ctx.lineTo(-10,0);
	ctx.translate(-10,0);
	ctx.lineTo(0,0);  
	return 10;
	 
}

function draw_slot_left(ctx)
{
	ctx.lineTo(0,0);
	ctx.lineTo(-5,5);
	ctx.lineTo(0,10);
	ctx.translate(0,10);
	ctx.lineTo(0,0); 
	return 10; 
}

function draw_slot_against(ctx)
{
	ctx.lineTo(0,0);
	ctx.lineTo(-5,-5);
	ctx.lineTo(0,-10);
	ctx.translate(0,-10);
	ctx.lineTo(0,0); 
	return -10;
}

function draw_arc_left(ctx)
{
	ctx.arc(0,5,5,Math.PI*3/2 ,Math.PI/2, true);
	ctx.translate(0,10);
	ctx.lineTo(0,0);  
	return 10;
}

function draw_arc_against(ctx)
{
	ctx.arc(0,-5,5,Math.PI/2, Math.PI*3/2 ,false);
	ctx.translate(0,-10);
	ctx.lineTo(0,0);
	return -10;
}


function draw_ladder_left(ctx)
{
	ctx.lineTo(0,0);
	ctx.lineTo(-5,2);
	ctx.lineTo(-5,8);
	ctx.lineTo(0,10);
	ctx.translate(0,10);
	ctx.lineTo(0,0);  
	return 10;
	
}
function draw_ladder_against(ctx)
{
	ctx.lineTo(0,0);
	ctx.lineTo(-5,-2);
	ctx.lineTo(-5,-8);
	ctx.lineTo(0,-10);
	ctx.translate(0,-10);
	ctx.lineTo(0,0);  
	return -10;
	
}
function draw_space(ctx)
{
	ctx.translate(-80,0);
	ctx.lineTo(0,0); 
	draw_slot_up(ctx);
	
	ctx.translate(-10,0);
	ctx.lineTo(0,0); 
	
	ctx.translate(0,20);
	ctx.lineTo(0,0); 
	
	ctx.translate(10,0);
	ctx.lineTo(0,0); 
	
	
	draw_slot_down(ctx); 
	
	
	ctx.translate(80,0);
	ctx.lineTo(0,0); 
	return 20;
}
function draw_if(x, y, ctx)
{
	return draw_one_space(x, y, ctx, "if");
}

function draw_while(x, y, ctx)
{
	return draw_one_space(x, y, ctx, "while");
}

function draw_one_space(x, y, ctx, text)
{
	ctx.save();  
	var size = {"width": 110, "height": 10}
	
	ctx.fillStyle = '#eef'; 
	ctx.strokeStyle = '#000'; 
	ctx.beginPath(); 
	 
	ctx.translate(x,y);
	ctx.moveTo(0,0);
	 
	ctx.translate(10,0);
	draw_slot_down(ctx);
	 
	 
	ctx.translate(90,0);
	ctx.lineTo(0,0);
	
	
	
	ctx.translate(0,10);
	size.height += 10;
	
	draw_slot_left(ctx);
	
	ctx.translate(0,10);
	ctx.lineTo(0,0); 
	
	
	size.height += draw_space(ctx);
	
	
	
	size.height += 20;
	ctx.lineTo(0,0);  
			
			
			
	ctx.translate(0,10);
	ctx.lineTo(0,0);  
	
	
	
	
	  
	
	
	ctx.translate(-90,0);
	ctx.lineTo(0,0);  
	draw_slot_up(ctx);
	ctx.translate(-10,0);
	ctx.lineTo(0,0); 
	  
	ctx.translate(0,-size.height);
	ctx.lineTo(0,0);
	 
	ctx.lineTo(0,0);
	
	ctx.fill();      // 可以尝试注释掉 fill 或者 stroke 函数，观察图形的变化
	ctx.stroke();
	
	
	ctx.font = '10px serif';
	ctx.fillStyle = '#000';
	ctx.fillText(text, 10, 20);


	ctx.restore();		
	return size;
}
function draw_if_else(ctx)
{

}



function do_while(ctx)
{

}
function draw_function(x, y, ctx, json)
{		
	ctx.save();  
	var size = {"width": 120, "height": 10}
	
	ctx.fillStyle = json.color; 
	ctx.strokeStyle = '#000'; 
	ctx.beginPath(); 
	 
	ctx.translate(x,y);
	ctx.moveTo(0,0);
	 
	ctx.translate(10,0);
	draw_slot_down(ctx);
	 
	ctx.translate(90,0);
	ctx.lineTo(0,0);
	
	ctx.translate(0,10);
	ctx.lineTo(0,0);  
	
	if(json.parameters)
	{
		for(var i = 0; i<json.parameters.length; ++i)
		{
			switch(json.parameters[i].type)
			{
			case "bool":
				draw_slot_left(ctx);
				break;
			case "string":
				draw_ladder_left(ctx);
				break;
			case "number":
				draw_arc_left(ctx);  
				break;
			}
			ctx.translate(0,10);
			size.height += 20;
			ctx.lineTo(0,0);  
		}
	}
	else
	{
		size.height += 20;
		ctx.lineTo(0,0);  
	}
	
	ctx.translate(-90,0);
	ctx.lineTo(0,0);  
	draw_slot_up(ctx);
	ctx.translate(-10,0);
	ctx.lineTo(0,0);  
	  
	  
	ctx.translate(0,-size.height+20);
	ctx.lineTo(0,0);
	
	switch(json.ret.type)
	{
	case "bool":
		draw_slot_against(ctx);
		break;
	case "string":
		draw_ladder_against(ctx);
		break;
	case "number":
		draw_arc_against(ctx);
		break;
			
	}
	
	 
	ctx.translate(0,-10);
	ctx.lineTo(0,0);
	
	ctx.fill();      // 可以尝试注释掉 fill 或者 stroke 函数，观察图形的变化
	ctx.stroke();
	
	
	ctx.font = '10px serif';
	ctx.fillStyle = '#000';
	ctx.fillText(json.name, 10, 20);


	ctx.restore();		
	return size;
}