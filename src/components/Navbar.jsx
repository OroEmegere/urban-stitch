import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar({ cartCount }) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="navbar">
      <NavLink to="/" className="logo" onClick={close}>Urban Stitch</NavLink>

      <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        {open ? '✕' : '☰'}
      </button>

      <nav className={open ? 'nav-links open' : 'nav-links'}>
        <NavLink to="/" onClick={close}>Home</NavLink>
        <NavLink to="/about" onClick={close}>About</NavLink>
        <NavLink to="/products" onClick={close}>Products</NavLink>
        <NavLink to="/contact" onClick={close}>Contact</NavLink>
        <span className="cart-badge">Cart ({cartCount})</span>
      </nav>
    </header>
  )
}

export default Navbar