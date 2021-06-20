const player1 = {
    score: 0,
    btn: document.querySelector('#p1btn'),
    display: document.querySelector('#p1Display')
};
const player2 = {
    score: 0,
    btn: document.querySelector('#p2btn'),
    display: document.querySelector('#p2Display')
};

const resetbtn = document.querySelector('#reset');
const playto = document.querySelector('#playto');
let winnerS = 3;
let gameOn = true;

function updateScores(player, opponent){
    if(gameOn){
        player.score += 1;
        player.display.textContent = player.score;
        if(player.score === winnerS){
            gameOn = false;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.btn.disabled = true;
            opponent.btn.disabled = true;
        }
    }
}

player1.btn.addEventListener('click',(e) => {
    updateScores(player1, player2);
});

player2.btn.addEventListener('click',(e) => {
    updateScores(player2, player1);
});

playto.addEventListener('change', function(){
    winnerS = parseInt(this.value);
    reset();
});

resetbtn.addEventListener('click', reset);

function reset(){
    gameOn = true;
    for(let p of [player1, player2]){
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.display.textContent = 0;
        p.score = 0;
        p.btn.disabled = false;
    }
}