/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/




var scores,roundscore,activePlayer,gameplaying;

init();

dice=Math.floor(Math.random() * 6) + 1;

//document.querySelector('#current-' + activePlayer).textContent=dice;
//document.querySelector('#current-'+activePlayer).innerHTML='<em>' + dice + '</em>';

//var x =document.querySelector('#score-0').textContent;
//console.log(x);

//document.querySelector('.dice').style.display='none';


document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gameplaying){
        //radom number
    var dice=Math.floor(Math.random() * 6) + 1;
    //display the result
    var diceDOM=document.querySelector('.dice');
    diceDOM.style.display='block';
    diceDOM.src='dice-' +dice + '.png';
    
    
    //update the round score if the rolled number was ot 1
    if (dice!==1){
        //addscore
        roundscore += dice;
        document.querySelector('#current-' + activePlayer).textContent=roundscore;
        
    }else{
        //nextplayer
        
        nextPlayer();
    
    }
}
    
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gameplaying){
          //add current score to globalscore
    scores[activePlayer]+= roundscore;
    //update the user interface
    document.querySelector('#score-'+ activePlayer).textContent=scores[activePlayer];
    //check if player won game
    if(scores[activePlayer]>=100){
        
        document.querySelector('#name-'+ activePlayer).textContent= 'winner!';
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player-'+ activePlayer +'-panel').classList.add('winner');
        document.querySelector('.player-'+ activePlayer +'-panel').classList.remove('active');
        gameplaying=false;
    }else{
        
        
        //next player
        nextPlayer();
    }

    }
    
  
    
});

function nextPlayer(){
    //nextplayer
        activePlayer === 0 ? activePlayer=1: activePlayer=0;
        roundscore=0;
        
      document.getElementById('current-0').textContent='0';
      document.getElementById('current-1').textContent='0';


      document.querySelector('.player-0-panel').classList.toggle('active');
      document.querySelector('.player-1-panel').classList.toggle('active');

      document.querySelector('.dice').style.display='none'
    
}
document.querySelector('.btn-new').addEventListener('click',init);
    
    



function init(){
    scores=[0,0];
    roundscore=0;
    activePlayer=0; 
    gameplaying=true;
    
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.getElementById('name-0').textContent= 'player 1';
    document.getElementById('name-1').textContent= 'player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}











     



























