import styles from './SliderNavigation.module.scss'
import classNames from 'classnames'

const SliderNavigation = (props) => {
  const {
    onPrev,
    onNext,
  } = props

  return (
    <div className={styles.sliderNavigation}>
      <button
        className={styles.prevButton}
        type="button"
        onClick={onPrev}
      >
        <svg className={styles.prevButtonImage}width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.42029 13.8203L16.6156 27.0156L17.9351 25.6961L6.05935 13.8203L17.9351 1.94453L16.6156 0.625L3.42029 13.8203Z" fill="#CCCCCC"/>
        </svg>
      </button>
      <button
        className={styles.nextButton}
        type="button"
        onClick={onNext}
      >
        <svg className={styles.nextButtonImage} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.42029 13.8203L16.6156 27.0156L17.9351 25.6961L6.05935 13.8203L17.9351 1.94453L16.6156 0.625L3.42029 13.8203Z" fill="#CCCCCC"/>
        </svg>
      </button>
    </div>
  )
}

export default SliderNavigation