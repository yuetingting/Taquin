window.onload = function () {


var h2 = document.querySelector("h2");
var button = document.querySelectorAll("button");
var regle = document.querySelectorAll("p");
var h4 = document.querySelector("h4");

function affichebutton(){
	button[0].style.visibility = "hidden";
	for (var i = 1; i < button.length-1; i++) {
		button[i].style.visibility = "visible";
	}
	for (var i = 0; i < regle.length; i++) {
		regle[i].style.visibility = "hidden";
	}
	h4.style.visibility = "hidden";
	h2.style.visibility = "visible";
		button[6].style.visibility= "hidden";
	
}

function reStart(){
	for (var i = 1; i < button.length; i++) {
		button[i].style.visibility = "hidden";
	}
		button[5].style.visibility = "visible";
			button[6].style.visibility= "hidden";
}

function hidebutton(){
	button[0].style.visibility = "hidden";
	for (var i = 1; i < button.length; i++) {
		button[i].style.visibility = "hidden";
	}
	for (var i = 0; i < regle.length; i++) {
		regle[i].style.visibility = "hidden";
	}
	h4.style.visibility = "hidden";
	h2.style.visibility = "hidden";
		button[6].style.visibility= "visible";
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



let code;
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
			img.id=i;
			div1.appendChild(img);
		}
		for(let i=b;i<2*b;i++){
			var img = document.createElement("img");
			img.src=srclist[i];
			img.name=getname(srclist[i]);
			img.onclick=click_on;
			img.id=i;
			div2.appendChild(img);
		}
	}

	else{
		for(let i=0;i<b;i++){
			var img = document.createElement("img");
			img.src=srclist[i];
			img.name=getname(srclist[i]);
			img.onclick=click_on;
			img.id=i;
			div1.appendChild(img);
		}
		for(let i=b;i<2*b;i++){
			var img = document.createElement("img");
			img.src=srclist[i];
			img.name=getname(srclist[i]);
			img.onclick=click_on;
			img.id=i;
			div2.appendChild(img);
		}
		for(let i=2*b;i<a*b;i++){
			var img = document.createElement("img");
			img.src=srclist[i];
			img.name=getname(srclist[i]);
			img.onclick=click_on;
			img.id=i;
			div3.appendChild(img);
		}
	}
}

function taille2X2(){
	console.log("taille2X2");
	hidebutton();
	affiche(2,2);
	code=22;
}


function taille2X3(){
	console.log("taille2X3");
	hidebutton();
	affiche(2,3);
	code=23;
}

function taille3X2(){
	console.log("taille3X2");
	hidebutton();
	affiche(3,2);
	code=32;
}

function taille3X3(){
	console.log("taille3X3");
	hidebutton();
	affiche(3,3);
	code=33;
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
button[6].onclick=again;

let not_finished = true;
var fois = 0;
var vide;
var change;

let first_click = true;

	let first_image;

	function click_on() {
		console.log("click_on");
		let vide;
		let position = document.querySelectorAll("img");
		for(let i = 0; i < position.length; i++){
			if(position[i].name=="0"){
				vide=position[i];
			}
		}
		if(canbeclick(code,this.id)==true){
			fois++;
			if (not_finished) {
			if (first_click) {
				first_image = this;
				first_click = false;

			} 
			else {
				
				first_click = true;
				let src = first_image.src;
				first_image.src = vide.src;
				vide.src = src;
				let name = first_image.name;
				first_image.name = vide.name;
				vide.name = name;
				
			}
		}
			if (is_finished()) {
				let result = document.getElementById("result");
				let r = document.createElement("div");
				let nbfois = document.createElement("div");
				fois=Math.round((fois/2));
				nbfois.innerHTML="Vous avez fait: "+fois+" mouvements!";
				nbfois.style.color=color(fois);
				r.innerHTML="Bravo vous avez terminé le taquin !!"
				r.style.color="#19aac3";
				reStart();
				result.appendChild(r);
				result.appendChild(nbfois);
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


function canbeclick(code,now){
	let can = false;
	if(code==23) a=2;
	else a=3;
	let vide;
	let position = document.querySelectorAll("img");
	for(let i = 0; i < position.length; i++){
		if(position[i].name=="0"){
			vide=position[i].id;
		}
	if(position.length==4){

		if(vide=="0"){if(now=="1"||now=="2") {can=true;}
		}
		if(vide=="1"){if(now=="0"||now=="3") {can=true;}
		}
		if(vide=="2"){if(now=="0"||now=="3") {can=true;}
		}
		if(vide=="3"){if(now=="1"||now=="2") {can=true;}
		}
	}
	if(position.length==6 && a==2){
		if(vide==0){if(now==1||now==3) can=true;}
		if(vide==1){if(now==0||now==2||now==4) can=true;}
		if(vide==2){if(now==1||now==5) can=true;}
		if(vide==3){if(now==0||now==4) can=true;}
		if(vide==4){if(now==1||now==3||now==5) can=true;}
		if(vide==5){if(now==2||now==4) can=true;}
	}
	if(position.length==6 && a==3){
		if(vide==0){if(now==1||now==2) can=true;}
		if(vide==1){if(now==0||now==3) can=true;}
		if(vide==2){if(now==0||now==3||now==4) can=true;}
		if(vide==3){if(now==1||now==2||now==5) can=true;}
		if(vide==4){if(now==2||now==5) can=true;}
		if(vide==5){if(now==3||now==4) can=true;}
	}

	if(position.length==9){
		if(vide==0){if(now==1||now==3) can=true;}
		if(vide==1){if(now==0||now==2||now==4) can=true;}
		if(vide==2){if(now==1||now==5) can=true;}
		if(vide==3){if(now==0||now==4||now==6) can=true;}
		if(vide==4){if(now==1||now==3||now==5||now==7) can=true;}
		if(vide==5){if(now==2||now==4||now==8) can=true;}
		if(vide==6){if(now==3||now==7) return true;}
		if(vide==7){if(now==4||now==6||now==8) can=true;}
		if(vide==8){if(now==5||now==7) can=true;}
}
}
return can;
}

function color(fois){
	if (fois<=5) return "#64dc96";
	if (fois>5 && fois<=20) return "#fac832";
	if (fois>20) return "#e74c3c";
}




let imgs = document.querySelectorAll("img");
	for ( let i = 0; i < imgs.length; i++ )
		imgs[i].onclick = click_on;
};
