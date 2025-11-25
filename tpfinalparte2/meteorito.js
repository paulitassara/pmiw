class Meteorito {
  constructor(img, x) {
    this.img = img;
    this.x = x;
    this.vel = 2;
    this.ancho = 80;
    this.alturaArriba = random(30, 360);
    this.espacio = 180; 
    this.chocado = false;  
  }

  mover() {
    this.x -= this.vel;
  }

  dibujar() {
    imageMode(CORNER);
    image(this.img, this.x, 0, this.ancho, this.alturaArriba);
    image(
      this.img,
      this.x,
      this.alturaArriba + this.espacio,
      this.ancho,
      height - (this.alturaArriba + this.espacio)
    );
  }

  fueraDePantalla() {
    return this.x + this.ancho < 0;
  }
}
