let boxes = document.querySelectorAll(".box");
let newGameBtn = document.querySelector("#new-btn");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = ()=>{
    turnO =true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
//foreach loop using arrow function
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        //console.log("box was clicked");
        if(turnO){
            //palyerO
            box.innerText = "O";
            box.style.color= "#b04136";
            turnO = false;
        }
        else{
            //playerX
            box.innerText = "X";
            box.style.color= "#647E68";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes=()=>{
         for(let box of boxes){
            box.disabled = true;
         }
};

const enableBoxes=()=>{
    for(let box of boxes){
       box.disabled = false;
       box.innerText="";
    }
};

const showWinner=(winner)=>{
          msg.innerText = `Congratulation, Winner is ${winner}`;
          msgContainer.classList.remove("hide");
          disableBoxes();
};
const checkWinner =() =>{
    for(let pattern of winpatterns){
       let pos1Val = boxes[pattern[0]].innerText;
       let pos2Val = boxes[pattern[1]].innerText;
       let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
               // console.log("winner",pos1Val);
                showWinner(pos1Val);
                
            } 
        }
    }
};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

// let boxO = document.querySelector(".box");
// boxO.style.color= "blue";