import express from 'express';
import cors from 'cors';
import {randomUUID} from 'crypto';

const app = express();
app.use(express.json());
app.use(cors());

const todos = [
  {id: randomUUID(), description: 'Estudar TypeScript', done: true},
  {id: randomUUID(), description: 'Fazer a prova online', done: false},
  {id: randomUUID(), description: 'Cortar a grama', done: false},
];

// Verb : GET, POST, PUT, DELETE, ...
// Resource : todos
// Representation : JSON
// Status code : OK(200), BAD_REQUEST(400), ...

app.get('/todos', function (req, res) {
  res.json(todos);
});

app.post('/todos', function (req, res) {
  console.log(Object.keys(req.body));
  if (req.body && Object.keys(req.body).length > 0) {
    const id = randomUUID();
    const todo = {...req.body, id};
    todos.push(todo);
    res.status(201).location(`/todos/${id}`).json(todo);
  } else {
    res.status(400).json({message: 'Todos not informed'});
  }
});

app.delete('/todos/:id', function (req, res) {
  const todo = todos.find((todo: any) => todo.id === req.params.id);
  if (todo) {
    todos.splice(todos.indexOf(todo), 1);
  } else {
    res.status(404).json({message: `Todo ${req.params.id} does not exist`});
  }
  res.status(204).end();
});

app.put('/todos/:id', function (req, res) {
  const todo = todos.find((todo: any) => todo.id === req.params.id);
  if (todo) {
    todo.description = req.body.description;
    todo.done = req.body.done;
  } else {
    res.status(404).json({message: `Todo ${req.params.id} does not exist`});
  }
  res.json(todo);
});

app.patch('/todos/:id', function (req, res) {
  const todo = todos.find((todo: any) => todo.id === req.params.id);
  if (todo) {
    todo.done = req.body.done;
  } else {
    res.status(404).json({message: `Todo ${req.params.id} does not exist`});
  }
  res.json(todo);
});

app.listen(3000);
