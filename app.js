let gameSeq=[];
let userSeq=[];

let colors=["pink" ,"blue","orange","purple"];
let started=false;
let level=0;
let h3=document.querySelector("h3");
document.addEventListener("keypress" ,function(){
    if(started==false){
        
        started=true;
        levelUp();
    }
  });
  function btnFlash(btn){
     btn.classList.add("flash");
     setTimeout(function(){
        btn.classList.remove("flash");
     },250);
  }
function levelUp(){
    userSeq=[];
    level++;
    h3.innerText=`Level ${level}`;
    let ranInx=Math.floor(Math.random()*3);
    let ranCol=colors[ranInx];
    let ranBtn=document.querySelector(`.${ranCol}`);
    gameSeq.push(ranCol);
    console.log(gameSeq);
    btnFlash(ranBtn);
}
function checkAns(inx){
   
    if(gameSeq[inx]===userSeq[inx]){
       if(gameSeq.length==userSeq.length){
        setTimeout( levelUp,1000);
        
       }
    }
    else{
        h3.innerHTML=`Game is Over ! your Score is <b>${level}</b> <br> press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}
function btnPress(){
   let btn=this;
   btnFlash(btn);
   userColor=btn.getAttribute('id');
   userSeq.push(userColor);
   checkAns(userSeq.length-1);
}
let btns=document.querySelectorAll(".btn");
for(let btn of btns){
     btn.addEventListener("click", btnPress);
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
