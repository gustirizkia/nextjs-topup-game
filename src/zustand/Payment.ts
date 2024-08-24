import { create } from "zustand";

interface PaymentInterface {
  items: any;
  setItems: (payload: object) => void;
}

export const UsePaymentStore = create<PaymentInterface>((set) => ({
  items: [],
  setItems: (param: object) => set((state) => ({ items: [param] })),
}));
