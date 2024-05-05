import React from 'react';
import { useStore } from '../Data/store';
import './cart.css';
import Form from './Contactform';

const Cart = () => {
  const { cart } = useStore();
  const { removeFromCart } = useStore();

  const totalPrice = cart.reduce((total, toy) => total + parseInt(toy.price), 0);

  return (
    <div>
      <h2>Kundvagn</h2>
	  
	  <ul>
		<div className='cart-flex'>
      
        {cart.map((toy, index) => (
          <li key={index}>
			<img src={toy.image} alt={toy.name} />
            <strong><p>{toy.name}</p></strong>
            <p><strong>Färg:</strong> {toy.color}</p>
            <p><strong>Pris:</strong> {toy.price}Kr</p>
			<button className='delete-from-cart-btn' onClick={() => removeFromCart(toy)}>Ta bort</button>
          </li>
        ))}
      </div>
	 </ul> 
	 <p className='total-price'>Totalt: {totalPrice}Kr</p>

	<Form />
	
    </div>
  );
}

export default Cart;