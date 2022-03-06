function traiteCollisionsJoueurAvecBords() {
    if (hero.xhero > canvas.width - hero.l) {
      //console.log("COLLISION A DROITE");
      // truc à savoir, pour ne pas que l'objet donne l'impression
      // d'aller plus loin que le bord de l'écran, on le remet au point de
      // contact
      hero.xhero = canvas.width - hero.l;
      hero.vitesseX = -hero.vitesseX;
    } else if (hero.xhero < 0) {
      //console.log("COLLISION A GAUCHE");
      hero.x = 0; // point de contact
      hero.vitesseX = -hero.vitesseX;
    }
  
    if (hero.yhero < 0) {
      hero.yhero = 0;
      hero.vitesseY = -hero.vitesseY;

    } else if (hero.yhero + hero.h > canvas.height) {
      hero.yhero = canvas.height - hero.h;
      hero.vitesseY = -hero.vitesseY;
    }
  }

  let toucher;

  function traiteCollisionHeroAvecAsteroid(a) {

    if(circRectsOverlap(
       hero.xhero, hero.yhero, hero.l,hero.h, a.x, a.y, a.rayon)
        ) {

          if(!isPlayerInvincible){
            rendJoueurInvincibleTemporairement(dureeInvincibiliteTemporaireToucheParEnnemi);
            if(hero.vie <= 0){
              etatjeu="FinduJeu";
            }
            else{
              hero.vie --;
            }
            
          }
          //console.log("COLLISION....");
          //perte d'une vie sur 3;
          
          //Suppression d'une tete d'Han solo

          // pop son damage
    }
    
  }

function circleCollide(x1, y1, r1, x2, y2, r2) {
    var dx = x1 - x2;
    var dy = y1 - y2;
    return dx * dx + dy * dy < (r1 + r2) * (r1 + r2);
  }

  function rectsOverlap(x1, y1, w1, h1, x2, y2, w2, h2) {
 
    if ((x1 > (x2 + w2)) || ((x1 + w1) < x2))
       return false; // No horizontal axis projection overlap
    if ((y1 > (y2 + h2)) || ((y1 + h1) < y2))
       return false; // No vertical axis projection overlap
    return true; // If previous tests failed, then both axis projections
                 // overlap and the rectangles intersect
  }
  
  function circRectsOverlap(x0, y0, w0, h0, cx, cy, r) {
     var testX=cx;
     var testY=cy;
     if (testX < x0) testX=x0;
     if (testX > (x0+w0)) testX=(x0+w0);
     if (testY < y0) testY=y0;
     if (testY > (y0+h0)) testY=(y0+h0);
     return (((cx-testX)*(cx-testX)+(cy-testY)*(cy-testY))< r*r);
  }
  