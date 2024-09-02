
let boxes= document.querySelectorAll(".box");
let rstbtn=document.querySelector(".rst-btn");
let newbtn=document.querySelector(".new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0=true; // playerX,player0

const winning= 
[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];


const resetGame=()=>
    {
        turn0=true;
        enableBoxes();
        msgContainer.classList.add("hide");
  }

  boxes.forEach((box)=>
{
    box.addEventListener("click",()=>
    {
        if(turn0)//player0
        {
            box.innerText="0";
            turn0=false;
        }else{ //player x
            box.innerText="X";
            turn0=true;

        }
        box.disabled=true;
         checkWinner();
    });
});
const disabledBoxes=()=>
{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}

const enableBoxes=()=>
    {
        for(let box of boxes)
        {
            box.disabled=false;
            box.innerText="";
        }
    }
    

   //show Winner
   const showWinner=(winner)=>
   {
      msg.innerText=`Congratulations, winner is ${winner}`;// display msg when one partner is win
      msgContainer.classList.remove("hide"); // When win one partner class list display visible winning msg
      disabledBoxes();//value call for disbaled boxes
   }

   //loop for check winning pattern

   const checkWinner=()=> {
      for( let pattern of winning)
      {
        let pos1Val =boxes[pattern[0]].innerText;
        let pos2Val =boxes[pattern[1]].innerText;
        let pos3Val =boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val!="" && pos3Val!="")
        {
            if(pos1Val=== pos2Val && pos2Val==pos3Val)
            {
                showWinner(pos1Val);
                
            }
        }

        
   }
};
newbtn.addEventListener("click", resetGame);
rstbtn.addEventListener("click", resetGame);