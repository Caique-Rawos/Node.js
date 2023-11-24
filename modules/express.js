const express = require("express");

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.contentType("application/html");
  res.status(200).send("<h1> Pagina Principal </h1>");
});

app.get("/users", (req, res) => {
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

  res.status(200).json(users);
});

app.listen(port, () => console.log(`Rodando com Express na porta ${port}`));
