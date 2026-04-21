import { useState } from 'react'
import './styles/index.css'
import SubscriptionForm from './components/SubscriptionForm'
import SuccessMessage from './components/SuccessMessage'

function App() {
  const [submittedEmail, setSubmittedEmail] = useState('')
  const listIcon = '/icon-list.svg';
  const handleSubscribe = (email) => {
    setSubmittedEmail(email)
  }

  const handleDismiss = () => {
    setSubmittedEmail('')
  }

  return (
    <div className="popup" style={{ '--list-icon': `url(${listIcon})` }}>
      {!submittedEmail ? (
        <div className="newsletter">
          <picture>
            <source srcSet="illustration-sign-up-desktop.svg" media="(min-width: 1024px)" />
            <source srcSet="illustration-sign-up-tablet.svg" media="(min-width: 768px)" />
            <img className="newsletter__image" src="illustration-sign-up-mobile.svg" alt="" />
          </picture>

          <div className="newsletter__content">
            <h1 className="newsletter__title">Stay updated!</h1>
            <p className="newsletter__text">Join 60,000+ product managers receiving monthly updates on:
              <ul>
                <li>Product discovery and building what matters</li>
                <li>Measuring to ensure updates are a success</li>
                <li>And much more!</li>
              </ul>
            </p>

            <SubscriptionForm onSubscribe={handleSubscribe} />
          </div>
        </div>
      ) : (
        <SuccessMessage email={submittedEmail} onDismiss={handleDismiss} />
      )}
    </div>
  )
}

export default App