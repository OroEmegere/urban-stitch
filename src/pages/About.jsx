import InfoCard from '../components/InfoCard'

const values = [
  { title: 'Our Mission', text: 'To make quality fashion affordable and accessible to everyone.' },
  { title: 'Our Vision', text: 'To become a leading African fashion brand known for style and fair pricing.' },
  { title: 'Our Values', text: 'Quality, creativity, honesty and customer care.' },
]

function About() {
  return (
    <section className="container">
      <h1>About Urban Stitch</h1>
      <p>
        Urban Stitch is a fashion brand that designs and sells ready-to-wear
        clothing and accessories for men and women.
      </p>

      <h2>Our Story</h2>
      <p>
        Founded in 2020 by a small team of designers who wanted stylish clothes
        without the high price tag, Urban Stitch started in a small studio and now
        serves customers across the country online.
      </p>

      <div className="grid">
        {values.map((v) => (
          <InfoCard key={v.title} title={v.title} text={v.text} />
        ))}
      </div>
    </section>
  )
}

export default About