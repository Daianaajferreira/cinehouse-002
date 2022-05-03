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

//CODIGO FATORADO
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