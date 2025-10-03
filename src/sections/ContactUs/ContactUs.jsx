import Button from '@/components/UI/Button';
import styles from './ContactUs.module.scss'

const ContactUs = () => {
  const titleId = 'contact-us-title'

  return (
    <section className={styles.section}>
      <h2 className="visuallyhidden" id={titleId}></h2>
      <div className={styles.container}>
        <div className={styles.textWrapper}>
          <h3 className={styles.title}>Interested in working with Matterful Brands?</h3>
          <div className={styles.description}>
            <p>
              We are a small team of seasoned do'ers who thoughtfully partner with purposeful food and beverage brands. Our Matterful team is made up of senior-level designers, directors and entrepreneurs who understand first-hand what it takes to get to market at an accelerated pace, without sacrificing quality. Do you have a brand or project that could use some love? Hit the contact button to say hello and tell us more!
            </p>
          </div>
        </div>
        <Button
          label="Contact Us"
        />
      </div>

    </section>
  )
}

export default ContactUs