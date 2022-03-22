import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const notes = [];
  res.status(200).send(notes);
});

app.get('/:id', (req, res) => {
  const note = {};
  res.status(200).send(note);
});

app.post('/', (req, res) => {
  const note = {};
  res.status(200).send(note);
});

app.put('/:id', (req, res) => {
  const note = {};
  res.status(200).send(note);
});

app.delete('/:id', (req, res) => {
  res.status(200).send();
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on http://localhost:${port}`);
});
