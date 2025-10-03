import styles from './Logo.module.scss'
import classNames from 'classnames';

const Logo = (props) => {
  const {
    className,
    loading = 'lazy',
  } = props

  const title = 'Home'

  return (
      <a
        href="/"
        title={title}
        aria-label={title}
      >
        <img
          className={classNames(className, `${styles.logo}`)}
          src="/matterful-logo.svg"
          alt=""
          width="460"
          height="91"
          loading={loading}
        />
      </a>
  )
}

export default Logo