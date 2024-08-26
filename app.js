let boxes=document.querySelectorAll(".box");
let resetGameBtn = document.querySelectorAll("#resetBtn");
let newGameBtn=document.querySelector("#newBtn");
let msgContainer=document.querySelector(".msgContainer");
let msg=document.querySelector("#msg");
let turnO=true;
const winPatterns=
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
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");

};
boxes.forEach((box)=>
{
    box.addEventListener("click",()=>
    {
        
       if(turnO)
       {
        box.innerText="O";
        turnO=false;

       }
        else
        {
            box.innerText="X";
            turnO=true;
            box.style.color="black";
            
        }
       box.disabled=true;

       checkWinner();
    });
});
const noWinner=()=>
{

}
const disableBoxes=()=>
{
    for(box of boxes)
    {
        box.disabled=true;
    }
}
const enableBoxes=()=>
    {
        for(box of boxes)
        {
            box.disabled=false;
            box.innerText="";
        }
    }
const showWinner=(winner)=>
{
    msg.innerText=`Congragulations,winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner=()=>
{
    for(let pattern of winPatterns)
    {
        let posValue1 = boxes[pattern[0]].innerText;
        let posValue2 = boxes[pattern[1]].innerText;
        let posValue3 = boxes[pattern[2]].innerText;
       if(posValue1!="" && posValue2!="" && posValue3!="")
       {
        if(posValue1===posValue2 && posValue2===posValue3)
        {
            
            showWinner(posValue1);
        }
       }
     }
};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame)
