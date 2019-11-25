var loopSize = document.querySelectorAll(".drum").length;
for (var i=0; i<loopSize; i++)
{

document.querySelectorAll(".drum")[i].addEventListener("click",itsClicked);
}

function itsClicked(){
  makeSound(this.innerHTML);

  animation(this.innerHTML);
}

document.addEventListener ("keydown",keyDown);

function keyDown(event){

makeSound(event.key);

animation(event.key);
}

function animation(currentKey){
var activeButton = document.querySelector("." + currentKey);
activeButton.classList.add("pressed");

setTimeout(function(){document.querySelector("." + currentKey);
activeButton.classList.remove("pressed");}, 50);

}

function makeSound(value){

switch(value) {
  case "w":
    // code block
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
    break;
  case "a":
    // code block
    var kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
    break;
  case "s":
    // code block
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
    break;
  case "d":
      // code block
    var t1 = new Audio("sounds/tom-1.mp3");
    t1.play();
    break;
  case "j":
    // code block
    var t2 = new Audio("sounds/tom-2.mp3");
    t2.play();
    break;
  case "k":
    // code block
    var t3 = new Audio("sounds/tom-3.mp3");
    t3.play();
    break;
  case "l":
    // code block
    var t4 = new Audio("sounds/tom-4.mp3");
    t4.play();
    break;
  default:
    // code block
  }
}
