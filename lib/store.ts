import create from 'zustand'
import { Product, mockProducts } from './products'

type State = {
  products: Product[]
  setProducts: (p: Product[]) => void
  addProduct: (p: Product) => void
}

export const useStore = create<State>((set) => ({
  products: mockProducts,
  setProducts: (p) => set({ products: p }),
  addProduct: (p) => set((s) => ({ products: [p, ...s.products] })),
}))
