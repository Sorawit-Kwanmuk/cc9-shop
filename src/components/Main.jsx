import React from 'react';
import Product from './Product';

function Main(props) {
  const { products, onAdd } = props;
  return (
    <main className='col-2 block'>
      <h1>Product</h1>
      <div className='row'>
        {products.map(product => (
          <Product key={product.id} product={product} onAdd={onAdd} />
        ))}
      </div>
    </main>
  );
}

export default Main;
