import { create } from 'zustand';

interface AddFoodModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useAddFoodModal = create<AddFoodModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useAddFoodModal;