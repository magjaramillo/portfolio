var boton =  $(".button");
var corp = $("#cuerpo");
var pokeballUp = $("#pokeballUp");
var pokeballDown = $("#pokeballDown");
var buttonInner = $("#buttonInner");
var pokemones = $("#pokemones");
var rayo = $("#rayo");
var fuego = $("#fuego");
var hierba = $("#hierba");
var agua = $("#agua");
var animations = $("#animations");






var pokeFace = $("#pokeFace");
var pokeOjoIzq = $("#pokeOjoIzq");
var pokeOjoDer = $("#pokeOjoDer");
var pokeOrejaIzq = $("#pokeOrejaIzq");
var pokeOrejaDer = $("#pokeOrejaDer");
var pokeFaceBase = $("#pokeFaceBase");
var pokeLengua = $("#pokeLengua");
var pokeMejillaIzq = $("#pokeMejillaIzq");
var pokeMejillaDer = $("#pokeMejillaDer");
var pokeBoca = $("#pokeBoca");
var pokeNariz = $("#pokeNariz");
var pokeCejas = $("#pokeCejas");
var pokeManchas = $("#pokeManchas");



/****************************************************/
function esconder (){
      pokeballUp.toggleClass("pokeball-up-move");
      pokeballDown.toggleClass("pokeball-down-move");
      boton.toggleClass("button-move");
      buttonInner.toggleClass("button-inner-press");
      pokemones.toggleClass("pokemonesNone");
      animations.toggleClass("moverc");
      rayo.toggleClass("opacityc mostrar");
      agua.toggleClass("opacityc mostrar");
      fuego.toggleClass("opacityc mostrar");
      hierba.toggleClass("opacityc mostrar");

}
/***************************************************/




function mag (){
  pokeFace.addClass("magFace");
  pokeOrejaIzq.addClass("magOrejaIzq");
  pokeOrejaDer.addClass("magOrejaDer");
  pokeFaceBase.addClass("magFaceBase");
  /*pokeFaceBase.append("<a href='http://portafolio.magjaramillo.com'> portafolio.magjaramillo.com </a>");*/

  /*$(".magFaceBase").attr("href", "http://portafolio.magjaramillo.com");*/

}
function magOff (){
  pokeFace.removeClass("magFace");
  pokeFace.html("");
  pokeOrejaIzq.removeClass("magOrejaIzq");
  pokeOrejaDer.removeClass("magOrejaDer");
  pokeFaceBase.removeClass("magFaceBase");

}


function pikachu (){
  pokeFace.addClass("pikaFace");
  pokeOrejaIzq.addClass("pikaOrejaIzq");
  pokeOrejaDer.addClass("pikaOrejaDer");
  pokeFaceBase.addClass("pikaFaceBase");
  pokeOjoIzq.addClass("pikaOjoIzq");
  pokeOjoDer.addClass("pikaOjoDer");
  pokeLengua.addClass("pikaLengua");
  pokeMejillaIzq.addClass("pikaMejillaIzq");
  pokeMejillaDer.addClass("pikaMejillaDer");
  pokeBoca.addClass("pikaBoca");
  pokeNariz.addClass("pikaNariz");
  pokeCejas.addClass("pikaCejas");
  pokeManchas.addClass("pikaManchas");
}
function pikachuOff (){
  pokeFace.removeClass("pikaFace");
  pokeOrejaIzq.removeClass("pikaOrejaIzq");
  pokeOrejaDer.removeClass("pikaOrejaDer");
  pokeFaceBase.removeClass("pikaFaceBase");
  pokeOjoIzq.removeClass("pikaOjoIzq");
  pokeOjoDer.removeClass("pikaOjoDer");
  pokeLengua.removeClass("pikaLengua");
  pokeMejillaIzq.removeClass("pikaMejillaIzq");
  pokeMejillaDer.removeClass("pikaMejillaDer");
  pokeBoca.removeClass("pikaBoca");
  pokeNariz.removeClass("pikaNariz");
  pokeCejas.removeClass("pikaCejas");
  pokeManchas.removeClass("pikaManchas");
}
function bulbasor (){
  pokeFace.addClass("bulFace");
  pokeOrejaIzq.addClass("bulOrejaIzq");
  pokeOrejaDer.addClass("bulOrejaDer");
  pokeFaceBase.addClass("bulFaceBase");
  pokeOjoIzq.addClass("bulOjoIzq");
  pokeOjoDer.addClass("bulOjoDer");
  pokeLengua.addClass("bulLengua");
  pokeMejillaIzq.addClass("bulMejillaIzq");
  pokeMejillaDer.addClass("bulMejillaDer");
  pokeBoca.addClass("bulBoca");
  pokeNariz.addClass("bulNariz");
  pokeCejas.addClass("bulCejas");
  pokeManchas.addClass("bulManchas");
}
function bulbasorOff (){
  pokeFace.removeClass("bulFace");
  pokeOrejaIzq.removeClass("bulOrejaIzq");
  pokeOrejaDer.removeClass("bulOrejaDer");
  pokeFaceBase.removeClass("bulFaceBase");
  pokeOjoIzq.removeClass("bulOjoIzq");
  pokeOjoDer.removeClass("bulOjoDer");
  pokeLengua.removeClass("bulLengua");
  pokeMejillaIzq.removeClass("bulMejillaIzq");
  pokeMejillaDer.removeClass("bulMejillaDer");
  pokeBoca.removeClass("bulBoca");
  pokeNariz.removeClass("bulNariz");
  pokeCejas.removeClass("bulCejas");
  pokeManchas.removeClass("bulManchas");
}
function squirtle (){
  pokeFace.addClass("squiFace");
  pokeOrejaIzq.addClass("squiOrejaIzq");
  pokeOrejaDer.addClass("squiOrejaDer");
  // pokeFaceBase.addClass("squiFaceBase");
  pokeOjoIzq.addClass("squiOjoIzq");
  pokeOjoDer.addClass("squiOjoDer");
  pokeLengua.addClass("squiLengua");
  pokeMejillaIzq.addClass("squiMejillaIzq");
  pokeMejillaDer.addClass("squiMejillaDer");
  pokeBoca.addClass("squiBoca");
  pokeNariz.addClass("squiNariz");
  pokeCejas.addClass("squiCejas");
  pokeManchas.addClass("squiManchas");
}
function squirtleOff (){
  pokeFace.removeClass("squiFace");
  pokeOrejaIzq.removeClass("squiOrejaIzq");
  pokeOrejaDer.removeClass("squiOrejaDer");
  // pokeFaceBase.removeClass("squiFaceBase");
  pokeOjoIzq.removeClass("squiOjoIzq");
  pokeOjoDer.removeClass("squiOjoDer");
  pokeLengua.removeClass("squiLengua");
  pokeMejillaIzq.removeClass("squiMejillaIzq");
  pokeMejillaDer.removeClass("squiMejillaDer");
  pokeBoca.removeClass("squiBoca");
  pokeNariz.removeClass("squiNariz");
  pokeCejas.removeClass("squiCejas");
  pokeManchas.removeClass("squiManchas");
}
function charmander (){
  pokeFace.addClass("charFace");
  pokeOrejaIzq.addClass("charOrejaIzq");
  pokeOrejaDer.addClass("charOrejaDer");
  // pokeFaceBase.addClass("charFaceBase");
  pokeOjoIzq.addClass("charOjoIzq");
  pokeOjoDer.addClass("charOjoDer");
  pokeLengua.addClass("charLengua");
  pokeMejillaIzq.addClass("charMejillaIzq");
  pokeMejillaDer.addClass("charMejillaDer");
  pokeBoca.addClass("charBoca");
  pokeNariz.addClass("charNariz");
  pokeCejas.addClass("charCejas");
  pokeManchas.addClass("charManchas");
}
function charmanderOff (){
  pokeFace.removeClass("charFace");
  pokeOrejaIzq.removeClass("charOrejaIzq");
  pokeOrejaDer.removeClass("charOrejaDer");
  // pokeFaceBase.removeClass("charFaceBase");
  pokeOjoIzq.removeClass("charOjoIzq");
  pokeOjoDer.removeClass("charOjoDer");
  pokeLengua.removeClass("charLengua");
  pokeMejillaIzq.removeClass("charMejillaIzq");
  pokeMejillaDer.removeClass("charMejillaDer");
  pokeBoca.removeClass("charBoca");
  pokeNariz.removeClass("charNariz");
  pokeCejas.removeClass("charCejas");
  pokeManchas.removeClass("charManchas");
}


var poke0 = 0,
    poke1 = 1,
    poke2 = 2;
    poke3 = 3;
    poke4 = 4;

function pokechoise (){
  var pokemon = Math.floor((Math.random() * 5) );
    // $("#parrafo").html(pokemon);









  if (pokemon == poke0) {
    pikachu();
    bulbasorOff();
    squirtleOff();
    charmanderOff();
    magOff();
  }

  else if (pokemon == poke1) {
    bulbasor();
    pikachuOff();
    squirtleOff();
    charmanderOff();
    magOff();

  }

  else if (pokemon == poke2) {
    squirtle();
    pikachuOff();
    bulbasorOff();
    charmanderOff();
    magOff();

  }


  else if (pokemon == poke3) {
    charmander();
    pikachuOff();
    squirtleOff();
    bulbasorOff();
    magOff();
  }

  else if (pokemon == poke4) {
    mag();
    pikachuOff();
    squirtleOff();
    bulbasorOff();
    charmanderOff();
  }
}




function start (){

esconder();
pokechoise();

}

boton.click(start);








// function pikachu (){
//   pokeFace.addClass("pikaFace");
//   pokeOrejaIzq.addClass("pikaOrejaIzq");
//   pokeOrejaDer.addClass("pikaOrejaDer");
//   pokeFaceBase.addClass("pikaFaceBase");
//   pokeOjoIzq.addClass("pikaOjoIzq");
//   pokeOjoDer.addClass("pikaOjoDer");
//   pokeLengua.addClass("pikaLengua");
//   pokeMejillaIzq.addClass("pikaMejillaIzq");
//   pokeMejillaDer.addClass("pikaMejillaDer");
//   pokeBoca.addClass("pikaBoca");
//   pokeNariz.addClass("pikaNariz");
//   pokeCejas.addClass("pikaCejas");
//   pokeManchas.addClass("pikaManchas");
// }
// function bulbasor (){
//   pokeFace.addClass("bulFace");
//   pokeOrejaIzq.addClass("bulOrejaIzq");
//   pokeOrejaDer.addClass("bulOrejaDer");
//   pokeFaceBase.addClass("bulFaceBase");
//   pokeOjoIzq.addClass("bulOjoIzq");
//   pokeOjoDer.addClass("bulOjoDer");
//   pokeLengua.addClass("bulLengua");
//   pokeMejillaIzq.addClass("bulMejillaIzq");
//   pokeMejillaDer.addClass("bulMejillaDer");
//   pokeBoca.addClass("bulBoca");
//   pokeNariz.addClass("bulNariz");
//   pokeCejas.addClass("bulCejas");
//   pokeManchas.addClass("bulManchas");
// }
// function squirtle (){
//   pokeFace.addClass("squiFace");
//   pokeOrejaIzq.addClass("squiOrejaIzq");
//   pokeOrejaDer.addClass("squiOrejaDer");
//   pokeFaceBase.addClass("squiFaceBase");
//   pokeOjoIzq.addClass("squiOjoIzq");
//   pokeOjoDer.addClass("squiOjoDer");
//   pokeLengua.addClass("squiLengua");
//   pokeMejillaIzq.addClass("squiMejillaIzq");
//   pokeMejillaDer.addClass("squiMejillaDer");
//   pokeBoca.addClass("squiBoca");
//   pokeNariz.addClass("squiNariz");
//   pokeCejas.addClass("squiCejas");
//   pokeManchas.addClass("squiManchas");
// }
// function charmander (){
//   pokeFace.addClass("charFace");
//   pokeOrejaIzq.addClass("charOrejaIzq");
//   pokeOrejaDer.addClass("charOrejaDer");
//   pokeFaceBase.addClass("charFaceBase");
//   pokeOjoIzq.addClass("charOjoIzq");
//   pokeOjoDer.addClass("charOjoDer");
//   pokeLengua.addClass("charLengua");
//   pokeMejillaIzq.addClass("charMejillaIzq");
//   pokeMejillaDer.addClass("charMejillaDer");
//   pokeBoca.addClass("charBoca");
//   pokeNariz.addClass("charNariz");
//   pokeCejas.addClass("charCejas");
//   pokeManchas.addClass("charManchas");
// }
