import React from 'react';

function Header(props) {
  const { countCart } = props;
  return (
    <header className='block row center'>
      <div>
        <a href=''>
          <h1>CC9 Shop</h1>
        </a>
      </div>
      <div>
        <a href=''>
          <h3>
            Cart
            <button>{countCart}</button>
          </h3>
        </a>
      </div>
    </header>
  );
}

export default Header;
