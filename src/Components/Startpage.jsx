import React, { useEffect, useState } from 'react';
import { db } from '../Data/fire.js';
import { collection, getDocs } from 'firebase/firestore/lite';
import './startpage.css';
import { useStore } from '../Data/store.js';

const Startpage = () => {

	const { addToCart } = useStore();
	const [toyList, setToyList] = useState([]);

	const toysCollectionRef = collection(db, 'toys');

	useEffect(() => {
		const getToyList = async () => {

			try {
			const data = await getDocs(toysCollectionRef);
			const filteredData = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
			setToyList(filteredData);
		} catch (error) {
			console.log('Fel ', error);
		};
	}
	getToyList()
	}, []);
	
  return (
	<div className='grid-container'>
		{toyList.map((toy) => (
			<div className='toy-cards' key={toy.id}>
				<img className='image-card' src={toy.image} alt={toy.name} />
				<h3><strong>{toy.name}</strong></h3>
				<p><strong>Färg:</strong> {toy.color}</p>
				<p><strong>Pris:</strong> {toy.price}Kr</p>
				<button className='add-button' onClick={() => addToCart(toy)}>Lägg till</button>
			</div>
		))}
	</div>
  );
}

export default Startpage;