import styles from './Subscription.module.scss'
import Button from '@/components/UI/Button';

const Subscription = () => {

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const email = formData.get('email').trim()

    if (!isValidEmail(email)) {
      alert('Введите корректный email (например, name@example.com)')
    }

    console.log(email)
  }

  const titleId = 'subscription-title'
  const descriptionId = 'subscription-description'
  const emailAttr = 'email'

  return (
    <section className={styles.section} aria-labelledby={titleId} role="region">
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className={styles.title} id={titleId}>Sign Up for Matterful Updates</h2>
          <div className={styles.description} id={descriptionId}>
            <p>Most newsletters suck but ours won't – we promise!</p>
          </div>
        </div>
        <form
          className={styles.form}
          aria-describedby={descriptionId}
          onSubmit={onSubmit}
        >
          <label className="visually-hidden" htmlFor={emailAttr}></label>
          <input
            className={styles.emailInput}
            type={emailAttr}
            id={emailAttr}
            name={emailAttr}
            placeholder="user@example.com"
            aria-required="true"
            required
          />
          <Button
            type="button"
            mode="transparent-white"
            modeSize="big"
            label="Submit"
          />
        </form>
      </div>
    </section>
  )
}

export default Subscription