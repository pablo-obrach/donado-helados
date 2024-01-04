import {useState, useRef, useEffect} from 'react'
//Assets
// import {sliderData} from '../../mock/sliderData'
import sliderSaboresData from '../../mock/sliderSaboresData'
//Styles
import styles from './Slider.module.css'
import {Link} from 'react-router-dom'
const Slider = () => {
  const listRef = useRef()
  const [currentIndex, setCurrentIndex] = useState(0)

  /*
    PARADIGMA: currentIndex compararlo con el que este actual y si es diferente +1 sino -1 O 0
    y que esto se repita cada 4 segundos por ej.
  */

  //ALGORITMO
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < sliderSaboresData.length - 1) {
        setCurrentIndex(currentIndex + 1)
      } else {
        setCurrentIndex(0)
      }
    }, 4000)
    return () => clearInterval(interval)
  }, [currentIndex])

  const scrollToImage = direction => {
    if (direction === 'prev') {
      setCurrentIndex(curr => {
        const isFirstSlide = currentIndex === 0
        return isFirstSlide ? 0 : curr - 1
      })
    } else {
      const isLastSlide = currentIndex === sliderSaboresData.length - 1
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
            <div className={styles.slideImgContainer} ref={listRef}>
              {sliderSaboresData.map((item, index) => (
                <Link
                  key={item.id}
                  to={`/sabores/${item.type}`}
                  className={styles.link}
                >
                  <div
                    key={item.id}
                    // style={{
                    //   display: index === currentIndex ? 'flex' : 'none',
                    //   alignItems: 'center',
                    //   justifyContent: 'center'
                    // }}
                    className={` ${
                      index === currentIndex
                        ? styles.slideImgActive
                        : styles.slideImgInactive
                    }`}
                  >
                    <img src={item.src} alt='sabores especiales' />
                    <p>{item.name}</p>
                  </div>
                </Link>
              ))}
            </div>
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
        {sliderSaboresData.map((_, i) => (
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
