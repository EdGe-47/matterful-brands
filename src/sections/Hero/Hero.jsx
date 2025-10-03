import styles from './Hero.module.scss'
import classNames from 'classnames'

const Hero = () => {

  const titleId = 'title-hero'

  return (
    <section className={styles.section} aria-labelledby={titleId}>
      <div className={styles.pano}>
        <h1 className="visually-hidden">Matterful brands</h1>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.inner}>
              <p className={styles.subtitle}>Featured Case Study</p>
              <h2
                className={styles.title}
                id={titleId}
              >
                Loncaro
              </h2>
            </div>
            <div className={styles.description}>
              <p>Check out our latest brand launch for Loncaro — the authentic long drink from Kuopio, Finland</p>
            </div>
          </div>
          <img
            className={styles.image}
            src="/src/assets/images/hero/hero-image.png"
            alt=""
            width="1000"
            height="501"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )  
}

export default Hero