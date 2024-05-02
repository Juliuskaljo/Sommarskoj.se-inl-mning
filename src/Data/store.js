import {create} from 'zustand';

//Kan ta bort enskilt produkt med samma innehåll tack vare date.now som Maja visade
const useStore = create((set) => ({
    toyList: [],
    cart: [],
    setToyList: (toyList) => set({ toyList }),
    addToCart: (toy) => set((state) => ({
        cart: [...state.cart, { ...toy, id: Date.now() }]
    })),
    removeFromCart: (toyToRemove) => set((state) => ({
        cart: state.cart.filter((toy) => toy.id !== toyToRemove.id)
    })),
}));

export { useStore };