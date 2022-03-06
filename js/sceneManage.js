
function GamePage(){
    //1 on efface le canvas
  time++;

  ctx.clearRect(0,0,canvas.width, canvas.height);

  initSnow();

  ScoreVie();

  hero.draw(ctx);

  updateAsteroid();

  hero.move();

  traiteCollisionsJoueurAvecBords();

  if(time == 80){

      creerDesAsteroid(1);
      time = 0;

  }
}

function afficherMenuPrincipal(){

    ctx.save();

    ctx.font = 'bold 30px starwars';
    ctx.drawImage(assets.startimage,335,0,540*1.5,405*1.5);
    ctx.fillStyle = 'black';
    ctx.globalAlpha = 0.4;
    ctx.fillRect(450,15,375,40);
    ctx.fillStyle = 'white';
    ctx.globalAlpha = 1;
    ctx.fillText("Click to Start Game",450,50);
    //ctx.fillText("Millennium Falcon : fastest in the Galaxy",75,100);
    ctx.restore();

}

function afficherRules(){
    ctx.save();

    ctx.fillStyle = 'white';
    ctx.font = 'bold 40px starwars';
    ctx.fillText("Rules : Avoid obstacles to achieve your Mission Level",125,150);

    ctx.drawImage(assets.rulesimage,400,175,600*1.2,350*1.2);

    ctx.restore();

}

function afficherGameOver(){
    ctx.save();

    ctx.drawImage(assets.ecrangameover,375,0);
    ctx.fillStyle = 'white';
    ctx.font = 'bold 60px starwars';
    ctx.fillText("game over",540,150);
    ctx.font = 'bold 40px starwars';
    ctx.fillText("Click to try again",540,575);
    
    ctx.restore();

}