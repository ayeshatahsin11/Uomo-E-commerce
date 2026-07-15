import { create } from "zustand";

export const useShopStore = create((set) => ({
  sortValue: "default",
  gridView: 4, // product column count

  setSortValue: (value) => set({ sortValue: value }),
  setGridView: (value) => set({ gridView: value }),
}));