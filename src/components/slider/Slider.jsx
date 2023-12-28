import {useState, useEffect, useRef} from 'react'
//Assets
import {sliderData} from '../../assets/sliderData'
//Styles
import styles from './Slider.module.css'
const Slider = () => {
  const listRef = useRef()
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const listNode = listRef.current
    const imgNode = listNode.querySelectorAll('li > img')[currentIndex]

    if (imgNode) {
      imgNode.scrollIntoView({behaviour: 'smooth'})
    }
  }, [currentIndex])

  const scrollToImage = direction => {
    if (direction === 'prev') {
      setCurrentIndex(curr => {
        const isFirstSlide = currentIndex === 0
        return isFirstSlide ? 0 : curr - 1
      })
    } else {
      const isLastSlide = currentIndex === sliderData.length - 1
      if (!isLastSlide) {
        setCurrentIndex(curr => curr + 1)
      }
    }
  }

  const goToslide = slideIndex => {
    setCurrentIndex(slideIndex)
  }

  return (
    <div className={styles.container}>
      <div className={styles.sliderTitle}>
        <h2>SABORES ESPECIALES</h2>
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.sliderContainer}>
          <div
            className={styles.leftArrow}
            onClick={() => scrollToImage('prev')}
          >
            &#8249;
          </div>

          <div className={styles.containerImgs}>
            <ul className={styles.ulContainer} ref={listRef}>
              {sliderData.map(item => (
                <li key={item.id}>
                  <img src={item.src} alt='sabores especiales' />
                </li>
              ))}
            </ul>
          </div>
          <div
            className={styles.rigthArrow}
            onClick={() => scrollToImage('next')}
          >
            &#8250;
          </div>
        </div>
      </div>
      <div className={styles.dotsContainer}>
        {sliderData.map((_, i) => (
          <div
            key={i}
            className={`${styles.dotsContainerItem} ${
              i === currentIndex ? styles.active : ''
            }`}
            onClick={() => goToslide(i)}
          >
            &#9865;
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slider
