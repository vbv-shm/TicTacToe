var xORo="X";
globalWinningID=[]
function convert(){
    if (xORo=="X"){
        xORo="O";
    }
    else{
        xORo="X";
    }
}

function addSymbol(){
    if (this.innerText===""){this.innerText=xORo;convert();
    
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
}

function checkScore(){
    let x=false;
    if(score[0]+score[1]+score[2]==9||score[3]+score[4]+score[5]==9||score[6]+score[7]+score[8]==9||score[0]+score[3]+score[6]==9||score[1]+score[4]+score[7]==9||score[2]+score[5]+score[8]==9||score[0]+score[4]+score[8]==9||score[2]+score[4]+score[6]==9){ document.getElementsByTagName('resultdata')[0].innerText="Player 2 won! Press Restart for another game";removeEventListeners();colorWinningTiles()}
    else if(score[0]+score[1]+score[2]==15||score[3]+score[4]+score[5]==15||score[6]+score[7]+score[8]==15||score[0]+score[3]+score[6]==15||score[1]+score[4]+score[7]==15||score[2]+score[5]+score[8]==15||score[0]+score[4]+score[8]==15||score[2]+score[4]+score[6]==15){document.getElementsByTagName('resultdata')[0].innerText="Player 1 won! Press Restart for another game";removeEventListeners();colorWinningTiles()}
    else if(score[0]+score[1]+score[2]+score[3]+score[4]+score[5]+score[6]+score[7]+score[8]>34){document.getElementsByTagName('resultdata')[0].innerText="Match is draw! Press Restart for another game";removeEventListeners();colorWinningTiles()}
    
}

function addEventListeners(){
    document.getElementsByTagName('ca')[0].addEventListener('click', addSymbol);
    document.getElementsByTagName('cb')[0].addEventListener('click', addSymbol);
    document.getElementsByTagName('cc')[0].addEventListener('click', addSymbol);
    document.getElementsByTagName('cd')[0].addEventListener('click', addSymbol);
    document.getElementsByTagName('ce')[0].addEventListener('click', addSymbol);
    document.getElementsByTagName('cf')[0].addEventListener('click', addSymbol);
    document.getElementsByTagName('cg')[0].addEventListener('click', addSymbol);
    document.getElementsByTagName('ch')[0].addEventListener('click', addSymbol);
    document.getElementsByTagName('ci')[0].addEventListener('click', addSymbol);
}

function removeEventListeners(){
    document.getElementsByTagName('ca')[0].removeEventListener('click', addSymbol);
    document.getElementsByTagName('cb')[0].removeEventListener('click', addSymbol);
    document.getElementsByTagName('cc')[0].removeEventListener('click', addSymbol);
    document.getElementsByTagName('cd')[0].removeEventListener('click', addSymbol);
    document.getElementsByTagName('ce')[0].removeEventListener('click', addSymbol);
    document.getElementsByTagName('cf')[0].removeEventListener('click', addSymbol);
    document.getElementsByTagName('cg')[0].removeEventListener('click', addSymbol);
    document.getElementsByTagName('ch')[0].removeEventListener('click', addSymbol);
    document.getElementsByTagName('ci')[0].removeEventListener('click', addSymbol);
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

    globalWinningID.forEach((winningId)=>{
        document.getElementById("block"+winningId).classList.remove("winningClass")
    })
    globalWinningID=[]
    addEventListeners()
    for(var i=0;i<9;i++){score[i]=0};
    document.getElementsByTagName('resultdata')[0].innerText="Game is on!";
    xORo="X";
}

function colorWinningTiles(){
    const winningTilesCombination=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    winningTilesCombination.forEach((winningArray)=>{
        
        if(score[winningArray[0]]+score[winningArray[1]]+score[winningArray[2]]==9||score[winningArray[0]]+score[winningArray[1]]+score[winningArray[2]]==15){
            console.log("here")
            winningArray.forEach((winningId)=>{
                
                // document.getElementById("block"+winningId).style.color="black"
                // document.getElementById("block"+winningId).style.backgroundColor="pink"
                console.log("here");
                document.getElementById("block"+winningId).classList.add("winningClass")
                globalWinningID.push(winningId)
            })
        }}

    )
}
document.getElementsByTagName('button')[0].addEventListener('click', restart);
var score=[0,0,0,0,0,0,0,0,0];
addEventListeners();
