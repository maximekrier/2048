var langs  = {
	fr : {

		"title" : "Tentez d'atteindre le carré <strong>%s !</strong>",
		"best"  : "Meilleur",
        "youWin" : "Vous avez atteint l'objectif !",
		"gameOver" : "Perdu!",
		"tryAgain" : "Recommencer",
        "keepGoing" : "Continuer"
    },
	en : {
        
		"title" : "Join the numbers and get to the <strong>%s tile!</strong>",
		"best"  : "best",
        "youWin" : "You win!",
		"gameOver" : "Game Over!",
		"tryAgain" : "Try again",
        "keepGoing" : "Keep going"
	}
};


if(localStorage.maxScore == undefined)
{
    localStorage.maxScore = 2048;
}

var lang = langs[window.navigator.language.match(/fr/)? 'fr' : 'en'];

document.querySelector(".game-intro").innerHTML = lang.title.replace( "%s", localStorage.maxScore * 2 );
document.querySelector(".keep-playing-button").innerHTML = lang.keepGoing;
document.querySelector(".retry-button").innerHTML = lang.tryAgain;

$(function(){
  
  var value = (screen.height-$(".game-container").height())/2-$(".game-container").offset().top;
  
  $(".game-container").css({ marginTop:value });

  
});