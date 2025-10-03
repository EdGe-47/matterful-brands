import styles from './SocialIcon.module.scss'
import classNames from 'classnames'

const SocialIcon = (props) => {
  const {
    imgSrc
  } = props

  return (
    <img
      className={styles.image}
      src={imgSrc}
      alt=""
      width="36"
      height="36"
      loading="lazy"
    />
  )
}

export default SocialIcon