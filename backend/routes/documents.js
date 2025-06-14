const express = require('express');
const router = express.Router();

let documents = [];

router.get('/', (req, res) => {
  res.json(documents);
});

router.post('/', (req, res) => {
  const { title, description } = req.body;
  const newDoc = { id: documents.length + 1, title, description };
  documents.push(newDoc);
  res.status(201).json(newDoc);
});

module.exports = router;