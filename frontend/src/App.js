import React, { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/api/items')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Erro ao buscar itens:', error));
  }, []);

  return (
    <div className="App">
      <h1>Itens do Banco de Dados</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;