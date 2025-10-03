import styles from './GalleryItem.module.scss'
import classNames from 'classnames'

const GalleryItem = (props) => {
  const {
    imgSrc,
    imgAlt,
    title,
    city,
    address,
  } = props

  return (
    <div className={styles.galleryItem}>
      <img
        className={styles.imageBg}
        src={imgSrc}
        alt={imgAlt}
        width="960"
        height="460"
        loading="lazy"
      />
      <div className={styles.textWrapper}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.addressWrapper}>
          <strong className={styles.city}>{city}</strong>
          <div className={styles.address}>
            <p>{address}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GalleryItem