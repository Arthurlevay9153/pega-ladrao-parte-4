// paredes invisiveis/fundo do jogo

var parede1; //parede que fica no canto esquerdo do mapa

var parede2; //parede que fica no canto direito do mapa

// paredes de cima/topo e de baixo do jogo

var parede3; //parede que fica no canto de cima do mapa

var parede4; //parede que fica no canto de baixo do mapa

//paredes da cela do jogo

var parede5; // parede da direita da cela

var parede6; // parede da esquerda da porta

var parede7; // parede da direita da porta

//--------------------------------------------------------------

var mesa1; //sao 3 mesas coladas uma na outra no canto superior esquerdo na parede de cima

var mesa2; // é a mesa que fica entre 4 cadeiras

var dispensa1; // sao 2 dispenas(uma aberta e fechada) no lado das camas

var dispensa2; // é a dispensa que tem varios livros dentro

var gaveta; // é a gaveta aberta da dispensa 1, que srve para o ldrao abrila

//-------------------------------------------------------------

// cenario/fundo do jogo
var cenario;

// personagem ladrao do jogo
var ladrao;

//---------------------------------------------------------------------------

//imagens do ladrao parado

var ladraoparado1; //imagem do ladrao parado olhando pra baixo

var ladraoparado2; //imagem do ladrao parado olhando pra cima

var ladraoparado3; //imagem do ladrao parado olhando pra esquerda

var ladraoparado4; //imagem do ladrao parado olhando pra direita

// animacoes do ladrao quando andar

var ladraoBaixo; //animacao do ladrao andando pra baixo

var ladraoCima; //animacao do ladrao andando pra cima

var ladraoEsquerda; //animacao do ladrao andando pra esquerda/LEFT_ARROW

var ladraoDireita; //animacao do ladrao andando pra direita/RIGHT_ARROW

// animacoes do ladrao quando andar na diagonal

var ladraoNoroeste; //animacao do ladrao andando pra direcao noroeste

var ladraoNordeste; //animacao do ladrao andando pra direcao nordeste

var ladraoSuldoeste; //animacao do ladrao andando pra direcao suldoeste

var ladraoSuldeste; //animacao do ladrao andando pra direcao suldeste

// textos/imagens do jogo

var textBox; // esse texto é uma imagem(nao é um sprite) que aparece quando o jogador aproxima da dispensa1
//caso queira mais informacoes acesse a linha 303

var Interface; // interface do ladrao(onde fica a vida, intens e etc)

// verificacoes se ol drao pegou ou fez algo

var ladraotemfaca = false; //verificar se o ladrao tem a faca

//------------------------------------------------------------
//--------------------------------------------------------------

function preload() {
  // carregar a imagem do ladrao parado
  ladraoparado1 = loadImage("assets/ladrao_baixo.png");

  ladraoparado2 = loadImage("assets/ladrao_cima.png");

  ladraoparado3 = loadImage("assets/ladrao_esquerda.png");

  ladraoparado4 = loadImage("assets/ladrao_direita.png");

  //carregar as animacoes do ladrao andando

  ladraoBaixo = loadAnimation("assets/ladrao_baixo.gif");

  ladraoCima = loadAnimation("assets/ladrao_cima.gif");

  ladraoEsquerda = loadAnimation("assets/ladrao_esquerda.gif");

  ladraoDireita = loadAnimation("assets/ladrao_direita.gif");

  ladraoNoroeste = loadAnimation("assets/ladrao_noroeste.gif");

  ladraoNordeste = loadAnimation("assets/ladrao_nordeste.gif");

  ladraoSuldoeste = loadAnimation("assets/ladrao_suldoeste.gif");

  ladraoSuldeste = loadAnimation("assets/ladrao_suldeste.gif");

  //carregar a imagem do cenario
  cenario = loadImage("assets/cenario_prisao.png");
}

//-----------------------------------------------------------

function setup() {
  //criar o tamanho do jogo(tamnho do comprimento e largura)
  createCanvas(1000, 700);

  //criar os sprites das parede1 e parede2/ paredes invisiveis/ canto do jogo

  parede1 = createSprite(155, 350, 10, 700);
  parede1.shapeColor = "yellow"; //mudar a cor do sprite para certa cor
  parede1.visible = false; // fazer com que o sprite fique invisvel ser for false, se for visivel entao é true

  parede2 = createSprite(845, 350, 10, 700);
  parede2.shapeColor = "yellow";
  parede2.visible = false;

  //criar os sprites das parede3 e parede4/ paredes de cima e baixo do jogo

  parede3 = createSprite(500, 0, 800, 20);
  parede3.shapeColor = "yellow"; //mudar a cor do sprite para certa cor
  parede3.visible = false; // fazer com que o sprite fique invisvel ser for false, se for visivel entao é true

  parede4 = createSprite(500, 610, 700, 10);
  parede4.shapeColor = "yellow";
  parede4.visible = false;

  //criar os sprites das parede3 e parede4/ paredes de cima e baixo do jogo

  parede5 = createSprite(613, 500, 10, 200);
  parede5.shapeColor = "yellow"; //mudar a cor do sprite para certa cor
  parede5.visible = false; // fazer com que o sprite fique invisvel ser for false, se for visivel entao é true

  parede6 = createSprite(648, 390, 80, 35);
  parede6.shapeColor = "yellow";
  parede6.visible = false;

  parede7 = createSprite(810, 390, 70, 35);
  parede7.shapeColor = "yellow";
  parede7.visible = false;

  //criar os sprites das mesas 1 e 2

  mesa1 = createSprite(345, 80, 220, 30);
  mesa1.shapeColor = "yellow"; //mudar a cor do sprite para certa cor
  mesa1.visible = false; // fazer com que o sprite fique invisvel ser for false, se for visivel entao é true

  mesa2 = createSprite(265, 335, 40, 40);
  mesa2.shapeColor = "yellow";
  mesa2.visible = false;

  //criar os sprites das dispensas 1 e 2

  dispensa1 = createSprite(575, 130, 60, 130);
  dispensa1.shapeColor = "yellow"; //mudar a cor do sprite para certa cor
  dispensa1.visible = false; // fazer com que o sprite fique invisvel ser for false, se for visivel entao é true

  dispensa2 = createSprite(735, 80, 60, 80);
  dispensa2.shapeColor = "yellow";
  dispensa2.visible = false;

  dispensa3 = createSprite(575, 200, 20, 10);
  dispensa3.shapeColor = "blue";
  dispensa3.visible = false;

  //criar interface/ imagem da interface do ladrao

  Interface = createImg("assets/interface_ladrao.png");

  Interface.size(180, 330); //size = tamanho do texto/imagem

  Interface.position(395, 100); //position = posicao do texto/imagem

  // criar a caixa de texto para acessar a faca

  textBox = createButton("");

  textBox.class("hide");

  textBox.position(600, 500); //position = posicao do texto/imagem

  //criar o sprite ladrao (posicao X, posicao Y, tamanho, tamnho)
  // o tamanho nao importa muito pois a imagem do ladrao ja diz qual é o tamanho
  ladrao = createSprite(500, 100, 1, 1);

  //mudar a retbox e ver a retbox do ladrao
  ladrao.debug = false; //aqui é a onde ver a retbox

  ladrao.setCollider("rectangle", 0, 0, 180, 180); //aqui edita a retbox

  //adicionar a imagem do ladrao parado para o sprite ladrao
  ladrao.addImage("ladraoparado1", ladraoparado1);

  ladrao.addImage("ladraoparado2", ladraoparado2);

  ladrao.addImage("ladraoparado3", ladraoparado3);

  ladrao.addImage("ladraoparado4", ladraoparado4);

  //adicionar a animacao do ladrao andando pra baixo para o sprite ladrao
  ladrao.addAnimation("ladraoBaixo", ladraoBaixo);

  ladrao.addAnimation("ladraoCima", ladraoCima);

  ladrao.addAnimation("ladraoEsquerda", ladraoEsquerda);

  ladrao.addAnimation("ladraoDireita", ladraoDireita);

  ladrao.addAnimation("ladraoNoroeste", ladraoNoroeste);

  ladrao.addAnimation("ladraoNordeste", ladraoNordeste);

  ladrao.addAnimation("ladraoSuldoeste", ladraoSuldoeste);

  ladrao.addAnimation("ladraoSuldeste", ladraoSuldeste);

  //mudar o tamanho da imagem do ladrao
  ladrao.scale = 0.4;
}

//------------------------------------------------------------------

function draw() {
  //mudar a cor de fundo do jogo
  background("black"); //#3b736b = cor meio cinza com azul e verde

  //fazer com que a imagem do cenario fique no centro do jogo
  imageMode(CENTER);

  //imagem do cenario nas posicoes apresentadas abixo
  image(cenario, 500, 350, 700, 700);

  //fazer com que o ladrao ande para "cima/up", "baixo/down", "direita/right", "esquerda/left"
  if (keyDown("DOWN_ARROW")) {
    ladrao.y = ladrao.y + 5;

    ladrao.changeAnimation("ladraoBaixo");
  }
  if (keyDown("UP_ARROW")) {
    ladrao.y = ladrao.y - 5;

    ladrao.changeAnimation("ladraoCima");
  }
  if (keyDown("LEFT_ARROW")) {
    ladrao.x = ladrao.x - 5;

    ladrao.changeAnimation("ladraoEsquerda");
  }
  if (keyDown("RIGHT_ARROW")) {
    ladrao.x = ladrao.x + 5;

    ladrao.changeAnimation("ladraoDireita");
  }

  // fazer com que o ladrao ande pra diagonal
  if (keyDown("UP_ARROW") && keyDown("LEFT_ARROW")) {
    //diagonal NOROESTE
    ladrao.x = ladrao.x - 0.1;
    ladrao.y = ladrao.y - 0.1;

    ladrao.changeAnimation("ladraoNoroeste");
  }
  if (keyDown("UP_ARROW") && keyDown("RIGHT_ARROW")) {
    //diagonal NORDESTE
    ladrao.x = ladrao.x + 0.1;
    ladrao.y = ladrao.y - 0.1;

    ladrao.changeAnimation("ladraoNordeste");
  }
  if (keyDown("DOWN_ARROW") && keyDown("LEFT_ARROW")) {
    //diagonal SULDOESTE
    ladrao.x = ladrao.x - 0.1;
    ladrao.y = ladrao.y + 0.1;

    ladrao.changeAnimation("ladraoSuldoeste");
  }
  if (keyDown("DOWN_ARROW") && keyDown("RIGHT_ARROW")) {
    //diagonal SULDESTE
    ladrao.x = ladrao.x + 0.1;
    ladrao.y = ladrao.y + 0.1;

    ladrao.changeAnimation("ladraoSuldeste");
  }

  //

  //fazer com que o ladrao bate nas paredes invisiveis/fundo do jogo
  ladrao.bounceOff(parede1);
  ladrao.bounceOff(parede2);

  //fazer com que o ladrao bate nas paredes de cima/topo e baixo do jogo

  ladrao.bounceOff(parede3);
  ladrao.bounceOff(parede4);

  //fazer com que o ladrao bate nas paredes da cela do jogo

  ladrao.bounceOff(parede5);
  ladrao.bounceOff(parede6);
  ladrao.bounceOff(parede7);

  //fazer com que o ladrao bate nas mesa 1 e 2 do jogo

  ladrao.bounceOff(mesa1);
  ladrao.bounceOff(mesa2);

  //fazer com que o ladrao bate nas dispensa 1 e 2

  ladrao.bounceOff(dispensa1);
  ladrao.bounceOff(dispensa2);

  //fazer com que o ldrao caso ele toque na dispensa1 e aperte a tecla especifica(SPACE/espaco)
  //ira aparecer uma imagem/texto na tela
  if (ladrao.collide(dispensa3)) {
    if (keyDown("SPACE") && !ladraotemfaca) {
      //se o ldrao apertar a tecla "e" e se nao tiver a faca ira acontecer isso
      textBox.class("textBox");

      if (keyDown("z")) {
        criarfaca();

        textBox.hide();

        ladraotemfaca = true;
      }
      if (keyDown("q")) {
        console.log("nao pegou a faca");

        textBox.hide();

        ladraotemfaca = false;
      }
    }
  }
  //desenhar os sprites no jogo
  drawSprites();

  // ver as posicoes X e Y do jogo
  // se quiser pode deixar desligado colocando //
  fill("red");
  textSize(30);
  text(mouseX + "," + mouseY, mouseX, mouseY);
}

//funcao para que toda vez que o ladrao ficar parado ele vai fazer certa animacao
// isso é uma funcao fora de qualquer outra funcao(function draw, function setup e etc.)
function keyReleased() {
  if (keyCode === DOWN_ARROW) {
    ladrao.changeAnimation("ladraoparado1"); //se o ldrao para de andar pra baixo/DOWN ele vai mudar sua animacao
  }

  if (keyCode === UP_ARROW) {
    ladrao.changeAnimation("ladraoparado2");
  }

  if (keyCode === LEFT_ARROW) {
    ladrao.changeAnimation("ladraoparado3");
  }

  if (keyCode === RIGHT_ARROW) {
    ladrao.changeAnimation("ladraoparado4");
  }

  //a mesma coisa só que pra as diagonais(continua a funcao Keyreleased acima)
  if (keyCode === RIGHT_ARROW && keyCode === UP_ARROW) {
    ladrao.changeAnimation("ladraoparado4");
  }

  if (keyCode === RIGHT_ARROW && keyCode === DOWN_ARROW) {
    ladrao.changeAnimation("ladraoparado4");
  }

  if (keyCode === LEFT_ARROW && keyCode === UP_ARROW) {
    ladrao.changeAnimation("ladraoparado3");
  }

  if (keyCode === LEFT_ARROW && keyCode === DOWN_ARROW) {
    ladrao.changeAnimation("ladraoparado3");
  }
}

function criarfaca() {
  var faca = createImg("assets/faca.png");

  faca.position(70, 190);

  faca.size(10, 10);
}
