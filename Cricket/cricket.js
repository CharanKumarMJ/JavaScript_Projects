let scoreStr = localStorage.getItem('Score');
let score;
resetScore(scoreStr);
function resetScore(scoreStr) {
    score = scoreStr? JSON.parse(scoreStr) : {
        win :0,
        tie :0,
        loss:0,
    }
score.scoreboard = function(){
return `Score : 🏆won = ${score.win}, 👎lost= ${score.loss}, tie = ${score.tie}`
}   
resultDisplay(); 
}

function genertateComputerChoice() {
    let randomNumber = Math.random() * 3;
    if(randomNumber >0 && randomNumber <=1){
        return 'Bat';
    }
    else if(randomNumber>1 && randomNumber<=2){
        return 'Ball';
    }
    else{
        return 'Stump';
    }
}

function getResult(userChoice, computerChoice) {
    if (userChoice === 'Bat') {
        if (computerChoice === 'Ball') {
            score.win++;
            return 'User Won';
        }
        else if(computerChoice === 'Stump'){
            score.loss++;
            return 'Computer Won';
        }
        else{
            score.tie++;
            return 'It is a Tie';
        }
    } else if (userChoice === 'Ball') {
        if (computerChoice === 'Bat') {
            score.loss++;
            return 'Computer won';
        }
        else if(computerChoice === 'Stump'){
            score.win++;
            return 'User Won';
        }
        else{
            score.tie++;
            return 'It is a Tie';
        }
    }else{
        if (computerChoice === 'Ball') {
            score.loss++;
            return 'Computer Won';
        }
        else if(computerChoice === 'Bat'){
            score.win++;
            return 'User Won';
        }
        else{
            score.tie++;
            return 'It is a Tie';
        }
    }
}

function resultDisplay(userChoice,computerChoice,result) {
    localStorage.setItem('Score',JSON.stringify(score));
    document.querySelector('#userChoice').innerText = userChoice? `User choose to ${userChoice}`:'';
    document.querySelector('#computerChoice').innerText = computerChoice? `Computer choose ${computerChoice}`:'';
    document.querySelector('#result').innerText = result? result:'';
    document.querySelector('#score').innerText = score.scoreboard();
}