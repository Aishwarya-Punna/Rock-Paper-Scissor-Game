const rules=document.querySelector(`#rules`);
console.log("Rules button is created!");

const popup=document.querySelector(`.rulesBox`);
console.log("RuleBox Popup class is created!");

const closebtn=document.querySelector(`.close`)

rules.addEventListener('click',()=> {
    popup.style.display='flex';
});

closebtn.addEventListener('click',()=>{
    popup.style.display='none';
});

popup.addEventListener('click',(event)=>{
    if(event.target==popup){
        popup.style.display='none';
    }
});

let choices=["rock","paper","scissor"];
let UserSelect;
let scoreOfComp=0;
// scoreOfComp=parseInt(localStorage.getItem("scoreOfComp"))||0;

function computerChoose(){
let randomIndex=Math.floor(Math.random() *choices.length);
return choices[randomIndex];
console.log(ComputerSelect);
}

function resetUI() {
    document.querySelectorAll(".win, .tie, .tie2, .tie3, .lost, .lost2, .lost3, .YouWinAgainstPC1, .YouWinAgainstPC2, .gameSetUpExceptRules")
        .forEach(el => el.style.display = "none");
    document.querySelector(".gameSetUp").style.display = "block";
    document.querySelector(".gameSetUpExceptRules").style.display = "block";

    
}

let YourScore=0;
// YourScore= parseInt(localStorage.getItem("YourScore"))||0;
function userChoose(UserSelect){
    ComputerSelect=computerChoose();
    resetUI();
    switch(true){
        case ComputerSelect=== "rock"&&UserSelect==="rock":
            document.querySelector(".tie").style.display="block";
            document.querySelector(".gameSetUpExceptRules").style.display = "none";
            break;
        
        case ComputerSelect==="paper"&&UserSelect==="paper":
            document.querySelector(".tie3").style.display="block";
            document.querySelector(".gameSetUpExceptRules").style.display = "none";
            break;

        case ComputerSelect==="scissor" && UserSelect==="scissor"  :
            document.querySelector(".tie2").style.display="block";
            document.querySelector(".gameSetUpExceptRules").style.display = "none";
            break;

        case ComputerSelect==="scissor"&&UserSelect==="rock":
            YourScore=parseInt(localStorage.getItem("YourScore"))||0;
            YourScore++;
            localStorage.setItem("YourScore",YourScore);
            console.log(" Player Updated score",YourScore);
            document.getElementById("YourScore").value=YourScore;
            document.querySelector(".YouWinAgainstPC1").style.display="block";
            document.querySelector(".gameSetUp").style.display="none";
            break;

        case ComputerSelect==="paper" &&UserSelect==="scissor":
            YourScore=parseInt(localStorage.getItem("YourScore"))||0;
            YourScore++;
            localStorage.setItem("YourScore",YourScore);
            console.log("Updated score",YourScore);
            document.getElementById("YourScore").value=YourScore;
            document.querySelector(".win").style.display="block";
            document.querySelector(".gameSetUp").style.display="none";    
            break;

        case ComputerSelect==="rock" &&UserSelect==="paper"  :
            YourScore=parseInt(localStorage.getItem("YourScore"))||0;
            YourScore++;
            localStorage.setItem("YourScore",YourScore);
            console.log("Player Updated score",YourScore);
            document.getElementById("YourScore").value=YourScore;
            document.querySelector(".YouWinAgainstPC2").style.display="block";
            document.querySelector(".gameSetUp").style.display="none";
            break;

        case ComputerSelect==="rock" && UserSelect==="scissor":
            scoreOfComp=parseInt(localStorage.getItem("scoreOfComp"))||0;
            scoreOfComp++;
            localStorage.setItem("scoreOfComp",scoreOfComp);
            console.log(" PC Updated score",scoreOfComp);
            document.getElementById("scoreOfComp").value=scoreOfComp;
            document.querySelector(".lost2").style.display="block";
            document.querySelector(".gameSetUpExceptRules").style.display = "none";
            break;

        case ComputerSelect==="scissor" && UserSelect==="paper":
            scoreOfComp=parseInt(localStorage.getItem("scoreOfComp"))||0;
            scoreOfComp++;
            localStorage.setItem("scoreOfComp",scoreOfComp);
            console.log("PC Updated score",scoreOfComp);
            document.getElementById("scoreOfComp").value=scoreOfComp;
            document.querySelector(".lost").style.display="block";
            document.querySelector(".gameSetUpExceptRules").style.display = "none";
            break;

        case ComputerSelect==="paper" && UserSelect==="rock":
            scoreOfComp=parseInt(localStorage.getItem("scoreOfComp"))||0;
            scoreOfComp++;
            localStorage.setItem("scoreOfComp",scoreOfComp);
            console.log("PC Updated score",scoreOfComp);
            document.getElementById("scoreOfComp").value=scoreOfComp;
            document.querySelector(".lost3").style.display="block";
            document.querySelector(".gameSetUpExceptRules").style.display = "none";
            break;

        

        // case ComputerSelect==="scissor" && UserSelect==="scissor":
        //     document.querySelector(".tie2").style.display="block";
        //     document.querySelector(".gameSetUpExceptRules").style.display="none";
        //     break;

        // case ComputerSelect==="paper" && UserSelect==="paper":
        //     document.querySelector(".tie3").style.display="block";
        //     document.querySelector(".gameSetUpExceptRules").style.display = "none";
        //     break;
     }
}


document.getElementById("winPlayAgain").addEventListener("click",resetUI);
document.getElementById("winPlayAgain1").addEventListener("click",resetUI);
document.getElementById("winPlayAgain2").addEventListener("click",resetUI);
document.getElementById("LostPlayAgain").addEventListener("click",resetUI);
document.getElementById("LostPlayAgain2").addEventListener("click",resetUI);
 document.getElementById("LostPlayAgain3").addEventListener("click",resetUI);
document.getElementById("replay").addEventListener("click",resetUI);
document.getElementById("replay2").addEventListener("click",resetUI);
document.getElementById("replay3").addEventListener("click",resetUI);


// document.getElementById("result").innerText = result;

const rock=document.querySelector(`#rock`).addEventListener('click',()=>{
    console.log("Rock button is Clicked!");
    userChoose("rock");
}, {once:true});

const paper=document.querySelector(`#paper`).addEventListener('click',()=>{
    console.log("Paper button is clicked!");
    userChoose("paper");
},{once:true});

const scissor=document.querySelector(`#scissor`).addEventListener('click',()=>{
    console.log("Scissor button is Clicked!");
    userChoose("scissor");
},{once:true});


const next=document.querySelector(`#next`);
const next1=document.querySelector(`#next1`);
const next2=document.querySelector(`#next2`);
document.getElementById("next").addEventListener("click",()=>{
    console.log("Next button clicked!");
    document.querySelector(".hurray").style.display="block";
    document.querySelector(".gameSetUp").style.display="none";
    document.querySelector(".win").style.display="none";
    document.querySelector(".header").style.display="none"
});
document.getElementById("next1").addEventListener("click",()=>{
    console.log("Next1 button clicked!");
    document.querySelector(".hurray").style.display="block";
    document.querySelector(".gameSetUp").style.display="none";
    document.querySelector(".YouWinAgainstPC1").style.display="none";
    document.querySelector(".header").style.display="none"
});
document.getElementById("next2").addEventListener("click",()=>{
    console.log("Next2 button clicked!");
    document.querySelector(".hurray").style.display="block";
    document.querySelector(".gameSetUp").style.display="none";
    document.querySelector(".YouWinAgainstPC2").style.display="none";
    document.querySelector(".header").style.display="none"
});

document.getElementById("TropyNextPlayAgain").addEventListener("click",()=>{
    console.log("TropyNextPlayAgain Button is Clicked!!!");
    document.querySelector(".hurray").style.display="none";
    document.querySelector(".header").style.display="block";
    document.querySelector(".gameSetUp").style.display="block";
    localStorage.setItem("YourScore",0);
    localStorage.setItem("scoreOfComp",0);
    document.getElementById("YourScore").value=0;
    document.getElementById("scoreOfComp").value=0;
    // localStorage.clear();
});



const winRules=document.querySelector(`#winRules`);
const winRules1=document.querySelector(`#winRules1`);
const winRules2=document.querySelector(`#winRules2`);
winRules.addEventListener("click",()=>{
    popup.style.display='flex';
} );
winRules1.addEventListener("click",()=>{
    popup.style.display="flex";
});
winRules2.addEventListener("click",()=>{
    popup.style.display="flex";
});


document.addEventListener("DOMContentLoaded", () => {
    // Retrieve stored scores
    let YourScore = parseInt(localStorage.getItem("YourScore")) || 0;
    let scoreOfComp = parseInt(localStorage.getItem("scoreOfComp")) || 0;

    // Update the UI immediately on page load
    document.getElementById("YourScore").value = YourScore;
    document.getElementById("scoreOfComp").value = scoreOfComp;

    console.log("Loaded YourScore:", YourScore);
    console.log("Loaded scoreOfComp:", scoreOfComp);
});


