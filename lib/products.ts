export type Product = {
  id: number
  title: string
  description: string
  price: number
  thumbnail?: string
}

export const mockProducts: Product[] = [
  {
    id: 1,
    title: 'iPhone 12',
    description: 'Smartphone Apple iPhone 12',
    price: 799,
    thumbnail: '/images/iphone12.jpg'
  },
  {
    id: 2,
    title: 'Samsung Galaxy S21',
    description: 'Smartphone Samsung S21',
    price: 699,
    thumbnail: '/images/galaxys21.jpg'
  },
  {
    id: 3,
    title: 'MacBook Pro',
    description: 'Apple MacBook Pro 13 inch',
    price: 1299,
    thumbnail: '/images/macbook.jpg'
  }
]
