import React from 'react';
import { useStore } from '../Data/store';
import './cart.css';

const Cart = () => {
  const { cart } = useStore();

  return (
    <div>
      <h2>Kundvagn</h2>
	  
	  <ul>
		<div className='cart-grid'>
      
        {cart.map((item, index) => (
          <li key={index}>
			<img src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <p>Färg: {item.color}</p>
            <p>Pris: {item.price}Kr</p>
          </li>
        ))}
      </div>
	 </ul> 
    </div>
  );
}

export default Cart;