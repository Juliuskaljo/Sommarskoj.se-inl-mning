import React, { useEffect, useState } from 'react';
import { db } from '../Data/fire.js';
import { collection, getDocs } from 'firebase/firestore/lite';
import './startpage.css';

const Startpage = () => {

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
				<h3><strong>{toy.name}</strong></h3>
				<p><strong>Pris:</strong> {toy.price}Kr</p>
				<p><strong>Färg:</strong> {toy.color}</p><button className='add-button'>Lägg till</button>
			</div>
		))}
	</div>
  );
}

export default Startpage;