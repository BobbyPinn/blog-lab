import { useState } from 'react'

const emptyForm = { name: '', email: '', message: '' }

function ContactPage() {
  const [form, setForm] = useState(emptyForm)
  const [submitted, setSubmitted] = useState(false)

  // One handler for all three inputs: the input's name attribute picks the field to update
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  function handleReset() {
    setForm(emptyForm)
    setSubmitted(false)
  }

  if (submitted) {
    return (
      <section className="card">
        <h1 className="post-title">Thanks, {form.name}!</h1>
        <p className="confirmation" role="status">
          Your message has been received. I'll reply to <strong>{form.email}</strong> soon.
        </p>
        <button type="button" className="btn" onClick={handleReset}>
          Send another message
        </button>
      </section>
    )
  }

  return (
    <section className="card">
      <h1 className="post-title">Contact</h1>
      <p className="meta">Have a question about a post? Send me a message.</p>
      <form className="stack-form" onSubmit={handleSubmit}>
        <label htmlFor="contact-name">Name</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn">Send Message</button>
      </form>
    </section>
  )
}

export default ContactPage
