class Ovni {
  constructor(img) {
    this.img = img;
    this.x = 120;
    this.y = height / 2;
    this.ancho = 120;
    this.alto = 60;
  }

  dibujar() {
    imageMode(CENTER);
    image(this.img, this.x, this.y, this.ancho, this.alto);
  }

  moverOvni() {
    if (keyIsDown(UP_ARROW)) this.y -= 3;
    if (keyIsDown(DOWN_ARROW)) this.y += 3;
    this.y = constrain(this.y, this.alto / 2, height - this.alto / 2);
  }
}
