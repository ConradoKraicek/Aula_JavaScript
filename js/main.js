var nome = 'conrado'
alert("meu primeiro javascript " + nome);

var lista = ["Beto","Ricardo","Luiz"];
console.log(lista);

var lista = ["Beto","Ricardo","Luiz"];
lista.push("Amanda");
console.log(lista);

var livros = [{nome:"Beto ", cor:"preta"},{nome:"Vera ", cor:"branca"}];
console.log(livros);
console.log(livros[0].nome);

var livro = {nome:"Beto ", cor:"preta"};
console.log(livro.nome + livro.cor);

function clicou() {
    document.getElementById("agradecimento").innerHTML = "Obragado por clicar";
}

