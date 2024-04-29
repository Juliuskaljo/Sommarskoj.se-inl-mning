import {create} from 'zustand';

const useStore = create((set) => ({
    toyList: [],
	cart: [],
    setToyList: (toyList) => set({ toyList }),
	addToCart: (toy) => set((state) => ({ cart: [...state.cart, toy] })),
}));

export { useStore };