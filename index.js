const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("dist"));

morgan.token("body", (req) => JSON.stringify(req.body)); // Crear token personalizado
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);
let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/api/info", (request, response) => {
  const currentDate = new Date().toString();
  response.send(
    `<p>Phonebook has info for ${persons.length} people</p><p>${currentDate}</p>`
  );
});

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((person) => person.id === id);

  if (person) {
    response.json(person);
  } else {
    response.status(404).send({ error: "Person not found" });
  }
});
// Paso 3.4: Eliminar una entrada con DELETE
app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const initialLength = persons.length;
  persons = persons.filter((person) => person.id !== id);

  if (initialLength === persons.length) {
    // No se encontró la persona
    response.status(404).json({ error: "person not found" });
  } else {
    // Eliminación exitosa
    response.status(204).end();
  }
});

// Paso 3.5 y 3.6: Crear una nueva entrada con POST y manejo de errores
app.post("/api/persons", (request, response) => {
  const body = request.body;

  // Validaciones del paso 3.6
  if (!body.name || !body.number) {
    return response.status(400).json({ error: "name or number missing" });
  }

  if (persons.some((person) => person.name === body.name)) {
    return response.status(400).json({ error: "name must be unique" });
  }

  // Generar ID aleatorio (paso 3.5)
  const id = Math.floor(Math.random() * 1000000); // Rango grande para evitar duplicados

  const newPerson = {
    id: id,
    name: body.name,
    number: body.number,
  };

  persons = persons.concat(newPerson);
  response.json(newPerson);
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
