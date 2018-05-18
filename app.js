/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


alert(`
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1 or two 6 in rolls, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The players can choose final score. By default the final score is 100 points, the first player who will get Final Score win the GAME`
)

var scores, roundScore, activePlayer, dice;


scores = [0,0];
roundScore = 0;
activePlayer = 0;
rest();

var diceSix;


document.querySelector('.btn-roll').addEventListener('click', function(){
  //1.random number
  dice = Math.floor(Math.random() * 6) + 1;
  //2. Display the result
  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.src = 'dice-' + dice + '.png';
  //3. Update the round score IF the rolled number was NOT a 1
  // rajoute le score si je des est sup à 1 ou dice est different de 6
  if(dice === 6 && diceSix === 6){
    //player lose score
    document.querySelector('.btn-alert').textContent = `Player ${activePlayer + 1} roll two 6 in row !`;
    scores[activePlayer] = 0;
    document.getElementById('score-' + activePlayer).textContent = '0';
    // On l'efface 8 secondes plus tard
    setTimeout(
      function(){
      document.querySelector('.btn-alert').innerHTML = "";
    },1700);
    nextPlayer();  
  }else if(dice > 1){
    //4. add the random number at current score
      roundScore += dice;
      document.getElementById('current-' + activePlayer).textContent = roundScore;
  }else{
        // On affiche le message
        document.querySelector('.btn-alert').textContent = `Player ${activePlayer + 1} roll number 1 !`;
        document.querySelector('.btn-alert').style.transition = "all 5s";    
        // On l'efface 8 secondes plus tard
        setTimeout(
          function(){
          document.querySelector('.btn-alert').innerHTML = "";
        },1700);  

    nextPlayer();
  }
  diceSix = dice;

});


document.querySelector('.btn-hold').addEventListener('click', function(){
  // add the current score to global score
scores[activePlayer] += roundScore;
  // update the UI
var winner = document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
  //check if player won the game
  var input = document.querySelector('.final-score').value;
  var winningScore;
  if(input){
    winningScore = input;
  }else{
    winningScore = 100;
  }
if(winner >= winningScore){
  document.getElementById('name-' + activePlayer).textContent = 'Winner !';
  document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
  document.querySelector('.btn-roll').style.display = 'none';
  document.querySelector('.btn-hold').style.display = 'none';
  document.querySelector('.dice').style.display = 'none';
  document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
  document.getElementById('current-'+ activePlayer).textContent = '0';
  document.querySelector('.final-score').style.display = 'none';
}else{
  //Next player
  nextPlayer();
}

});

document.querySelector('.btn-new').addEventListener('click', rest);




function nextPlayer(){
  //Next player
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;
  
   document.getElementById('current-0').textContent = '0';
   document.getElementById('current-1').textContent = '0';
   document.querySelector('.player-0-panel').classList.toggle('active');
   
   document.querySelector('.player-1-panel').classList.toggle('active');

   document.querySelector('.dice').style.display = 'none';
}

//Set all to 0
function rest(){
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.querySelector('.player-0-panel').classList.add('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.btn-roll').style.display = 'block';
  document.querySelector('.btn-hold').style.display = 'block';
  document.querySelector('.player-' + activePlayer + '-panel').classList.remove('winner');
  document.getElementById('name-0').textContent='Player 1';
  document.getElementById('name-1').textContent='Player 2';
  
  
  scores = [0,0];
  roundScore = 0;
  activePlayer = 0;
  document.querySelector('.dice').style.display = 'none';
  
};

