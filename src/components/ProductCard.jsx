import { useState } from 'react'

function ProductCard({ product, onAdd }) {
  const [liked, setLiked] = useState(false)

  return (
    <article className="card">
      <img src={product.image} alt={product.name} />
      <div className="card-body">
        <span className="tag">{product.category}</span>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p className="price">₦{product.price.toLocaleString()}</p>
        <div className="card-actions">
          <button className="btn" onClick={() => onAdd(product)}>Add to cart</button>
          <button className="like-btn" onClick={() => setLiked(!liked)} aria-label="Favourite">
            {liked ? '♥' : '♡'}
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard