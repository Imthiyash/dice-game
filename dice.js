var d1 = 1+Math.floor(Math.random()*6);
var d2 = 1+Math.floor(Math.random()*6);
console.log(d1,d2);
if(d2===1){
    document.querySelector(".dice-2 .c1").classList.add("invisible");
    document.querySelector(".dice-2 .c2").classList.add("invisible");
    document.querySelector(".dice-2 .c3").classList.add("invisible");
    document.querySelector(".dice-2 .c5").classList.add("invisible");
    document.querySelector(".dice-2 .c6").classList.add("invisible");
    document.querySelector(".dice-2 .c7").classList.add("invisible");
}
if(d2==2){
    document.querySelector(".dice-2 .c4").classList.add("invisible");
    document.querySelector(".dice-2 .c2").classList.add("invisible");
    document.querySelector(".dice-2 .c3").classList.add("invisible");
    document.querySelector(".dice-2 .c5").classList.add("invisible");
    document.querySelector(".dice-2 .c6").classList.add("invisible");
}
if(d2==3){
    document.querySelector(".dice-2 .c2").classList.add("invisible");
    document.querySelector(".dice-2 .c3").classList.add("invisible");
    document.querySelector(".dice-2 .c5").classList.add("invisible");
    document.querySelector(".dice-2 .c6").classList.add("invisible");
}
if(d2==4){
    document.querySelector(".dice-2 .c4").classList.add("invisible");
    document.querySelector(".dice-2 .c3").classList.add("invisible");
    document.querySelector(".dice-2 .c5").classList.add("invisible");
}
if(d2==5){
    document.querySelector(".dice-2 .c3").classList.add("invisible");
    document.querySelector(".dice-2 .c5").classList.add("invisible");
}
if(d2==6){
    document.querySelector(".dice-2 .c4").classList.add("invisible");
}

if(d1===1){
    document.querySelector(".dice-1 .c1").classList.add("invisible");
    document.querySelector(".dice-1 .c2").classList.add("invisible");
    document.querySelector(".dice-1 .c3").classList.add("invisible");
    document.querySelector(".dice-1 .c5").classList.add("invisible");
    document.querySelector(".dice-1 .c6").classList.add("invisible");
    document.querySelector(".dice-1 .c7").classList.add("invisible");
}
if(d1==2){
    document.querySelector(".dice-1 .c4").classList.add("invisible");
    document.querySelector(".dice-1 .c2").classList.add("invisible");
    document.querySelector(".dice-1 .c3").classList.add("invisible");
    document.querySelector(".dice-1 .c5").classList.add("invisible");
    document.querySelector(".dice-1 .c6").classList.add("invisible");
}
if(d1==3){
    document.querySelector(".dice-1 .c2").classList.add("invisible");
    document.querySelector(".dice-1 .c3").classList.add("invisible");
    document.querySelector(".dice-1 .c5").classList.add("invisible");
    document.querySelector(".dice-1 .c6").classList.add("invisible");
}
if(d1==4){
    document.querySelector(".dice-1 .c4").classList.add("invisible");
    document.querySelector(".dice-1 .c3").classList.add("invisible");
    document.querySelector(".dice-1 .c5").classList.add("invisible");
}
if(d1==5){
    document.querySelector(".dice-1 .c3").classList.add("invisible");
    document.querySelector(".dice-1 .c5").classList.add("invisible");
}
if(d1==6){
    document.querySelector(".dice-1 .c4").classList.add("invisible");
}

if(d1>d2){
    document.querySelector("h1").textContent = "Player-1 wins";
}
else if(d1===d2){
    document.querySelector("h1").textContent = "Reload again";
}
else{
    document.querySelector("h1").textContent = "Player-2 wins";
}