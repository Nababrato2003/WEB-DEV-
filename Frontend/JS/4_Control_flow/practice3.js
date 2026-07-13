//Rock paper scissors logic 
function rps(user, computer) {
    if (user === "rock" && computer === "scissors") return "user wins";
    else if (user === "scissors" && computer === "paper") return "user wins";
    else if (user === "paper" && computer === "rock") return "user wins";
    else if (user === "rock" && computer === "rock") return "draw";
    else if (user === "scissors" && computer === "scissors") return "draw";
    else if (user === "paper" && computer === "paper") return "draw";
    else return "computer wins";
}

console.log(rps("rock", "scissors"));//user wins
console.log(rps("scissors", "paper"));//user wins
console.log(rps("paper", "rock"));//user wins
console.log(rps("rock", "rock"));//draw
console.log(rps("scissors", "scissors"));//draw
console.log(rps("paper", "paper"));//draw
console.log(rps("rock", "paper"));//computer wins
console.log(rps("scissors", "rock"));//computer wins
console.log(rps("paper", "scissors"));//computer wins
