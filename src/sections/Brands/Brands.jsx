import Section from '@/components/Section';
import styles from './Brands.module.scss'

const Brands = () => {

  return (
    <Section
      logoImg
      modeContainer='large-container'
      title="@matterfulbrands"
      titleId="brands-title"
      description="Get a behind the scenes look at how our Matterful Brands team is movin’ & shaking in both the studio and out in the field!"
    >
      <h2 className="visually-hidden" htmlFor="brands-title"></h2>
      <div className={styles.wrapper}>
        <div className={styles.innerTop}>
          <img
            className={styles.image}
            src="/src/assets/images/brands/1.png"
            alt=""
            width="216"
            height="216"
            loading="lazy"
          />
          <img
            className={styles.image}
            src="/src/assets/images/brands/2.png"
            alt=""
            width="461"
            height="461"
            loading="lazy"
          />
          <img
            className={styles.image}
            src="/src/assets/images/brands/3.png"
            alt=""
            width="348"
            height="348"
            loading="lazy"
          />
          <img
            className={styles.image}
            src="/src/assets/images/brands/4.png"
            alt=""
            width="423"
            height="423"
            loading="lazy"
          />
          <img
            className={styles.image}
            src="/src/assets/images/brands/5.png"
            alt=""
            width="291"
            height="291"
            loading="lazy"
          />
        </div>
        <div className={styles.innerBottom}>
          <img
            className={styles.image}
            src="/src/assets/images/brands/6.png"
            alt=""
            width="346"
            height="346"
            loading="lazy"
          />
          <img
            className={styles.image}
            src="/src/assets/images/brands/7.png"
            alt=""
            width="461"
            height="461"
            loading="lazy"
          />
          <img
            className={styles.image}
            src="/src/assets/images/brands/8.png"
            alt=""
            width="291"
            height="291"
            loading="lazy"
          />
          <img
            className={styles.image}
            src="/src/assets/images/brands/9.png"
            alt=""
            width="216"
            height="216"
            loading="lazy"
          />
          <img
            className={styles.image}
            src="/src/assets/images/brands/10.png"
            alt=""
            width="423"
            height="423"
            loading="lazy"
          />
        </div>
      </div>
    </Section>
  )
}

export default Brands