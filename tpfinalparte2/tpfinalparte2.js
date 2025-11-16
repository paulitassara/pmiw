//Paulina Tassara y Francisco Torres 
//Comision 1
// https://youtu.be/RC6J9ijPxQ8 
// EL VIAJE DEL MARCIANO


let estado = 0; 

let juego, imgFondo, imgOvni, imgMeteorito, imgTierra;


function preload() {
  imgFondo = loadImage('data/fondo.png');
  imgOvni = loadImage('data/ovni.png');
  imgMeteorito = loadImage('data/1meteorito.png');
  imgTierra = loadImage('data/tierra.png');
}


function setup() {
  createCanvas(640, 480);

  let fondo = new Fondo(imgFondo);
  let ovni = new Ovni(imgOvni);

  juego = new Juego(fondo, ovni, imgMeteorito);
}


function draw() {

  if (estado === 0) {
    juego.mostrarPantallaInicio();
    return;
  }

  if (estado === 1) {
    juego.actualizar();
    return;
  }

  if (estado === 2) {
    juego.mostrarPantallaVictoria();
    return;
  }
}


function mousePressed() {

  if (estado === 0) {
    estado = 1;
    return;
  }

  if (estado === 2) {
    juego.reiniciar();
    estado = 0;
    return;
  }
}


function keyPressed() {
  if (estado === 0) estado = 1;
  else if (estado === 2) {
    juego.reiniciar();
    estado = 0;
  }
}
