import React from 'react';
import { useStore } from '../Data/store';
import './cart.css';

const Cart = () => {
  const { cart } = useStore();
  const { removeFromCart } = useStore();

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
			<button onClick={() => removeFromCart(toy)}>Ta bort</button>
          </li>
        ))}
      </div>
	 </ul> 

	 <form>
		<label className='cart-form'>
			<input type="text" placeholder="Förnamn" />
			<input type="text" placeholder='Efternamn' />
			<input type="text" placeholder='Adress' />
			<input type="text" placeholder='Telefonnummer' />
		</label>
		<button className='cart-button-accept'>Skicka beställning</button>
		<button className='cart-button-decline'> Avbryt</button>
	 </form>
    </div>
  );
}

export default Cart;