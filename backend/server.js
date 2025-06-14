const express = require('express');
const app = express();
const documentsRoutes = require('./routes/documents');
const PORT = 5000;

app.use(express.json());
app.use('/api/documents', documentsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});