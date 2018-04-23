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
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

`)

var score, roundScore, activePlayer, gamePlaying;

init();
//Créer les variables qui définissent le score des deux players
//Créer une variable qui mets par défaut le score à 0
//Créer une variable qui 



document.querySelector('.dice').style.display = 'none';
//select button where event 


document.querySelector('.btn-roll').addEventListener('click', function(){
  if(gamePlaying){
  // 1. RANDOM NUMBER
  var dice = Math.floor(Math.random()*6 + 1);
  // 2. DISPLAY THE RESULT - Create a viable can use multi-time 
  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.src = 'dice-' + dice + '.png';

  document.querySelector('#current-' + activePlayer).textContent = dice;
  // 3. UPDATE THE ROUND SCORE IF THE ROOLED NUMBER WAS NOT A 1
  if(dice !== 1){
    // Add the score
  roundScore += dice; 
  // Afficher le roundScore dans le UI
  document.querySelector('#current-' + activePlayer).textContent = roundScore;
  } else {
    // NExt player
  nextPlayer();
  }
}
})


document.querySelector('.btn-hold').addEventListener('click', function(){
  if(gamePlaying){
  //Add current score to global score
scores[activePlayer] += roundScore;
  //update the UI
document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
//Create next player function

// check if player won the game
if(scores[activePlayer] >= 10){
  document.getElementById('name-' + activePlayer).textContent = "winner!";
  document.querySelector('.dice').style.display = 'none';
  document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
  document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
  gamePlaying = false;
}else{
  nextPlayer();
}
}
});

document.querySelector('.btn-new').addEventListener('click', init);

function init (){
  scores = [0,0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  document.querySelector(".dice").style.display='none';  

  document.getElementById('score-0').textContent ='0';
  document.getElementById('score-1').textContent ='0';
  document.getElementById('current-0').textContent ='0';
  document.getElementById('current-1').textContent ='0';
  document.getElementById("name-0").textContent = 'Player 1';
  document.getElementById("name-1").textContent = 'Player 2';
  document.querySelector(".player-0-panel").classList.remove('winner');
  document.querySelector(".player-1-panel").classList.remove('winner');
  document.querySelector(".player-0-panel").classList.remove('active');
  document.querySelector(".player-1-panel").classList.remove('active'); 
  document.querySelector(".player-0-panel").classList.add('active');
 

   
  // myFunction();
}

function nextPlayer(){
  // NExt player
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;
  document.getElementById('current-0').textContent ='0';
  document.getElementById('current-1').textContent ='0';
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  document.querySelector('.dice').style.display = 'none';
}


function myFunction() {
  var person1 = prompt("Name for player 1", "");
  var person2 = prompt("Name for player 2", "");
  
  if (person1 != null && person2 != null) {
      document.getElementById("name-0").innerHTML = person1;
      document.getElementById("name-1").innerHTML = person2;      
            
  }
}









// //Generer le nombre entre 1-6
// dice = Math.floor(Math.random()*6 + 1);


//Assigné le nombre aléatoire au l'element UI
// document.querySelector('#current-' + activePlayer).textContent = dice;
//display none le dès 
