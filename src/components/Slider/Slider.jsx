import styles from './Slider.module.scss'
import SliderNavigation from '@/components/Slider/SliderNavigation';
import React, {useState, useRef, useEffect} from 'react';

const Slider = (props) => {
  const {
    children,
  } = props

  const [ currentSliderId, setCurrentSliderId] = useState(1)
  const [ transitionEnabled, setTransitionEnabled] = useState(true)
  const [ isPaused, setIsPaused ] = useState(false)

  const touchStartX = useRef(0)
  const touchEndX = useRef(0)
  const minSwipeDistance = 50

  const onTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX
  }

  const onTouchMove = (event) => {
    touchEndX.current = event.touches[0].clientX
  }

  const onTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    if (distance > minSwipeDistance) {
      nextSlider();
    } else if (distance < -minSwipeDistance) {
      prevSlider();
    }
  };

  const slides = [
    children[children.length - 1],
    ...children,
    children[0],
  ]

  const sliderRef = useRef(null)
  const isTransitioning = useRef(false)

  const handleTransitionEnd = () => {
    isTransitioning.current = false

    if (currentSliderId === slides.length - 1) {
      setTransitionEnabled(false)
      setCurrentSliderId(1)
    }

    if (currentSliderId === 0) {
      setTransitionEnabled(false)
      setCurrentSliderId(slides.length - 2)
    }
  }

  const prevSlider = () => {
    if (isTransitioning.current) {
      return
    }

    setTransitionEnabled(true)
    setCurrentSliderId((prev) => prev - 1 )
    isTransitioning.current = true
  }

  const nextSlider = () => {
    if (isTransitioning.current) {
      return
    }

    setTransitionEnabled(true)
    setCurrentSliderId((next) => next + 1 )
    isTransitioning.current = true
  }

  useEffect(() => {
    if (isPaused) {
      return
    }

    const interval = setInterval(() => {
      if (transitionEnabled){
        nextSlider()
      }
    }, 6000)

    return () => clearInterval(interval)
  }, [isPaused, transitionEnabled])

  return (
    <div
      className={styles.slider}
      onTouchStart={(event) => {
        onTouchStart(event)
        setIsPaused(true)
      }}
      onTouchMove={onTouchMove}
      onTouchEnd={(event) => {
        onTouchEnd(event)
        setIsPaused(false)
      }}
      onMouseEnter={() => {setIsPaused(true)}}
      onMouseLeave={() => {setIsPaused(false)}}
    >
      <ul
        ref={sliderRef}
        className={styles.sliderList}
        style={{
          transform: `translateX(-${currentSliderId * 100}%)`,
          transition: transitionEnabled ? 'transform 0.4s ease-in-out' : 'none',
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {slides.map((slide, index) => (
          <li className={styles.sliderItem} key={index}>
            {slide}
          </li>
        ))}
      </ul>

      <SliderNavigation
        onPrev={prevSlider}
        onNext={nextSlider}
      />
    </div>
  )
}

export default Slider