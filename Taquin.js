window.onload = function () {

var button = document.querySelectorAll("button");


function affichebutton(){
	button[0].style.visibility = "hidden";
	for (var i = 1; i < button.length-1; i++) {
		button[i].style.visibility = "visible";
	}
	
}

function reStart(){
	for (var i = 1; i < button.length; i++) {
		button[i].style.visibility = "hidden";
	}
		button[5].style.visibility = "visible";	
}

function hidebutton(){
	button[0].style.visibility = "hidden";
	for (var i = 1; i < button.length; i++) {
		button[i].style.visibility = "hidden";
	}
	
}

var srclist = new Array("0.png","1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","0.png");

function getMess(array){
	console.log("getMess");
	var n =array.length;
	var newarray = [];
	while(n){
		var i =Math.floor(Math.random()*n--);
		newarray.push(array.splice(i,1)[0]);
	}
	return newarray;
}


function getlist(a,b){
	console.log("getlist")
	var list = new Array();
	for (var i = 0; i <a*b; i++) {
		list[i]=srclist[i];
	}
	return list;
}

function getname(n){
	console.log("getname")
	n = n.substring(0,1);
	return n;
}

var taquin = document.getElementById("taquin");

var div1 = document.createElement("div");
var div2 = document.createElement("div");
var div3 = document.createElement("div");




function affiche(a,b){
	var h2 = document.querySelector("h2");
	h2.style.visibility = "hidden";
	srclist = getMess(getlist(a,b));
	console.log("affiche");
	taquin.appendChild(div1);
	taquin.appendChild(div2);
	taquin.appendChild(div3);
	if (a<=2) {
		for(let i=0;i<b;i++){
			var img = document.createElement("img");
			img.src=srclist[i];
			img.name=getname(srclist[i]);
			img.onclick=click_on;
			div1.appendChild(img);
		}
		for(let i=b;i<2*b;i++){
			var img = document.createElement("img");
			img.src=srclist[i];
			img.name=getname(srclist[i]);
			img.onclick=click_on;
			div2.appendChild(img);
		}
	}

	else{
		for(let i=0;i<b;i++){
			var img = document.createElement("img");
			img.src=srclist[i];
			img.name=getname(srclist[i]);
			img.onclick=click_on;
			div1.appendChild(img);
		}
		for(let i=b;i<2*b;i++){
			var img = document.createElement("img");
			img.src=srclist[i];
			img.name=getname(srclist[i]);
			img.onclick=click_on;
			div2.appendChild(img);
		}
		for(let i=2*b;i<a*b;i++){
			var img = document.createElement("img");
			img.src=srclist[i];
			img.name=getname(srclist[i]);
			img.onclick=click_on;
			div3.appendChild(img);
		}
	}
}

function taille2X2(){
	console.log("taille2X2");
	hidebutton();
	affiche(2,2);
}


function taille2X3(){
	console.log("taille2X3");
	hidebutton();
	affiche(2,3);
}

function taille3X2(){
	console.log("taille3X2");
	hidebutton();
	affiche(3,2);
}

function taille3X3(){
	console.log("taille3X3");
	hidebutton();
	affiche(3,3);
}


function again(){
	location.reload();
}


button[0].onclick=affichebutton;
button[1].onclick=taille2X2;
button[2].onclick=taille2X3;
button[3].onclick=taille3X2;
button[4].onclick=taille3X3;
button[5].onclick=again;

let first_click = true;

	let first_image;

	let not_finished = true;
	var fois = 0;

	function click_on() {
		console.log("click_on");
		if (not_finished) {
			if (first_click) {
				first_image = this;
				first_click = false;

			} 
			else {
				first_click = true;
				let src = first_image.src;
				first_image.src = this.src;
				this.src = src;
				let name = first_image.name;
				first_image.name = this.name;
				this.name = name;
				fois++;
			}
			if (is_finished()) {
				let result = document.getElementById("result");
				let nbfois = document.getElementById("fois");
				nbfois.innerHTML="Vous avez fait: "+fois+" mouvements!";
				reStart();
				result.style.visibility = "visible";
				nbfois.style.visibility = "visible";
				not_finished = false;
			}
		}
	}

	function is_finished() {
		let s = "";
		let images = document.querySelectorAll("img");
		for (let i = 0; i < images.length; i++)
			s += images[i].name;
		if (s.length==4) return s == "0123";
		if (s.length==6) return s == "012345";
		if (s.length==6) return s == "012345";
		if (s.length==9) return s == "012345678";
	}

let imgs = document.querySelectorAll("img");
	for ( let i = 0; i < imgs.length; i++ )
		imgs[i].onclick = click_on;

};




