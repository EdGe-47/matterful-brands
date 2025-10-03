import styles from './Contancts.module.scss'
import classNames from 'classnames'

const Contancts = (props) => {
  const {
    className
  } = props

  return (
    <div
      className={classNames(className, 'contancts')}
    >
      Contancts
    </div>
  )
}

export default Contancts