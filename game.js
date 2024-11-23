let userScore = 0;
let computerScore = 0;
function win(){
    return "Hurray! You won"
}
function losse(){
    return "You loose"
}
function tie(){
    return "Tie"
}
let result = document.querySelector(".result")
let userScoreText = document.querySelector("#user-score")
let computerScoreText = document.querySelector("#computer-score")

const choices = document.querySelectorAll(".imgs")

const playgame = (min=1,max=3)=>{
        let num =  Math.floor(Math.random() * (max - min + 1)) + min;
        if(num==1){return"Rock"}
        else if(num==2){return"Paper"}
        else {return"Scissor"};
}
const gameround = 5;
let gameloop = ()=>
{
        choices.forEach((choice)=>{
            choice.addEventListener("click",()=>{
                const userchoice = choice.getAttribute("id");
                userScoreText.innerHTML = userchoice;
                let computerChoice = playgame();
                computerScoreText.innerHTML = computerChoice;

                if((userchoice=="Rock"&&computerChoice=="Paper")||(userchoice=="Paper"&&computerChoice=="Scissor")||(userchoice=="Scissor"&&computerChoice=="Rock")){
                    result.innerHTML = ""+losse();
                    result.style.color = "red"
                    computerScore++;                    
                }
                else if((userchoice=="Rock"&&computerChoice=="Scissor")||(userchoice=="Paper"&&computerChoice=="Rock")||(userchoice=="Scissor"&&computerChoice=="Paper"))
                {
                    result.innerHTML = ""+win();
                    result.style.color = "green";
                    userScore++;
                }
                else{
                    result.innerHTML = ""+tie();
                    result.style.color = "yellow"
                }

                
            })
        })
}
// start button functionality
let start = document.querySelector("#startBUtton")
start.addEventListener("click",()=>{
    computerScore = 0;
    userScore = 0;
    userScoreText.innerHTML = "-"
    computerScoreText.innerHTML = "-"
    // document.querySelector(".computer-choice").innerHTML = "-";
    // document.querySelector(".user-choice").innerHTML = "-";
    for(let i=0;i<5;i++)
    {
        gameloop();
    }
})
