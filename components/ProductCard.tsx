import Image from 'next/image'
import React from 'react'
import { Product } from '../lib/products'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="border rounded-lg p-4 bg-white shadow-sm">
      <div className="flex items-start gap-4">
        {product.thumbnail && (
          // next/image requires domains in next.config for remote images; using plain img for simplicity
          <img src={product.thumbnail} alt={product.title} className="w-20 h-20 object-cover rounded" />
        )}
        <div>
          <h3 className="font-semibold">{product.title}</h3>
          <p className="text-sm text-gray-600">{product.description}</p>
          <div className="mt-2 font-medium">R$ {product.price}</div>
        </div>
      </div>
    </article>
  )
}
