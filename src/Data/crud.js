import { db } from './fire.js';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore/lite';

const toysCollectionRef = collection(db, 'toys');

const getToyList = async () => {
    try {
        const data = await getDocs(toysCollectionRef);
        const toyList = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
        return toyList;
    } catch (error) {
        console.log('Fel ', error);
        return [];
    }
}

const addProduct = async (newToy) => {
    try {
        await addDoc(toysCollectionRef, newToy);
    } catch (error) {
        console.log('Fel ', error);
    }
}

const deleteProduct = async (toyId) => {
    try {
        const toyDoc = doc(db, 'toys', toyId);
        await deleteDoc(toyDoc);
    } catch (error) {
        console.log('Fel ', error);
    }
}

const editProduct = async (id, updatedToy) => {
    try {
        const toyDoc = doc(db, 'toys', id);
        await updateDoc(toyDoc, updatedToy);
    } catch (error) {
        console.log('Fel ', error);
    }
}

export { getToyList, addProduct, deleteProduct, editProduct };