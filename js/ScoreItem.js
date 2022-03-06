class Chewbaca {
    x;
    y;
    l;
    h;
    rayon;
    image;
    vitesseX;

    constructor(x,y,l,h,rayon,image,vitesseX){
        this.x = x;
        this.y = y;
        this.rayon = rayon;
        this.l = l;
        this.h = h;
        this.image = image;
        if(vitesseX) this.vitesseX = vitesseX;
    } 

    draw(ctx){
        ctx.save();
        
         ctx.beginPath();
         ctx.strokeStyle = 'white';
         ctx.drawImage(this.image,this.x - 70, this.y - 70, 150, 150);
         ctx.arc(this.x,this.y,this.rayon,0,2*Math.PI);
         ctx.globalAlpha = 0;
         ctx.stroke();

        ctx.restore();
    }

    move(){
        this.x -= this.vitesseX * Math.random();
    }
}

let Asteroids = [];

function creerDesItems(nb){

    for(let i=0; i < nb; i++){
        let x = 1500;
        let y = hero.yhero ;
        let l=380;
        let h=200;
        let rayon = 65;
        let image = assets.asteroidrond;
        let vx = 15;

        let a = new Asteroid(x , y, l, h,rayon,image, vx);

        Asteroids.push(a);
    }
}

function updateAsteroid(){

    Asteroids.forEach((a) =>{
        a.draw(ctx);
        traiteCollisionHeroAvecAsteroid(a);
        a.move();
    })
}