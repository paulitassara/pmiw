// Paulina Tassara y Francisco Torres 
// Comision 1
// Tp1Final
// Video:   https://youtu.be/0YTL3ulcwJ4
// Canva:   https://www.canva.com/design/DAGz1op0vts/5G-8s12gn3MhT8oSnJ3Qhw/edit


let imagen = [];
let estado = 0;
let posXBoton, posYBoton, posXBoton2, posYBoton2, posXBoton3, posYBoton3, tamBoton;
let sonido;

let textos = [
  '',
  'Tomás Gómez conduce su camioneta por una carretera antigua. Se detiene en una solitaria estación de gasolina. El viejo que atiende lo saluda: “Aquí se sentirá usted bastante solo.”',
  'El viejo observa Marte como si viera un espectáculo nuevo: el clima, las flores, la lluvia, todo es distinto. Le dice a Tomás que vino para retirarse, para vivir en algo tan diferente que lo sorprenda siempre.',
  'El cristal brilla débil en su mano. El cielo marciano cambia de colores irreales, como si escondiera otra verdad.',
  'El motor retumba. La carretera parece quebrarse con cada kilómetro. Tomás siente que maneja sobre un mundo partido.',
  'De pronto, un zumbido. Una máquina desciende suavemente, posándose en la carretera como un insecto de jade.',
  'El marciano extiende la mano hacia Tomás. La noche marciana es fría y expectante.',
  'El aire vibra. Pequeñas sondas salen de la nave y recorren el suelo como si buscaran grietas.',
  'La noche se detiene por un segundo. Todo queda en silencio, esperando el siguiente movimiento.',
  'De la máquina baja un marciano de ojos de oro fundido. Sus pupilas se iluminan al ver el cristal.',
  'Pantalla 9: ambos mundos se funden por un instante. Lo real y lo irreal conviven bajo las estrellas.',
  'Pantalla 10: el silencio vuelve. Tomás y el marciano siguen su camino, sabiendo que algo cambió para siempre.'
];

function preload() {
  for (let i = 0; i <= 20; i++) {
    imagen[i] = loadImage("data/" + i + ".png");
  }
  sonido = loadSound("data/universo.mp3");
}

function setup() {
  createCanvas(640, 480);
  tamBoton = 50;

  posYBoton = height - height / 3;
  posYBoton2 = posYBoton;
  posYBoton3 = posYBoton;

  posXBoton = width / 6;
  posXBoton2 = width - width / 3;
  posXBoton3 = width / 2 - tamBoton;

  textSize(18);

  
  sonido.loop();
  sonido.amp(0.3);
}

function draw() {
  background(0);

  if (estado === 0) {
    historia(imagen[0], '', 0, 0, posXBoton, posYBoton, tamBoton * 2, tamBoton, 'Comenzar');
  } 
  else if (estado === 1) {
    historia(imagen[1], textos[1], 50, 5, posXBoton, posYBoton, tamBoton * 2, tamBoton, 'Siguiente');
  } 
  else if (estado === 2) {
    historiaConTresBotones(
      imagen[2], textos[2], 50, 5,
      posXBoton, posYBoton,
      posXBoton3, posYBoton3,
      posXBoton2, posYBoton2,
      tamBoton * 2, tamBoton,
      '\nTomás arranca \nla camioneta',
      ' \nle entrega \nun cristal',
      'Tomás calla en silencio'
    );
  } 
  else if (estado === 3) {
    historia(imagen[3], textos[3], 50, 5, posXBoton, posYBoton, tamBoton * 2, tamBoton, 'Continuar');
  } 
  else if (estado === 4) {
    historia(imagen[4], textos[4], 50, 5, posXBoton, posYBoton, tamBoton * 2, tamBoton, 'Continuar');
  } 
  else if (estado === 5) {
    historia(imagen[5], textos[5], 50, 5, posXBoton, posYBoton, tamBoton * 2, tamBoton, 'Siguiente');
  } 
  else if (estado === 6) {
    historiaConTresBotones(
      imagen[6], textos[6], 50, 5,
      posXBoton, posYBoton,
      posXBoton3, posYBoton3,
      posXBoton2, posYBoton2,
      tamBoton * 2, tamBoton,
      'Mirar al cielo',
      '\nAcercarse a \n la máquina',
      '\nAlejarse \nen silencio'
    );
  } 
  else if (estado === 7) {
    historia(imagen[7], textos[7], 50, 5, posXBoton, posYBoton, tamBoton * 2, tamBoton, 'Fin');
  } 
  else if (estado === 8) {
    historia(imagen[8], textos[8], 50, 5, posXBoton, posYBoton, tamBoton * 2, tamBoton, 'Continuar');
  }
  else if (estado === 9) {
    historia(imagen[9], textos[9], 50, 5, posXBoton, posYBoton, tamBoton * 2, tamBoton, 'Siguiente');
  }
  else if (estado === 10) {
    historiaConTresBotones(
      imagen[10], textos[9], 50, 5,
      posXBoton, posYBoton,
      posXBoton3, posYBoton3,
      posXBoton2, posYBoton2,
      tamBoton * 2, tamBoton,
      '\n El cristal \n se proyecta ',
      '\nUna grieta\n se abre',
      '\nSiluetas aparecen \nobservándolos'
    );
  }
  else if (estado === 11 || estado === 12 || estado === 13) {
    historiaConTresBotones(
      imagen[14],
      'Tomás: “Todo está muerto, en ruinas.”\nMarciano: “¡No, hay fiesta, música, vida!”',
      50, 5,
      posXBoton, posYBoton,
      posXBoton3, posYBoton3,
      posXBoton2, posYBoton2,
      tamBoton * 2, tamBoton,
      '\nEl suelo \nse abre',
      '\n alza el \ncristal',
      '\nTomás no \nresponde'
    );
  }
  else if (estado === 15) {
    historiaConTresBotones(
      imagen[15],
      'La noche los envuelve. El silencio ya no es vacío: es compañía.',
      50, 5,
      posXBoton, posYBoton,
      posXBoton3, posYBoton3,
      posXBoton2, posYBoton2,
      tamBoton * 2, tamBoton,
         '\n Tomás  arranca \n la camioneta  .',
      '\n El viejo le entrega \n un cristal extraño',
      'Tomás calla. \n El viejo lo mira fijo,\n con una sonrisa .'
    );
  }
  else if (estado === 17) {
    historia(imagen[17], '', 50, 5, posXBoton, posYBoton, tamBoton * 2, tamBoton, 'Volver al inicio');
  }
  else if (estado === 18) {
    historia(imagen[18], 'El cristal brilla un instante antes de apagarse. Ambos comprenden que lo real y lo irreal pueden convivir.', 50, 5, posXBoton, posYBoton, tamBoton * 2, tamBoton, 'Siguiente');
  }
  else if (estado === 19) {
    historia(imagen[19], 'La carretera vuelve a quedarse vacía. La noche se cierra con silencio y estrellas. Tomás piensa en lo que vio; el marciano también, en su mundo, en sus memorias.', 50, 5, posXBoton, posYBoton, tamBoton * 2, tamBoton, 'Siguiente');
  }
  else if (estado === 20) {
    historia(imagen[20], '', 50, 5, posXBoton, posYBoton, tamBoton * 2, tamBoton, 'Reiniciar');
  }
}

function mousePressed() {
  if (estado === 0 && arribaMouse(posXBoton, posYBoton, tamBoton * 2, tamBoton)) estado = 1;
  else if (estado === 1 && arribaMouse(posXBoton, posYBoton, tamBoton * 2, tamBoton)) estado = 2;
  else if (estado === 2) {
    if (arribaMouse(posXBoton, posYBoton, tamBoton * 2, tamBoton)) estado = 5;
    if (arribaMouse(posXBoton3, posYBoton3, tamBoton * 2, tamBoton)) estado = 4;
    if (arribaMouse(posXBoton2, posYBoton2, tamBoton * 2, tamBoton)) estado = 3;
  }
  else if (estado === 3 && arribaMouse(posXBoton, posYBoton, tamBoton * 2, tamBoton)) estado = 4;
  else if (estado === 4 && arribaMouse(posXBoton, posYBoton, tamBoton * 2, tamBoton)) estado = 6;
  else if (estado === 5 && arribaMouse(posXBoton, posYBoton, tamBoton * 2, tamBoton)) estado = 6;
  else if (estado === 6) {
    if (arribaMouse(posXBoton, posYBoton, tamBoton * 2, tamBoton)) estado = 10;
    if (arribaMouse(posXBoton3, posYBoton3, tamBoton * 2, tamBoton)) estado = 10;
    if (arribaMouse(posXBoton2, posYBoton2, tamBoton * 2, tamBoton)) estado = 10;
  }
  else if (estado === 10) {
    if (arribaMouse(posXBoton, posYBoton, tamBoton * 2, tamBoton)) estado = 11;
    if (arribaMouse(posXBoton3, posYBoton3, tamBoton * 2, tamBoton)) estado = 12;
    if (arribaMouse(posXBoton2, posYBoton2, tamBoton * 2, tamBoton)) estado = 13;
  }
  else if (estado === 11 || estado === 12 || estado === 13) {
    if (arribaMouse(posXBoton, posYBoton, tamBoton * 2, tamBoton)) estado = 18;
    if (arribaMouse(posXBoton3, posYBoton3, tamBoton * 2, tamBoton)) estado = 19;
    if (arribaMouse(posXBoton2, posYBoton2, tamBoton * 2, tamBoton)) estado = 15;
  }
  else if (estado === 15) {
    if (arribaMouse(posXBoton, posYBoton, tamBoton * 2, tamBoton)) estado = 18;
    if (arribaMouse(posXBoton3, posYBoton3, tamBoton * 2, tamBoton)) estado = 19;
    if (arribaMouse(posXBoton2, posYBoton2, tamBoton * 2, tamBoton)) estado = 20;
  }
  else if (estado === 18 || estado === 19 || estado === 20) {
    if (arribaMouse(posXBoton, posYBoton, tamBoton * 2, tamBoton)) estado = 17;
  }
  else if (estado === 17 && arribaMouse(posXBoton, posYBoton, tamBoton * 2, tamBoton)) {
    sonido.stop();
    sonido.play();
    estado = 0;
  }
}



function boton(posX, posY, tamX, tamY, textoB) {
  if (arribaMouse(posX, posY, tamX, tamY)) fill(255, 0, 255);
  else fill(200, 120, 0, 100);
  noStroke();
  rect(posX, posY, tamX, tamY, tamY / 4);
  fill(100, 255, 0);
  textAlign(CENTER, CENTER);
  text(textoB, posX + tamX / 2, posY + tamY + 10);
}

function arribaMouse(posX, posY, tamX, tamY) {
  return mouseX > posX && mouseX < posX + tamX && mouseY > posY && mouseY < posY + tamY;
}

function historia(imagen, texto, posX, posY, posXB, posYB, tamXB, tamYB, textoB) {
  image(imagen, 0, 0, width, height);
  if (texto) {
    fill(0, 0, 0, 150);
    rect(0, 0, width, 100);
    fill(255);
    textAlign(LEFT, TOP);
    text(texto, posX, posY, 600, 100);
  }
  boton(posXB, posYB, tamXB, tamYB, textoB);
}

function historiaConTresBotones(imagen, texto, posX, posY,
  posXB1, posYB1, posXB2, posYB2, posXB3, posYB3,
  tamXB, tamYB, textoB1, textoB2, textoB3) {
  image(imagen, 0, 0, width, height);
  if (texto) {
    fill(0, 0, 0, 150);
    rect(0, 0, width, 100);
    fill(255);
    textAlign(LEFT, TOP);
    text(texto, posX, posY, 600, 100);
  }
  boton(posXB1, posYB1, tamXB, tamYB, textoB1);
  boton(posXB2, posYB2, tamXB, tamYB, textoB2);
  boton(posXB3, posYB3, tamXB, tamYB, textoB3);
}
