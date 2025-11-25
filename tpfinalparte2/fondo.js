class Fondo {
  constructor(img) {
    this.img = img;
  }

  dibujar() {
    imageMode(CORNER);
    image(this.img, 0, 0, width, height);
  }
}
