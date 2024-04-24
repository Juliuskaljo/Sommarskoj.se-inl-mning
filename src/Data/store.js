import {create} from 'zustand';

const useStore = create((set) => ({
    toyList: [],
    setToyList: (toyList) => set({ toyList }),
}));

export { useStore };