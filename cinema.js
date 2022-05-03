var catalogo = require("./database/catalogo.json");
// console.log(catalogo);
var catalogoString = JSON.stringify(catalogo);
// console.log(catalogoString);
var catalogoObj = JSON.parse(catalogoString);
// console.log(catalogoObj);

function listarTodosOsFilmes(filmes) {
  for (let i = 0; i < filmes.length; i++) {
    console.log(filmes[i].titulo);
  }
}
listarTodosOsFilmes(catalogoObj.data);


function listarFilmesEmCartaz(filmes) {
  const filmesEmCartaz = filmes.filter((filme) => {
    if (filme.emCartaz === true) {
      return true;
    }
  });
  return filmesEmCartaz;
}
console.log(listarFilmesEmCartaz(catalogoObj.data));

//CODIGO REFATORAR
function listarFilmesEmCartaz(filmes) {
  const filmesEmCartaz = filmes.filter((filme) => filme.emCartaz);
  return filmesEmCartaz;
}
console.log(listarFilmesEmCartaz(catalogoObj.data));

//ou
function listarFilmesEmCartaz(filmes) {
  return filmesEmCartaz = filmes.filter((filme) => filme.emCartaz);
}
console.log(listarFilmesEmCartaz(catalogoObj.data));

//ou trocar a function para arrrowm functioin
const listarFilmesEmCartaz(filmes) =>
  filmes.filter((filme) => filme.emCartaz);

console.log(listarFilmesEmCartaz(catalogoObj.data));



//ALTERAR FILMES EM CARTAZ
function alterarStatusEmCartaz(id, filmes) {
  const idxFilme = filmes.findIndex((filme) => {
    if (filme.codigo === id) {
      return true;
    }
  });
  if (idxFilme >= 0) {
    filmes[idxFilme].emCartaz = !filmes[idxFilme].emCartaz;
    return true;
  } else {
    return false;
  }
}

console.log(alterarStatusEmCartaz(1, catalogoObj.data));
console.log(catalogoObj.data);

// função calculadora
//FUNÇÃO DO CALLBACK É ENCAPSULAR UMA AS FUNÇÕES
function calculadoraDoisNumeros(calculador,num1, num2){
//VALIDAÇÃO ANTES DE CHAMAR O CALL BACK
  if(mum1 > 5){
    num1 = num1 +2;
}else{
  num1=num1+5
}

  return calculador();
}

function somar (num1, num2){
  return num1+num2;
}

function multiplicar (num1, num2){
  return num1*num2;
}

const resultado = calculadoraDoisNumeros(somar, 2,4);
console.log(resultado)