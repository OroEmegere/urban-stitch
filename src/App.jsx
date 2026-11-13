import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (product) => setCart([...cart, product])
  const clearCart = () => setCart([])

  return (
    <>
      <Navbar cartCount={cart.length} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/products"
            element={<Products addToCart={addToCart} cart={cart} clearCart={clearCart} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h2 className="container">Page not found</h2>} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App