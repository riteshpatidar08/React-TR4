import React from 'react';

function App() {
  const products = ['mobile', 'ac', 'ps5', ';laptop'];
  return (
    <div>
      <h1>LIST RENDERING</h1>
      <h1>{products[0]}</h1>
      {products.map((product, index) => {
        console.log(product);
        return <h2 key={index}>{product}</h2>;
      })}
      {/* variation second when you do not have any console inside the map callback */}
      {products.map((product, index) => (
        <div key={index}>
          <h2>{product}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
