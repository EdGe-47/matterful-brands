import styles from './EmployeeCard.module.scss'

const EmployeeCard = (props) => {
  const {
    imgSrc,
    name,
    post,
    description
  } = props

  return (
    <article className={styles.employeeCard}>
      <img
        className={styles.avatar}
        src={imgSrc}
        alt=""
        width="100"
        height="100"
        loading="lazy"
      />
      <header className={styles.header}>
        <h2 className={styles.employeeName}>{name}</h2>
        <div className={styles.post}>{post}</div>
      </header>
      <div className={styles.description}>
        <p>
          {description}
        </p>
      </div>
    </article>
  )
}

export default EmployeeCard