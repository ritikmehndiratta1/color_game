var colors=generateRandomColors(6);
var h1=document.querySelector("h1");
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var message= document.querySelector("#message");
var resetBtn=document.querySelector("#reset");
var modeBtn=document.querySelectorAll(".mode");
colorDisplay.textContent= pickedColor;

var numSquares=6

init();

function init(){

}

for(var i=0;i<modeBtn.length;i++)
{
	modeBtn[i].addEventListener("click",function(){
		modeBtn[0].classList.remove("selected");
		modeBtn[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent==="Easy"){
			numSquares=3;
		}else{
			numSquares=6;
		}
		reset();
	});
}

function reset(){
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	resetBtn.textContent="New Colors";
	message.textContent="";
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.background=colors[i];
		}else{
			squares[i].style.display="none";
		}
	}
	h1.style.background="steelblue";
}

resetBtn.addEventListener("click",function(){
	reset();	
});


for(var i=0;i<squares.length;i++)
{
	var flag=0;
	squares[i].style.background=colors[i];
	squares[i].addEventListener("click",function(){
		var clickedColor= this.style.background;
		if(clickedColor ===pickedColor){
			//ctr=true;
			flag=1;
			colorChange();
			message.textContent="Correct!!";
			h1.style.background=pickedColor;
			resetBtn.textContent="Play Again";
		}
		else if(clickedColor!=pickedColor &  flag==0){
			
			this.style.background= "#232323";
			message.textContent="Try Again!";
		} 
	flag=0;
});
	
}
function colorChange(){
		for(var i=0;i<colors.length;i++)
		{
			squares[i].style.background=pickedColor;
		}
	}

function pickColor(){
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr=[];
	for(var i=0;i<num;i++)
	{
		arr[i]=randomColor();
	}	
	return arr;
}

function randomColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+ g+", "+ b+")";
}

