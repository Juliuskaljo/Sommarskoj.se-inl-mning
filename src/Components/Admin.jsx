import React, { useEffect, useState } from 'react';
import { deleteProduct, editProduct, addProduct, getToyList } from '../Data/crud.js';
import './startpage.css';

const Startpage = () => {
    const [toyList, setToyList] = useState([]);
    const [newName, setNewName] = useState('');
    const [newColor, setNewColor] = useState('');
    const [newPrice, setNewPrice] = useState(0);
    const [newImage, setNewImage] = useState('');
    const [editedName, setEditedName] = useState('');
    const [editedColor, setEditedColor] = useState('');
    const [editedPrice, setEditedPrice] = useState(0);
    const [editedImage, setEditedImage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const toys = await getToyList();
            setToyList(toys);
        };
        fetchData();
    }, []);

    const handleAddProduct = async () => {
        await addProduct({
            name: newName,
            color: newColor,
            price: newPrice,
            image: newImage
        });
        const updatedToyList = await getToyList();
        setToyList(updatedToyList);
    };

    const handleEditProduct = async (id) => {
        await editProduct(id, {
            name: editedName,
            color: editedColor,
            price: editedPrice,
            image: editedImage
        });
        const updatedToyList = await getToyList();
        setToyList(updatedToyList);
    };

    const handleDeleteProduct = async (id) => {
        await deleteProduct(id);
        const updatedToyList = await getToyList();
        setToyList(updatedToyList);
    };

	return (
		<div className='grid-container'>
			<div>
				<input placeholder='Lägg till namn'
				onChange={(e) => {
					setNewName(e.target.value);
				}}
				/>
				<input placeholder='Lägg till färg'
				onChange={(e) => {
					setNewColor(e.target.value);
				}}
				/>
				<input placeholder='Lägg till pris'
				type='number'
				onChange={(e) => {
					setNewPrice(e.target.value);
				}}
				/>
				<input placeholder='Lägg till bild'
				onChange={(e) => {
					setNewImage(e.target.value);
				}}
				/>
	
				<button onClick={handleAddProduct}>Lägg till</button>
			</div>
	
			{toyList.map((toy) => (
				<div className='toy-cards' key={toy.id}>
					<img className='image-card'
					 src={toy.image} alt={toy.name}
					/> <input type="url" placeholder='Byt bild' onChange={(e) => setEditedImage (e.target.value)} />
					
					<h3><strong>{toy.name}</strong>
					<input placeholder='Ändra namn' onChange={(e) => setEditedName(e.target.value) }/>
					</h3>
	
					<p><strong>Färg:</strong> {toy.color}
					<input placeholder='Ändra färg' onChange={(e) => setEditedColor(e.target.value)} />
					</p>
	
					<p><strong>Pris:</strong> {toy.price}Kr
					<input placeholder='Ändra pris' onChange={(e) => setEditedPrice(e.target.value)}/>
					</p>
	
					<button className='add-button'>Lägg till</button>
	
					<button onClick={() => handleEditProduct (toy.id)}>Ändra</button>
	
					<button onClick={() => handleDeleteProduct(toy.id)}> Ta bort</button>
				</div>
			))}
		</div>
	  );
	}

export default Startpage;