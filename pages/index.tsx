import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { mockProducts } from '../lib/products'
import { useStore } from '../lib/store'
import { fetchProducts } from '../services/api'

export default function Home() {
  const products = useStore((s) => s.products)
  const setProducts = useStore((s) => s.setProducts)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // inicialmente os mocks locais já estão no Zustand
  }, [])

  async function loadRemote() {
    setLoading(true)
    setError(null)
    try {
      const remote = await fetchProducts()
      setProducts(remote)
    } catch (err: any) {
      setError(err.message ?? 'Erro ao buscar produtos')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="max-w-4xl mx-auto p-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold">Produtos</h1>
      </header>

      <div className="flex gap-2 mb-4">
        <button
          onClick={loadRemote}
          className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? 'Carregando...' : 'Carregar da API'}
        </button>
        <button
          onClick={() => setProducts(mockProducts)}
          className="px-4 py-2 rounded bg-gray-200"
        >
          Usar dados locais
        </button>
      </div>

      {error && <div className="mb-4 text-red-600">{error}</div>}

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </section>
    </main>
  )
}
