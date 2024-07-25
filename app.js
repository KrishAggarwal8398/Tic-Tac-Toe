let boxes = document.querySelectorAll(".btn");

let turnX = true;

let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msg = document.querySelector(".msg");

for(let i = 0; i<boxes.length; i++){
    boxes[i].addEventListener("click",()=>{
        if(turnX===true){
            boxes[i].innerText = "X";
            turnX = false;
            
        }
        else{
            boxes[i].innerText = "O";
            turnX = true;
        }
        boxes[i].disabled = true;
        checkWinner();
    });
}

let winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const checkWinner = ()=>{

    for(let i = 0; i<9; i++){
        let pos1 = boxes[winPatterns[i][0]].innerText;
        let pos2 = boxes[winPatterns[i][1]].innerText;
        let pos3 = boxes[winPatterns[i][2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("Winner");
                disableBoxes();
                showWinner(pos1);
            }
        }
    }
};

const showWinner = (pos)=>{
    msg.innerText = `Congratulations! Winner is : ${pos}`;
    msg.classList.remove("hide");
};

const disableBoxes = ()=>{
    for(let i = 0; i<9; i++) boxes[i].disabled = true;
};

const enableBoxes = ()=>{
    for(let i = 0; i<9; i++){
        boxes[i].disabled = false;
        boxes[i].innerText="";
    }
};

const resetgame = ()=>{
    turnX = true;
    enableBoxes();
    msg.classList.add("hide");
    
};

resetBtn.addEventListener("click",resetgame);
newBtn.addEventListener("click",resetgame);