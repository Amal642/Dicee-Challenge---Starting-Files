var rn1,rn2;
rn1=Math.floor(Math.random()*6)+1;
rn2=Math.floor(Math.random()*6)+1;

var diceimage1=document.querySelector('.container .dice .img1');
var diceimage2=document.querySelector('.container .dice .img2');

diceimage1.setAttribute('src','images/dice'+rn1+'.png');
diceimage2.setAttribute('src','images/dice'+rn2+'.png');

var title=document.querySelector('h1');
if(rn1>rn2){
    title.innerHTML='Player 1 Wins';
}
else if (rn2>rn1)
    title.innerHTML='Player 2 Wins';
else    
    title.innerHTML='Draw';