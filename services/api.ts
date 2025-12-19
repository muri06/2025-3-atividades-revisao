import { Product } from '../lib/products'

const BASE = 'https://dummyjson.com'

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(`${BASE}/products?limit=10`)
  if (!res.ok) throw new Error('Failed to fetch products')
  const json = await res.json()
  // dummyjson returns { products: [...] }
  return json.products.map((p: any) => ({
    id: p.id,
    title: p.title,
    description: p.description,
    price: p.price,
    thumbnail: p.thumbnail,
  }))
}
