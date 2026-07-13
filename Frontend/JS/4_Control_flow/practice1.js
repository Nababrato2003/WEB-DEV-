function getGrade(score) {
    if (score >= 90 && score < 100) {
        return "A+";
    }
    else if (score >= 80 && score < 90) {
        return "A";
    }
    else if (score >= 70 && score < 80) {
        return "B";
    }
    else if (score >= 60 && score < 70) {
        return "C";
    }
    else if (score >= 50 && score < 60) {
        return "D";
    }
    else if (score >= 40 && score < 50) {
        return "E";
    }
    else if (score < 40) {
        return "F";
    }
    else {
        return "Invalid score";
    }
}
console.log(getGrade(90));//A+
console.log(getGrade(45));//E
console.log(getGrade(67));//C
console.log(getGrade(84));//A
console.log(getGrade(34));//F
console.log(getGrade(105));//Invalid score
console.log(getGrade(-2));//Invalid score
