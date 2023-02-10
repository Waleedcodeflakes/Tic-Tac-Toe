console.log("Welcome to Tic Tac Toe")
let music = new Audio("")
let audioTurn = new Audio("")
let gameover = new Audio("")
let turn = "X"
let isgameover = false;
//Function to change the turn
const changeTurn = ()=>{
    return turn === "X"?"0":"X"
}
//Function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== '')){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw"
            document.querySelector('.info').style.color = "#911d91"
        }
    })
}

//Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element)=>{
    console.log(element)
    let boxtext = element.getElementsByClassName('boxtext')[0]
    
    element.addEventListener('click', ()=>{
        
        if(boxtext.innerHTML=== ''){
           
            boxtext.innerHTML = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})
//Add on click reset
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    isgameover = false
    document.querySelector(".line").style.width = "0vw"
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
    document.querySelector('.info').style.color = "black"
})