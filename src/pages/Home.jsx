import { useState } from 'react'
import { Link } from 'react-router-dom'
import products from '../data/products'
import heroImg from '../assets/images/suit.jpg'

const tips = [
  'Pair neutral tones with one bold accessory.',
  'Tailored fit beats expensive labels every time.',
  'Mix prints with plain pieces to keep outfits balanced.',
]

function Home() {
  const [tipIndex, setTipIndex] = useState(0)
  const nextTip = () => setTipIndex((tipIndex + 1) % tips.length)

  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to XerXes Fits</h1>
          <p>
            Modern, affordable fashion for everyday confidence. We design and sell
            clothing for men and women, with new pieces every month.
          </p>
          <Link to="/products" className="btn">Shop the collection</Link>
        </div>
        <img src={heroImg} alt="Urban Stitch outfit" />
      </section>

      <section className="container tip-box">
        <h2>Style tip of the day</h2>
        <p>{tips[tipIndex]}</p>
        <button className="btn" onClick={nextTip}>Another tip</button>
      </section>

      <section className="container">
        <h2>Featured pieces</h2>
        <div className="grid">
          {products.slice(0, 3).map((p) => (
            <article className="card" key={p.id}>
              <img src={p.image} alt={p.name} />
              <div className="card-body"><h3>{p.name}</h3></div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default Home