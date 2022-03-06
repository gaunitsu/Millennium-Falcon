let hero = {
    xhero:250,
    yhero:250,
    l:105,
    h:90,
    vitesseX:0,
    vitesseY:0,
    vie:3,
    heroGlobalAlpha:1,
  
    draw:function(ctx){
      ctx.save();
  
      //ctx.translate(this.xhero, this.yhero);
      //ctx.strokeStyle = 'white';
      ctx.globalAlpha = this.heroGlobalAlpha;
      ctx.drawImage(assets.faucon, this.xhero, this.yhero);
      ctx.globalAlpha = 0;
      ctx.strokeRect(this.xhero, this.yhero,this.l,this.h);
      ctx.restore();
    },
  
    move:function(){
      this.xhero += this.vitesseX;
      this.yhero += this.vitesseY;
    }
  }