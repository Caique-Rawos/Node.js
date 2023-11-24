const fs = require("fs");
const path = require("path");

fs.mkdir(path.join(__dirname, "/teste"), (error) => {
  if (error) {
    return console.log("Erro: ", error);
  }

  console.log("Pasta Criada com Sucesso!");
});

fs.writeFile(
  path.join(__dirname, "/teste", "teste.html"),
  "Olá, Node.js",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }

    console.log("Arquivo Criado com Sucesso!");
  }
);
