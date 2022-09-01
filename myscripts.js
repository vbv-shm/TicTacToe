var xORo="X";
function convert(){
    if (xORo=="X"){
        xORo="O";
    }
    else{
        xORo="X";
    }
}
document.getElementsByTagName('ca')[0].addEventListener('click', addSymbol);
document.getElementsByTagName('cb')[0].addEventListener('click', addSymbol);
document.getElementsByTagName('cc')[0].addEventListener('click', addSymbol);
document.getElementsByTagName('cd')[0].addEventListener('click', addSymbol);
document.getElementsByTagName('ce')[0].addEventListener('click', addSymbol);
document.getElementsByTagName('cf')[0].addEventListener('click', addSymbol);
document.getElementsByTagName('cg')[0].addEventListener('click', addSymbol);
document.getElementsByTagName('ch')[0].addEventListener('click', addSymbol);
document.getElementsByTagName('ci')[0].addEventListener('click', addSymbol);

function addSymbol(){
    if (this.innerText===""){this.innerText=xORo;convert();
    console.log(this.tagName);
    if(xORo=="X"){var s=3;}else {s=5};
    if(this.tagName=='CA' ){score[0]=s;}
    else if(this.tagName=='CB' ){score[1]=s;}
    else if(this.tagName=='CC' ){score[2]=s;}
    else if(this.tagName=='CD' ){score[3]=s;}
    else if(this.tagName=='CE' ){score[4]=s;}
    else if(this.tagName=='CF' ){score[5]=s;}
    else if(this.tagName=='CG' ){score[6]=s;}
    else if(this.tagName=='CH' ){score[7]=s;}
    else if(this.tagName=='CI' ){score[8]=s;};
    checkScore();
}
    
function checkScore(){
    if(score[0]+score[1]+score[2]==9||score[3]+score[4]+score[5]==9||score[6]+score[7]+score[8]==9||score[0]+score[3]+score[6]==9||score[1]+score[4]+score[7]==9||score[2]+score[5]+score[8]==9||score[0]+score[4]+score[8]==9||score[2]+score[4]+score[6]==9){ document.getElementsByTagName('resultdata')[0].innerText="Player 2 won! Press Restart for another game"}
    else if(score[0]+score[1]+score[2]==15||score[3]+score[4]+score[5]==15||score[6]+score[7]+score[8]==15||score[0]+score[3]+score[6]==15||score[1]+score[4]+score[7]==15||score[2]+score[5]+score[8]==15||score[0]+score[4]+score[8]==15||score[2]+score[4]+score[6]==15){document.getElementsByTagName('resultdata')[0].innerText="Player 1 won! Press Restart for another game"}
    else if(score[0]+score[1]+score[2]+score[3]+score[4]+score[5]+score[6]+score[7]+score[8]>34){document.getElementsByTagName('resultdata')[0].innerText="Match is draw! Press Restart for another game"}
    
}
}
const player = (name) => {
    const sayHello = () => console.log('hello!');
    return { name, age, sayHello };
  };
function restart(){
    document.getElementsByTagName('ca')[0].innerText="";
    document.getElementsByTagName('cb')[0].innerText="";
    document.getElementsByTagName('cc')[0].innerText="";
    document.getElementsByTagName('cd')[0].innerText="";
    document.getElementsByTagName('ce')[0].innerText="";
    document.getElementsByTagName('cf')[0].innerText="";
    document.getElementsByTagName('cg')[0].innerText="";
    document.getElementsByTagName('ch')[0].innerText="";
    document.getElementsByTagName('ci')[0].innerText="";
    for(var i=0;i<9;i++){score[i]=0};
    document.getElementsByTagName('resultdata')[0].innerText="Game is on!";
    xORo="X";
}
document.getElementsByTagName('button')[0].addEventListener('click', restart);
var score=[0,0,0,0,0,0,0,0,0];
