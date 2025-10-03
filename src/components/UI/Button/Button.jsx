import styles from './Button.module.scss'
import classNames from 'classnames'

const Button = (props) => {
  const {
    label,
    mode = 'transparent', // transparent (default) | transparent-white
    modeSize = 'medium' // medium (default) | big
  } = props

  return (
    <a
      className={classNames(styles.button, styles[mode], styles[modeSize])}
      href="/"
    >
      {label}
    </a>
  )
}

export default Button