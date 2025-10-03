import styles from './Section.module.scss'
import classNames from 'classnames'

const Section = (props) => {
  const {
    className,
    logoImg,
    modeContainer = 'container', // 'container' (default) | 'small-container' |'large-container' | 'container-black'
    title,
    titleId,
    description,
    classNameBody,
    modeBg = 'white', // 'white' (default) | 'black'
    children,
  } = props

  return (
    <section
      className={styles[modeBg]}
      aria-labelledby={titleId}
    >
      <div className={classNames(className, `${styles.section} ${modeContainer}`)}>
        <header className={styles.header}>
          {logoImg && (
            <img
              className={styles.logo}
              src="/src/assets/images/logo.svg"
              alt=""
              width="90"
              height="90"
              loading="lazy"
            />
          )}
          <h2 className={styles.title} id={titleId}>
            {title}
          </h2>
          {description && (
            <div className={styles.description}>
              <p>{description}</p>
            </div>
          )}
        </header>
        <div className={classNames(styles['section-body'], classNameBody)}>
          {children}
        </div>
      </div>
    </section>
  )
}

export default Section