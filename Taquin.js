window.onload = function () {

var button = document.querySelectorAll("button");


function StartGame(){
	button[0].style.visibility = "hidden";
	for (var i = 1; i < button.length; i++) {
		button[i].style.visibility = "visible";
	}
	
}


var taquin = document.getElementById("taquin");
var div1 = document.createElement("div");
var img1 = document.createElement("img");
var div2 = document.createElement("div");
var img2 = document.createElement("img");
var div3 = document.createElement("div");
var img3 = document.createElement("img");

function taille2X2(){
	taquin.appendChild(div1);
	img1.src="2.jpg";
	div1.appendChild(img1);
	img2.src="1.jpg";
	div1.appendChild(img2);

	taquin.appendChild(div3);
	img3.src="3.jpg";
	div3.appendChild(img3);
}

function taille2X3(){

}

function taille3X2(){

}

function taille3X3(){

}





button[0].onclick=StartGame;
button[1].onclick=taille2X2;


let first_click = true;

	// pour stocker la première image cliquée
	let first_image;

	// si "not_finished" est vrai, alors
	// il reste des images à permuter
	let not_finished = true;

	// traîte le clic sur une image
	function click_on() {
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

				//let name = first_image.name;
				//first_image.name = this.name;
				//this.name = name;
			}
			//if (is_finished()) {
			//	let result = document.querySelector("#result");
			//	result.style.visibility = "visible";
			//	not_finished = false;
		//	}
		}
	}

	// teste si le puzzle est terminé
	/*function is_finished() {
		let s = "";
		let images = document.querySelectorAll("img");
		for (let i = 0; i < images.length; i++)
			s += images[i].name;
		return s == "abcdefghijkl";
	}*/

let imgs = document.querySelectorAll("img");
	for ( let i = 0; i < imgs.length; i++ )
		imgs[i].onclick = click_on;


};




