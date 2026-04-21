export default function SuccessMessage({ email, onDismiss }) {
  return (
    <div className="success-message">
      <div className="success__content">
        <div className="message">
          <img src="icon-success.svg" alt="" className="success__img" />
          <h2 className="success__title">Thanks for subscribing!</h2>
          <p className="success__text">
            A confirmation email has been sent to <a href={`mailto:${email}`}>{email}</a>.
            Please open it and click the button inside to confirm your subscription.
          </p>
        </div>
        <button id="close" className="success__button" onClick={onDismiss}>Dismiss message</button>
      </div>
    </div>
  )
}