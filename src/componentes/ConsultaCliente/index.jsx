import React, { useState, useEffect } from 'react';

const ClientesComponent = () => {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/v1/clientes/all');
        if (!response.ok) {
          throw new Error('Erro na requisição');
        }
        const data = await response.json();
        setClientes(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchClientes();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  return (
    <div style={{ padding: '10px' }}>
      <h2>Lista de Clientes</h2>
      {clientes.length > 0 ? (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>ID</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Nome</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Endereço</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map(cliente => (
              <tr key={cliente.id}>
                <td style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'center' }}>{cliente.id}</td>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{cliente.nome}</td>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{cliente.endereco}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Nenhum cliente encontrado</p>
      )}
    </div>
  );
};

export default ClientesComponent;
