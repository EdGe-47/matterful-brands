import styles from './Location.module.scss'
const Location = (props) => {
  const {
    imgSrc,
    title,
    subtitle,
    address,
  } = props

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src={imgSrc}
          alt=""
          width="64"
          height="64"
          loading="lazy"
        />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.subtitle}>{subtitle}</div>
        <address className={styles.address}>
          {address}
        </address>
      </div>
    </div>


  )
}

export default Location