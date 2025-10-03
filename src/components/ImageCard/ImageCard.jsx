import styles from './ImageCard.module.scss'
import BnACardCollection from '@/modules/BnACardCollection';
import React from 'react';
import imageCard from '@/components/ImageCard/index';

const ImageCard = (props) => {
  const {
    emptyCard,
    bnaCard,
    onlyImage,
    largeImage,
    imgSrc,
    imgBeforeSrc,
    imgAfterSrc,
  } = props

  React.useEffect(() => {
    new BnACardCollection();
  }, []);

  const cardHeight = '670'

  return (
    <article>
      {emptyCard && (
        <div className={styles['empty-wrapper-card']}></div>
      )}
      {bnaCard && (
        <div
          className={styles['bna-card']}
          data-js-bna-card=""
        >
          <div className={styles['bna-card__images-wrapper']} >
            <img
              className={`${styles['bna-card__before-image']} ${styles['bna-card__image']}`}
              src={imgBeforeSrc}
              alt=""
              width="470"
              height={cardHeight}
              loading="lazy"
            />
            <img
              className={`${styles['bna-card__after-image']} ${styles['bna-card__image']}`}
              src={imgAfterSrc}
              alt=""
              width="470"
              height={cardHeight}
              loading="lazy"
            />
          </div>
          <div className={styles['bna-card__handle']}>
            <div className={styles['bna-card__line']}></div>
            <div
              className={styles['bna-card__button']}
              data-js-bna-card-button=""
            >
              <span className={styles['bna-card__button-arrow']}></span>
            </div>
          </div>
        </div>
      )}
      {onlyImage && (
        <img
          className={styles['only-image']}
          src={imgSrc}
          alt=""
          width="470"
          height="608"
          loading="lazy"
        />
      )}
      {largeImage && (
        <img
          className={styles['large-image']}
          src={imgSrc}
          alt=""
          width="570"
          height="652"
          loading="lazy"
        />
      )}
    </article>
  )
}

export default ImageCard