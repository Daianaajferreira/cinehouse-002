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