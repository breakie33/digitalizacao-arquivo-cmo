import React, { useState, useEffect } from 'react';
import DocumentUpload from './components/DocumentUpload';
import DocumentList from './components/DocumentList';

function App() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/documents')
      .then(response => response.json())
      .then(data => setDocuments(data));
  }, []);

  const addDocument = (doc) => {
    setDocuments([...documents, doc]);
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Sistema de Digitalização de Documentos - CMO</h1>
      <DocumentUpload onAdd={addDocument} />
      <DocumentList documents={documents} />
    </div>
  );
}

export default App;