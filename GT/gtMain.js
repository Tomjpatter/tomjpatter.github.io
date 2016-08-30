/*
	Author: 	Tom Patterson
	Created: 	8/24/16
	Revised: 	N/A
	Title: 		Movie player
	Purpose: 	Play Youtube videos
	Notes:
*/

var baseAddress ="https://www.youtube.com/embed/";
var movie = document.getElementById("movie");
var player = document.getElementById("player");
var titles = document.getElementById("titles");

var titlesArray = ["p5ysrH-L6t8","lBLG_O5zm9Y","oilJoJ48Vns","NuQRdyVWdDw","csU50fjGPHw","PKR8rKzeOPA","pw9CmVEueD0","9eUqXYfJ_4g"];
titles.onchange = playNewMovie
 
 function playNewMovie() {
	var i = titles.selectedIndex ; // the index of current selection;
	movie.src = baseAddress + titlesArray[i];
//	player.innerHTML = movie.src ;
	movie.play();
 }
 
 //titles.onchange = playNewMovie();