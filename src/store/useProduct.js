

import { create } from "zustand";

const useProducts = create((set) => ({
  allProducts: [],              // ← master list, ekhane kokhono filter hobe na
  selectedCategory: "All Products", // ← filter criteria, alada state
  setAllProducts: (products) => set({ allProducts: products }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
}));

export { useProducts };