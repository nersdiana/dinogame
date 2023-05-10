"use strict"

let dyno = document.getElementById("dyno");
let stone = document.getElementById("stone");
let points = document.getElementById("points");

function jump(){
    dyno.classList.add("jump_animation");

     setTimeout(() => {
        dyno.classList.remove("jump_animation");
    }, 500);
}

document.addEventListener("keydown", function(){
    if (!dyno.classList.contains("jump_animation")){  //true or false - contains
        jump();
    }        

})

setInterval(() => {
    let dynotop = parseInt(window.getComputedStyle(dyno).getPropertyValue("top"))//возвращает все стили, которые связаны с dyno
    let stoneleft = parseInt(window.getComputedStyle(stone).getPropertyValue("left"))
    points.innerText++;

    if (stoneleft < 0){
        stone.style.display = "none";
    }
    else{
        stone.style.display = "";
    }
    if (stoneleft<50 && stoneleft>0  && dynotop>150){
        alert("you got a score of "+points.innerText+"\n\n play a game?")
        location.reload()
    }

}, 50);










let canvas = document.getElementsByTagName("canvas")[0];
let context = canvas.getContext("2d");
context.fillStyle= "blue"
context.fillRect(100,50,50,100)//x,y,width,height
let context1 = canvas.getContext("2d");
context1.lineWidth = 10
context1.strokeRect(10,5,20,20);
