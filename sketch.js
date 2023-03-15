//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 13;
let raio = diametro/2;

//variáveis da velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = -6;

//variáveias da raquete do player
let xRaquetePlayer = 5; 
let yRaquetePlayer = 150;
let larguraRaquetePlayer = 10;
let alturaRaquetePlayer = 90;

//variáveis velocidade da raquete do player
let velocidadeYRaquetePlayer = 7;

//variáveis da raquete do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let larguraRaqueteOponente = 10;
let alturaRaqueteOponente = 90;

//variáveis velocidade da raquete do Oponente
let velocidadeYRaqueteOponente = 4;

// variável de colisão
let colidiu = false;

//variável placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

//variável sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3")
  ponto = loadSound("ponto.mp3")
  raquetada = loadSound("raquetada.mp3")
}

function setup() {
  createCanvas(600, 400);
  trilha.loop()
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquetes();
  movimentaRaquetePlayer();
  //verificaColisao();
  movimentaRaqueteOponente();
  colisaoRaquetePlayerBiblioteca();
  colisaoRaqueteOponenteBiblioteca();
  incluirPlacar();
  marcaPonto();
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro)
} 
function movimentaBolinha() {
  xBolinha += velocidadeXBolinha
  yBolinha += velocidadeYBolinha
}
function verificaColisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1    
  }
  if (yBolinha + raio > height || yBolinha - raio <0) {
    velocidadeYBolinha *= -1
  }  
}
function mostraRaquetes() {
  rect(xRaquetePlayer, yRaquetePlayer, larguraRaquetePlayer, alturaRaquetePlayer)
  rect(xRaqueteOponente, yRaqueteOponente, larguraRaqueteOponente, alturaRaqueteOponente)
}
function movimentaRaquetePlayer () {
  if (keyIsDown(UP_ARROW)) {
    yRaquetePlayer -= velocidadeYRaquetePlayer
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquetePlayer += velocidadeYRaquetePlayer
  }
}
function verificaColisao() {
  if (xBolinha - raio < xRaquetePlayer + larguraRaquetePlayer && yBolinha - raio < yRaquetePlayer + alturaRaquetePlayer && yBolinha + raio > yRaquetePlayer){
    velocidadeXBolinha *= -1     
  }
}

function movimentaRaqueteOponente() {
  velocidadeYRaqueteOponente = yBolinha - yRaqueteOponente - alturaRaqueteOponente/2 - 30
  yRaqueteOponente += velocidadeYRaqueteOponente   
}

function colisaoRaquetePlayerBiblioteca(){
  colidiu = collideRectCircle(xRaquetePlayer, yRaquetePlayer, larguraRaquetePlayer, alturaRaquetePlayer, xBolinha, yBolinha, raio);
  if(colidiu){
    velocidadeXBolinha *= -1
    raquetada.play()
  }
}
function colisaoRaqueteOponenteBiblioteca(){
  colidiu = collideRectCircle(xRaqueteOponente, yRaqueteOponente, larguraRaqueteOponente, alturaRaqueteOponente, xBolinha, yBolinha, raio);
  if(colidiu){
    velocidadeXBolinha *= -1
    raquetada.play()
  }
}
function incluirPlacar(){  
  stroke(255)
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255, 140, 0))
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosOponente, 470, 26);
}
function marcaPonto(){
  if(xBolinha > 590){
    meusPontos += 1
    ponto.play()
  }
  if(xBolinha < 10){
    pontosOponente += 1
    ponto.play()
  }
}
















