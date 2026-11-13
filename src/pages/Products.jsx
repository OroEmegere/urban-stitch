import { useState } from 'react'
import products from '../data/products'
import ProductCard from '../components/ProductCard'

function Products({ addToCart, cart, clearCart }) {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const categories = ['All', ...new Set(products.map((p) => p.category))]

  const visible = products.filter(
    (p) =>
      (category === 'All' || p.category === category) &&
      p.name.toLowerCase().includes(search.toLowerCase())
  )

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <section className="container">
      <h1>Our Collection</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      <div className="cart-summary">
        <p>Items in cart: <strong>{cart.length}</strong> | Total: <strong>₦{total.toLocaleString()}</strong></p>
        {cart.length > 0 && <button className="btn" onClick={clearCart}>Clear cart</button>}
      </div>

      <div className="grid">
        {visible.map((product) => (
          <ProductCard key={product.id} product={product} onAdd={addToCart} />
        ))}
      </div>

      {visible.length === 0 && <p>No products match your search.</p>}
    </section>
  )
}

export default Products
