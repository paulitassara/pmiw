class Juego {

  constructor(fondo, ovni, imgMeteorito) {

    this.fondo = fondo;
    this.ovni = ovni;

    this.imgMeteorito = imgMeteorito;
    this.meteoritos = [];

    this.tiempoGeneracion = 0;
    this.intervalo = 120;

    this.vidas = 5;
    this.puntaje = 0;
  }


  actualizar() {

    if (this.puntaje >= 20) {
      estado = 2;
      return;
    }

    if (this.vidas <= 0) {
      this.reiniciar();
      estado = 0;
      return;
    }

    this.fondo.dibujar();
    this.ovni.moverOvni();
    this.ovni.dibujar();

    this.generarMeteoritos();
    this.actualizarMeteoritos();
    this.dibujarVidas();
  }



  mostrarPantallaInicio() {
    image(imgFondo, 0, 0, width, height);

    fill(0, 0, 0, 180);
    rect(0, 0, width, height);

    fill(255);
    textAlign(CENTER);
    textSize(32);
    textStyle(BOLD);
    text("¡BIENVENIDO AL VIAJE DEL MARCIANO!", width/2, height/2 - 40);

    textSize(20);
    textStyle(NORMAL);
    text("Esquivá los meteoritos y llegá a la Tierra.", width/2, height/2);
    text("Hacé CLICK para comenzar.", width/2, height/2 + 80);
    text("Controlá la nave con las flechitas.", width/2, height/2 + 40);
  }


  mostrarPantallaVictoria() {
    image(imgTierra, 0, 0, width, height);

    fill(255, 255, 0);
    textAlign(CENTER);
    textSize(30);
    textStyle(BOLD);
    text("¡HAS LLEGADO A LA TIERRA!", width/2, height/2 - 20);

    fill(255);
    textSize(20);
    text("Puntaje final: " + this.puntaje, width/2, height/2 + 20);

    textSize(16);
    text("Hacé CLICK para volver al inicio.", width/2, height/2 + 60);
  }



  reiniciar() {
    this.meteoritos = [];
    this.tiempoGeneracion = 0;

    this.vidas = 5;
    this.puntaje = 0;

    this.ovni.x = 120;
    this.ovni.y = height / 2;
  }



  dibujarVidas() {
    fill(255);
    textSize(24);
    textAlign(LEFT);
    text("Vidas: " + this.vidas, 20, 30);
    text("Puntaje: " + this.puntaje + "/20", 20, 60);
  }



  generarMeteoritos() {
    this.tiempoGeneracion++;

    if (this.tiempoGeneracion > this.intervalo) {
      this.meteoritos.push(new Meteorito(this.imgMeteorito, width));
      this.tiempoGeneracion = 0;
    }
  }



  colision(ovni, met) {

    let izqO = ovni.x - ovni.ancho / 2;
    let derO = ovni.x + ovni.ancho / 2;
    let arrO = ovni.y - ovni.alto / 2;
    let abaO = ovni.y + ovni.alto / 2;

    let margen = 25;

    let izqM = met.x + margen;
    let derM = met.x + met.ancho - margen;

    let tocaArriba =
      izqO < derM && derO > izqM &&
      arrO < met.alturaArriba - margen &&
      abaO > 0;

    let tocaAbajo =
      izqO < derM && derO > izqM &&
      arrO < height &&
      abaO > met.alturaArriba + met.espacio + margen;

    return tocaArriba || tocaAbajo;
  }



  actualizarMeteoritos() {

    for (let i = this.meteoritos.length - 1; i >= 0; i--) {

      let m = this.meteoritos[i];

      m.mover();
      m.dibujar();

      if (!m.chocado && this.colision(this.ovni, m)) {
        this.vidas--;
        m.chocado = true;
        this.ovni.x = 120;
        this.ovni.y = height / 2;
      }

      if (m.fueraDePantalla()) {
        this.puntaje++;
        this.meteoritos.splice(i, 1);
      }
    }
  }
}
