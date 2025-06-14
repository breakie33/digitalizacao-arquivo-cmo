import React from 'react';

function DocumentList({ documents }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Documentos Digitalizados:</h2>
      <ul>
        {documents.map(doc => (
          <li key={doc.id} className="border p-2 mb-2">
            <strong>{doc.title}</strong>
            <p>{doc.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DocumentList;