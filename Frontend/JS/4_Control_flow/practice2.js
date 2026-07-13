//Clearner but do not use so many if statement in future as it is not scalable 
function getGrade(score) {
    if (score >= 90 && score <= 100) return "A+";
    else if (score >= 80 && score < 90) return "A";
    else if (score >= 70 && score < 80) return "B";
    else if (score >= 60 && score < 70) return "C";
    else if (score >= 50 && score < 60) return "D";
    else if (score >= 40 && score < 50) return "E";
    else if (score < 40) return "F";
    else return "Invalid Score";
}

console.log(getGrade(90));//A+
console.log(getGrade(89));//A
console.log(getGrade(45));//E
console.log(getGrade(74));//B
console.log(getGrade(54));//D
console.log(getGrade(19));//F
console.log(getGrade(105));//Invalid Score
console.log(getGrade(-2));//Invalid Score