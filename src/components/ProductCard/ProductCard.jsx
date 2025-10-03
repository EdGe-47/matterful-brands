import styles from './ProductCard.module.scss'
import classNames from 'classnames';


const ProductCard = (props) => {
  const {
    imgSrc,
    title,
    subtitle,
    description,
    size // 'medium' || large
  } = props

  return (
    <article>
      <div className={classNames(styles['wrapper-card'], styles[size])}>
        <div className={styles['image-wrapper-card']}>
          <img
            className={styles['large-image-card']}
            src={imgSrc}
            alt=""
            width="670"
            height="380"
            loading="lazy"
          />
        </div>
        <div className={styles['body-card']}>
          <p className={styles['subtitle']}>{subtitle}</p>
          <h3 className={styles['title']}>{title}</h3>
          <div className={styles['description']}>
            <p>
              {description}
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProductCard