import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: [],
  addToCart: (product) => set((state) => {
    const existingProduct = state.cart.find((item) => item.id === product.id);
    if (existingProduct) {
      return {
        cart: state.cart.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        
        ),
      };
    }
    return { cart: [...state.cart, { ...product, count: 1 }] };
  }),
  removeFromCart: (id) => set((state) => ({
    cart: state.cart.filter((item) => item.id !== id),
  })),
  clearCart: () => set(() => ({ cart: [] })),
  getTotalItems: () => 
    get().cart.reduce((total,item)=>total + item.count,0),
}));

export default useCartStore;
