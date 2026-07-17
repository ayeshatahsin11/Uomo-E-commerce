import { create } from "zustand";


const useProducts = create((set)=>(
    {
    products : [],
    setProducts : (products)=>set({products})
}
))

export {useProducts}