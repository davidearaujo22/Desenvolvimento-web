function atualizarResultado(resultado) {
  var mensagemResultado = document.querySelector('.mensagem-resultado');
  mensagemResultado.textContent = resultado;
}
var textoArray = [];
var textoArray02 = [];
const substituicoes = {
  "a": "ai",
  "e": "enter",
  "i": "imes",
  "o": "ober",
  "u": "ufat"
};
const substituicoes02 = {
  "ai": "a",
  "enter": "e",
  "imes": "i",
  "ober": "o",
  "ufat": "u"
}
function criptografarLetras(letra){
  return substituicoes[letra] || letra;
}
var pegarTexto = document.querySelector('.caixa-texto'); // pegar texto do html
var botaoCriptografar = document.querySelector(".botao-criptografar"); //botão de criptografra
botaoCriptografar.addEventListener("click", function(){
  var texto = pegarTexto.value;
  textoArray = [];
  for (var i = 0; i < texto.length; i++) {
    textoArray.push(criptografarLetras(texto[i]));
  }
  var resultadoCriptografado = textoArray.join('');
  atualizarResultado(resultadoCriptografado);
  console.log("Letras criptografadas no array:", textoArray);
});

var botaoDescriptografar = document.querySelector(".botao-descriptografar");
botaoDescriptografar.addEventListener("click", function(){
  var textoParaDescriptografa = document.querySelector('.mensagem-resultado').textContent;
  for (var chave in substituicoes02) {
    if (substituicoes02.hasOwnProperty(chave)) {
      textoParaDescriptografa = textoParaDescriptografa.replace(new RegExp(chave, 'g'), substituicoes02[chave]);
    }
  }
  atualizarResultado(textoParaDescriptografa); });

  var botaoCopiar = document.querySelector(".botao-copiar");
  botaoCopiar.addEventListener("click", function(){
    var textoParaCopiar = document.querySelector('.mensagem-resultado').textContent;
    navigator.clipboard.writeText(textoParaCopiar);
    alert("texto copiado!")
  });
