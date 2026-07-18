

// import { create } from "zustand";

// const useProducts = create((set) => ({
//   allProducts: [],              // ← master list, ekhane kokhono filter hobe na
//   selectedCategory: "All Products", // ← filter criteria, alada state
//   setAllProducts: (products) => set({ allProducts: products }),
//   setSelectedCategory: (category) => set({ selectedCategory: category }),
// }));

// export { useProducts };

import { create } from "zustand";

const useProducts = create((set) => ({
  allProducts: [],
  selectedCategory: "All Products",
  selectedColor: null,          // ← notun

  setAllProducts: (products) => set({ allProducts: products }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setSelectedColor: (color) =>
    set((state) => ({
      selectedColor: state.selectedColor === color ? null : color, // toggle - abar click korle deselect
    })),
}));

export { useProducts };