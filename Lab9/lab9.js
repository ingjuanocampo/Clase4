

function operations(operation){
	operation(3,4,"+"); 
	operation(3,4,"-"); 
	operation(3,4,"x"); 
	operation(3,4,"/"); 

}

operations(function(a,b,op){
	if(op=="+"){
		var result=a+b; 
		alert("Resultado suma="+result); 
	}
	else if(op=="-") {
		var result=a-b; 
		alert("Resultado resta="+result); 
	}else if(op=="x"){
				var result=a*b; 
		alert("Resultado Multp="+result); 
	}else {
						var result=a/b; 
		alert("Resultado div="+result); 
	}
}); 

