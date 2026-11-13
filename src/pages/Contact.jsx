import { useState } from 'react'

const emptyForm = { name: '', email: '', subject: '', message: '' }

function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setSuccess(false)
  }

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Full name is required.'
    if (!form.email.trim()) newErrors.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Enter a valid email address.'
    if (!form.subject.trim()) newErrors.subject = 'Subject is required.'
    if (!form.message.trim()) newErrors.message = 'Message is required.'
    else if (form.message.trim().length < 10)
      newErrors.message = 'Message must be at least 10 characters.'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    setErrors(newErrors)
    if (Object.keys(newErrors).length === 0) {
      setSuccess(true)
      setForm(emptyForm)
    }
  }

  return (
    <section className="container contact">
      <h1>Contact Us</h1>

      <div className="contact-layout">
        <div className="contact-info">
          <h2>Get in touch</h2>
          <p>Email: hello@xerxesfits.example</p>
          <p>Phone: +234 800 000 0000</p>
          <p>Address: 12 Fashion Avenue, Lagos (sample address)</p>
          <p>Hours: Mon to Sat, 9am to 6pm</p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          {success && (
            <p className="success">Thank you! Your message has been sent. We will reply soon.</p>
          )}

          <label htmlFor="name">Full name</label>
          <input id="name" name="name" type="text" value={form.name} onChange={handleChange} />
          {errors.name && <span className="error">{errors.name}</span>}

          <label htmlFor="email">Email address</label>
          <input id="email" name="email" type="email" value={form.email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}

          <label htmlFor="subject">Subject</label>
          <input id="subject" name="subject" type="text" value={form.subject} onChange={handleChange} />
          {errors.subject && <span className="error">{errors.subject}</span>}

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} />
          {errors.message && <span className="error">{errors.message}</span>}

          <button type="submit" className="btn">Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact