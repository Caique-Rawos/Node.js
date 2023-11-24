const path = require("path");

// Exibe o nome do arquivo
console.log(path.basename(__filename));

// Exibe a diretorio atual
console.log(path.dirname(__filename));

// Exibe a extensão do arquivo
console.log(path.extname(__filename));

// Exibe objeto path
console.log(path.parse(__filename));

// Exibe caminho concatenado
console.log(path.join(__dirname, "teste", "teste.html"));
