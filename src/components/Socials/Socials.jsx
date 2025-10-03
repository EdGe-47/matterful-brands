import styles from './Socials.module.scss'
import SocialIcon from '@/components/SocialIcon';

const Socials = (props) => {
  const {
    title,
    email,
  } = props
  return (
    <div className={styles.wrapper}>
      <div className={styles.mailWrapper}>
        <div className={styles.title}>{title}</div>
        <div className={styles.email}>{email}</div>
      </div>
      <div className={styles.soc1alWrapper}>
        <SocialIcon
          imgSrc="./src/assets/icons/facebook.svg"
        />
        <SocialIcon
          imgSrc="./src/assets/icons/instagram.svg"
        />
        <SocialIcon
          imgSrc="./src/assets/icons/twitter.svg"
        />
      </div>
    </div>
  )
}

export default Socials