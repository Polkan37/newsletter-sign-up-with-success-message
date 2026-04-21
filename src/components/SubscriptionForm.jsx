import { useState } from 'react'

export default function SubscriptionForm({ onSubscribe }) {
  const [value, setValue] = useState('')
  const [touched, setTouched] = useState(false)

  const isValid = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value)

  const handleSubmit = (e) => {
    e.preventDefault()
    setTouched(true)
    if (!isValid) return
    onSubscribe(value)
    // optionally clear local state
    setValue('')
    setTouched(false)
  }

  return (
    <form onSubmit={handleSubmit} className="subscription" noValidate>
      <label className={touched && !isValid ? 'invalid' : ''} htmlFor="email">Email address</label>
      <input
        id="email"
        type="email"
        placeholder="email@company.com"
        autoComplete="email"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => setTouched(true)}
        className={touched && !isValid ? 'invalid' : ''}
        required
      />
      <button type="submit">Subscribe to monthly newsletter</button>
    </form>
  )
}