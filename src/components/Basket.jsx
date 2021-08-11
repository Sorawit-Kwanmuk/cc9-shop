import React from 'react';

function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  let itemPrices = cartItems.reduce(
    (accumulator, item) => accumulator + item.price * item.quantity,
    0
  );
  let tax = itemPrices * 0.07;
  let shipping = itemPrices === 0 || itemPrices > 3000 ? 0 : 50;
  let total = itemPrices + tax + shipping;
  //ในแต่ละรอบให้ item*จำนวน แล้วบวกกับ acc แล้วเก็บค่าไว้ใน acc โดยที่ค่าเริ่มต้นรอบแรก acc = 0
  return (
    <aside className='col-1 block'>
      <h2>Cart Items</h2>
      <div>{cartItems.length === 0 && <div>Cart is Empty</div>}</div>
      {cartItems.map(item => (
        <div className='row'>
          <div>{item.name}</div>
          <div>
            <button className='add' onClick={() => onAdd(item)}>
              +
            </button>
            <button className='remove' onClick={() => onRemove(item)}>
              -
            </button>
          </div>
          <div className='col-2 text-right'>
            {item.quantity} x ${item.price}
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
          <hr />
          <div className='row'>
            <div className='col-2'>Item Price</div>
            <div className='col-1 text-right'>${itemPrices.toFixed(2)}</div>
          </div>
          <div className='row'>
            <div className='col-2'>Tax</div>
            <div className='col-1 text-right'>${tax.toFixed(2)}</div>
          </div>
          <div className='row'>
            <div className='col-2'>Shipping</div>
            <div className='col-1 text-right'>${shipping.toFixed(2)}</div>
          </div>
          <div className='row text-bold'>
            <div className='col-2'>Total</div>
            <div className='col-1 text-right'>${total.toFixed(2)}</div>
          </div>
        </>
      )}
    </aside>
  );
}

export default Basket;
