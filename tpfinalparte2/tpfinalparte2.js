// Paulina Tassara y Francisco Torres
// Comisión 1
// EL VIAJE DEL MARCIANO - con pantalla de choque épica

let estado = 0; 
let juego, imgFondo, imgOvni, imgMeteorito, imgTierra, imgChoque;

let sonido;
let derrumbe; 

function preload() {
  imgFondo     = loadImage('data/fondo.png');
  imgOvni      = loadImage('data/ovni.png');
  imgMeteorito = loadImage('data/1meteorito.png');
  imgTierra    = loadImage('data/tierra.png');
  imgChoque    = loadImage('data/choque.png');  
  
sonido= loadSound("data/galaxia.mp3");
derrumbe=loadSound("data/chocar.mp3");
}

function setup() {
  createCanvas(640, 480);
  let fondo = new Fondo(imgFondo);
  let ovni  = new Ovni(imgOvni);
  juego = new Juego(fondo, ovni, imgMeteorito);
  
  
  sonido.loop();
  sonido.amp(0.3);
  
}

function draw() {
  if (estado === 0) {
    juego.mostrarPantallaInicio();
  } else if (estado === 1) {
    juego.actualizar();
  } else if (estado === 2) {
    juego.mostrarPantallaVictoria();
} else if (estado === 3) {
  juego.mostrarPantallaChoque();   
}
}


function mousePressed() {
  if (estado === 0) {
    if (!sonido.isPlaying()) {
      sonido.loop();
      sonido.amp(0.3);
    }
    estado = 1;
  } else if (estado === 2 || estado === 3) {
    juego.reiniciar();
    estado = 0;
  }
}

function keyPressed() {
  if (estado === 0) {
    if (!sonido.isPlaying()) {
      sonido.loop();
      sonido.amp(0.3);
    }
    estado = 1;
  } else if (estado === 2 || estado === 3) {
    juego.reiniciar();
    estado = 0;
  }
}
