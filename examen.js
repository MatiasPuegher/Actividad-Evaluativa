//posicion
let Bx=200;
let By=40;
let Rx=560;
let Ry=300;

//Velocidad
let flagY=5;
let flagX=6;
let RflagY=-4;
let RflagX=-10;

//colores
let red= 0;
let green= 0;
let blue= 255;
let Red= 255;
let Green= 0;
let Blue= 0;

//choque
let dist = sqrt((Rx - Bx) * (Rx - Bx) + (Ry - By) * (Ry - By));

function setup() {
  createCanvas(600, 600);
}

function draw() {
  
  background(200,200,200); //fondo
  
  noStroke(); //elimina borde
  fill(red, green, blue); // rellena la esfera azul
  ellipse(Bx,By,40,40); // crea la esfera
  
  noStroke(); //elimina borde
  fill(Red, Green, Blue); // rellena la esfera roja
  ellipse(Rx,Ry,40,40); // crea la esfera
  
   
  
  
  //rebote azul
   if(Bx < 20 || Bx > 580){
    flagX = flagX * (-1); 
  }
  
  Bx = Bx + flagX;
  
  if(By < 20 || By > 580){
    flagY = flagY * (-1);
    
    if(By > 580){
       blue= random(70, 255);
    }  
  }
  
  By = By + flagY;
  
  //rebote rojo
   if(Rx < 20 || Rx > 580){
    RflagX = RflagX * (-1); 
  }
  
  Rx = Rx + RflagX;
  
  if(Ry < 20 || Ry > 580){
    RflagY = RflagY * (-1);
    
    if(Ry < 20){
      Red= random(70, 255);
    } 
  }
  
  Ry = Ry + RflagY;
}
