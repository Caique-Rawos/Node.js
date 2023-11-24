const http = require("http");
const port = 8080;

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1> Pagina Principal </h1>");
      break;

    case "/users":
      const users = [
        {
          name: "Caique Rawos",
          email: "caique.rawos@gmail.com",
        },
        {
          name: "Caique Rawos2",
          email: "caique.rawos@gmail.com2",
        },
      ];

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(users));
      break;
  }
});

server.listen(port, () => console.log(`Rodando na porta ${port}`));
