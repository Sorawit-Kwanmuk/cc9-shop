import { useState } from 'react';
import './App.css';
import Basket from './components/Basket';
import Header from './components/Header';
import Main from './components/Main';
import products from './Data';

function App() {
  // console.log(products);
  const [cartItems, setCartItems] = useState([]);

  const onAdd = product => {
    // console.log(product);
    const idx = cartItems.findIndex(item => item.id === product.id);
    //ถ้า findIndex เจอ ค่าจะเท่ากับ index ที่เจอ แต่ถ้าไม่เจอ จะได้ค่าเป็น -1
    const newCart = [...cartItems];
    if (idx > -1) {
      newCart[idx] = { ...newCart[idx], quantity: newCart[idx].quantity + 1 };
      //ถ้าหาเจอ ให้ newCart ตัวที่ index เจอ ให้เพิ่ม quantity มา 1 แสดงว่ามีตัวนี้อยู่ในรายการคิดเงินอยู่แล้ว
      //ให้เพิ่มค่า quantity มา 1
    } else {
      newCart.push({ ...product, quantity: 1 });
      //ถ้าหาไม่เจอแสดงว่า ยังไม่เคยกด add รายการนี้ ดังนั้น ตัวมันยังไม่มีค่า quantity ให้ push ค่ามันเข้าไป โดยที่เพิ่ม quantity ต่อท้ายไปด้วย
    }
    //ใส่...หน้า product เพราะตอนที่รับค่ามา product มีค่าเป็น ก้อนobject ถ้า push ขึ้นไปเลย จะได้เป็น object ซ้อน object
    //การใส่ ...ด้านหน้าคือการ spread object มันออกมา แล้วเพิ่มค่า qtyหรือจำนวน เข้าไปต่อท้าย แล้ว push เข้าไป
    setCartItems(newCart);
  };

  const onRemove = product => {
    const exist = cartItems.find(item => item.id === product.id);
    //ถ้าหาเจอ จะได้ข้อมูลมาทั้งก้อน
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter(item => item.id !== product.id));
      //คืนค่า array ทุกก้อน ที่ไม่ใช่ก้อนที่หาเจอ ให้กับ setCartItems
    } else {
      setCartItems(
        cartItems.map(item =>
          item.id === product.id
            ? { ...exist, quantity: exist.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <div className='App'>
      <Header countCart={cartItems.length} />
      <div className='row'>
        <Main products={products} onAdd={onAdd} />
        <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
      </div>
    </div>
  );
}

export default App;
