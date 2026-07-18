

import { create } from "zustand";

const useProducts = create((set) => ({
  allProducts: [],
  selectedCategory: "All Products",
  selectedColor: null,
  priceRange: [10, 50], // ← notun, default range

  setAllProducts: (products) => set({ allProducts: products }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setSelectedColor: (color) =>
    set((state) => ({
      selectedColor: state.selectedColor === color ? null : color,
    })),
  setPriceRange: (range) => set({ priceRange: range }),
}));

export { useProducts };

