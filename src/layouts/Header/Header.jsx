import styles from './Header.module.scss'
import Logo from '@/components/Logo';

const Header = () => {

  return (
    <header
      className={styles.header}
    >
      <div
        className={styles.wrapper}
      >
        <Logo
          className={styles.logo}
          loading="eager"
        />
        <div className={styles.description}>
          <p>
            We are an all-inclusive digital branding agency that specializes in helping purpose-driven food companies through our brand pollination™ process.
          </p>
        </div>
      </div>
    </header>
  )
}

export default Header