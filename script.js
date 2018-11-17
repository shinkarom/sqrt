function bodyLoad(){
	document.querySelector("#calculate").addEventListener("click",calculateSqrt);
}

function calculateSqrt(){
	var n = parseInt(document.querySelector("#number").value);
	var g = parseInt(document.querySelector("#firstguess").value);
	var table = document.querySelector("#table");
	table.innerHTML = "";
	var p = 0,ng = 0,av = 0,st = 0;
	while(Math.abs(p-g)>Number.EPSILON){
	st++;
	ng = n / g;
	av = (ng + g) / 2;
	var row=table.insertRow(-1);
	row.insertCell(-1).innerText = st;
	row.insertCell(-1).innerText = g.toFixed(4);
	row.insertCell(-1).innerText = ng.toFixed(4);
	row.insertCell(-1).innerText = av.toFixed(4);
	p = g;
	g = av;		
	}
	document.querySelector("#result").innerText = `The square root is ${av.toFixed(4)}`;
}