import { create } from "zustand";

interface CartInterface {
  items: any;
  setItems: (payload: object) => void;
}

export const UseCartStore = create<CartInterface>((set) => ({
  items: [],
  setItems: (param: object) => set((state) => ({ items: [param] })),
}));
