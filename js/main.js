window.onload = main;

let canvas , ctx, assets;
let etatjeu = "StartMenu";
var time = 0;
let currentalpha = 0;
let isPlayerInvincible;
let dureeInvincibiliteTemporaireDebut = 1500;
let dureeInvincibiliteTemporaireToucheParEnnemi = 2000;

function main() {
  loadAssets(startGame);
}

function startGame(assetsLoaded) {

    console.log('page chargée');
    // on récupére grâce à la Selector API

    canvas = document.querySelector("#mycanvas");

    ctx = canvas.getContext('2d');

    assets = assetsLoaded;

    //console.log(monstre.donneTonNom());

    document.onkeydown = handleKeydown;
    document.onkeyup = handleKeyup;

    canvas.onmousedown = traiteMouseDown;


    requestAnimationFrame(animationLoop);

}


//Animation à 60 images/s
function animationLoop(){
      //1 on efface le canvas
      ctx.clearRect(0,0,canvas.width, canvas.height);

      switch(etatjeu){
          case"StartMenu":
              afficherMenuPrincipal();
              break;
          case"rules":
              afficherRules();
              break;
          case"GameStart":
              GamePage();
              break;
          case"FinduJeu":
              afficherGameOver();
              break;
      }
      
      requestAnimationFrame(animationLoop);
  
}

function ScoreVie(){

    if(hero.vie == 3){
        ctx.save();
        ctx.drawImage(assets.lifeicon,25,25,70,70);
        ctx.drawImage(assets.lifeicon,105,25,70,70);
        ctx.drawImage(assets.lifeicon,190,25,70,70);
        ctx.restore();
    }
    else if(hero.vie == 2){
        ctx.save();
        ctx.drawImage(assets.lifeicon,25,25,70,70);
        ctx.drawImage(assets.lifeicon,105,25,70,70);
        ctx.restore();
    }
    else if(hero.vie == 1){
        ctx.save();
        ctx.drawImage(assets.lifeicon,25,25,70,70);
        ctx.restore();
    }

}




 

