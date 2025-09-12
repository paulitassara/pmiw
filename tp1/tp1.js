//Paulina Tassara 
//comision 1
// tp1



let optico;

let filas = 12;
let columnas = 12;

//interactividad 
let moviendo = false;
let tiempo = 0;

function preload(){
  optico = loadImage('data/optico.jpg');
}

function setup() {
  
createCanvas (800,400);
rectMode(CORNER); 

}


function draw() {
background(255);
let mitadAncho = width/2;
let altoFila= height/ filas;


image(optico,0,0,mitadAncho,height);


if (moviendo){
tiempo +=0.04;
}else{
  tiempo = 0;
}
push();
translate(mitadAncho,0);
dibujarGrilla(mitadAncho/2,filas,columnas,altoFila,true);
translate(mitadAncho/2,0);
dibujarGrilla(mitadAncho/2,filas,columnas-1,altoFila,false);
pop();
}

function dibujarGrilla(ancho, filas, columnas, altoFila, invertido){
  for (let f = 0;f<filas;f++){
    let x = 0;
    let desplazamientoFila=0;
    if (moviendo){
      desplazamientoFila=(f+1)*tiempo*20;
      if(desplazamientoFila>ancho)desplazamientoFila=0;
    }
    for (let c = 0;c<columnas;c++){
      let tam;
      if (invertido){
        tam = map(c,0,columnas-1,altoFila*1.2,2);
      }else{
        tam=map(c,0,columnas-1,2,altoFila*1.2);
      }
      let promedioTam= (altoFila*1.2+2)/2;
      let factor= ancho/(promedioTam * columnas);
      tam=tam*factor;
      noStroke();
      if ((c+ f)%2==0){
        if (moviendo) fill(255,204,0);
        else fill(0);
      }else{
        fill(255);
      }
      rect(x+desplazamientoFila, f*altoFila, tam,altoFila);
      x+=tam;
    }
  }
}
function mousePressed(){
  moviendo=!moviendo;

}
