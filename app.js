const express = require("express");
const app = express();
const port = 3333;

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    colors: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    colors: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Titanic",
    director: "Jean Terre",
    year: "2000",
    colors: true,
    duration: 180,
  },
  {
    id: 4,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];
app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});

app.get("/api/movies", (req, res) => {
  res.send(movies);
  console.log(req.query);
});

app.get("/api/movies/:id", (req, res) => {
  const result = movies.find((c) => c.id === parseInt(req.params.id));
  if (!result) res.status(404).send("error");
  res.send(result);
});

app.get("/api/title/:title", (req, res) => {
  const resultat = movies.find((c) => c.title === req.params.title);
  if (!resultat) {
    return res.status(404).send("Movie not found");
  }
  res.send(resultat);
});
