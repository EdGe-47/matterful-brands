import styles from './Gallery.module.scss'
import classNames from 'classnames'
import GalleryItem from '@/components/GalleryItem';

const Gallery = () => {
  const titleId = 'gallery-title'

  return (
    <section className={styles.section} aria-labelledby={titleId}>
      <h1 className="visually-hidden" id={titleId}></h1>
      <GalleryItem
        imgSrc="src/assets/images/gallery/los-angeles.jpg"
        imgAlt="sunset on the California coast"
        title="California Dreaming in Sunny SoCal"
        city='Los Angeles, California'
        address='901 Hermosa Ave'
      />
      <GalleryItem
        imgSrc="src/assets/images/gallery/monterey.jpg"
        imgAlt="a rainbow against the Monterey coastline"
        title="West Coast Presence, East Coast Hustle."
        city='Monterey, California'
        address='400 Foam Street'
      />
    </section>
  )
}

export default Gallery