import React from 'react';

const ClienteView = ({ cliente }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px' }}>
      <h2>Detalhes do Cliente</h2>
      <p><strong>ID:</strong> {cliente.id}</p>
      <p><strong>Nome:</strong> {cliente.nome}</p>
      <p><strong>Endereço:</strong> {cliente.endereco}</p>
    </div>
  );
};

export default ClienteView;
