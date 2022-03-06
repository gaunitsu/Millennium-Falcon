//Gestion des événéments clavier

function handleKeydown(event) {
  switch (event.key) {
    case "ArrowLeft":
      hero.vitesseX = -5;
      break;
    case "ArrowRight":
      hero.vitesseX = 5;
      break;
    case "ArrowUp":
      hero.vitesseY = -5;
      break;
    case "ArrowDown":
      hero.vitesseY = 5;
      break;
  }
}

function handleKeyup(event) {
  switch (event.key) {
    case "ArrowLeft":
    case "ArrowRight":
      hero.vitesseX = 0;
      break;
    case "ArrowUp":
    case "ArrowDown":
      hero.vitesseY = 0;
      break;
  }
}

function traiteMouseDown(event) {
  if(etatjeu=="StartMenu"){
      etatjeu='rules';
      Asteroids.splice(0,Asteroids.length);
      creerDesAsteroid(1);
  }

  else if(etatjeu=="rules"){
      etatjeu="GameStart";
  }

  else if(etatjeu=="FinduJeu"){
      etatjeu='StartMenu';
      hero.vie = 3;
  }
 
}