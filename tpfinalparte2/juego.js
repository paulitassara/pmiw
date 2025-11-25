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
      estado = 3;   
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
    textAlign(CENTER, CENTER);
    textSize(32);
    textStyle(BOLD);
    text("¡BIENVENIDO AL VIAJE DEL MARCIANO!", width/2, height/2 - 60);
    textSize(20);
    textStyle(NORMAL);
    text("Esquivá los meteoritos y llegá a la Tierra.", width/2, height/2 - 10);
    text("Controlá la nave con las flechitas.", width/2, height/2 + 20);
    text("Click o tecla para comenzar", width/2, height/2 + 70);
  }

  mostrarPantallaVictoria() {
    image(imgTierra, 0, 0, width, height);
    fill(255, 255, 0);
    textAlign(CENTER, CENTER);
    textSize(40);
    textStyle(BOLD);
    text("¡LLEGASTE A LA TIERRA!", width/2, height/2 - 30);
    fill(255);
    textSize(24);
    text("Puntaje final: " + this.puntaje + "/20", width/2, height/2 + 10);
    textSize(18);
    text("Click o tecla para jugar de nuevo", width/2, height/2 + 60);
  }

  mostrarPantallaChoque() {
    image(imgChoque, 0, 0, width, height);

    fill(255, 0, 0);
    textAlign(CENTER, CENTER);
    textSize(70);
    textStyle(BOLD);
    text("PERDISTE", width/2, height/2 - 80);

    fill(255);
    textSize(45);
    textStyle(BOLD);
    text("LA NAVE HA CHOCADO", width/2, height/2 - 10);

    fill(200);
    textSize(24);
    text("Click o cualquier tecla para volver a intentar", width/2, height/2 + 70);
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
    text("Vidas: " + this.vidas, 20, 40);
    text("Puntaje: " + this.puntaje + "/20", 20, 70);
  }

  generarMeteoritos() {
    this.tiempoGeneracion++;
    if (this.tiempoGeneracion > this.intervalo) {
      this.meteoritos.push(new Meteorito(this.imgMeteorito, width));
      this.tiempoGeneracion = 0;
    }
  }

 colision(ovni, met) {
  let margen = 78;

  let izqO = ovni.x - ovni.ancho / 2;
  let derO = ovni.x + ovni.ancho / 2;
  let arrO = ovni.y - ovni.alto / 2;
  let abaO = ovni.y + ovni.alto / 2;

  let izqM = met.x + margen;
  let derM = met.x + met.ancho - margen;

  let tocaArriba = izqO < derM && 
                   derO > izqM && 
                   abaO > 0 && 
                   arrO < met.alturaArriba - margen;

  let tocaAbajo = izqO < derM && 
                  derO > izqM && 
                  abaO > met.alturaArriba + met.espacio + margen;

  return tocaArriba || tocaAbajo;
}

  actualizarMeteoritos() {
    for (let i = this.meteoritos.length - 1; i >= 0; i--) {
      let m = this.meteoritos[i];
      m.mover();
      m.dibujar();

    if (!m.chocado && this.colision(this.ovni, m)) {

    derrumbe.play();   

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
