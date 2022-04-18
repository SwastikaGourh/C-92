
score = 0;

function updateScore()
{
    score = score+1;
    document.getElementById("score").innerHTML = "score : "+ score;
}

function saveScore()
{
    localStorage.setItem("Score",score);
}

function nextPlay()
{
    window.location = "activity_2.html";
}