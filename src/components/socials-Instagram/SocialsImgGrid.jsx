import {useState, useEffect} from 'react'
//*Components
import BtnAction from '../buttons/btnAction'
//*Assets
import socialImgData from '../../../public/socialsImgData.json'

//*Styles
import styles from './SocialsImgGrid.module.css'
const SocialsImgGrid = () => {
  const [itemsToShow, setItemsToShow] = useState(4)
  const [item, setItems] = useState([])

  useEffect(() => {
    setItems(socialImgData.slice(0, itemsToShow))
  }, [itemsToShow])

  const handleLoadMore = () => {
    setItemsToShow(prev => prev + 4)
  }

  const handleLoadLess = () => {
    setItemsToShow(prev => prev - 4)
  }

  const goToLink = link => {
    window.open(link, '_blank')
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.imgsContainer}>
        {item
          ? item.map((item, index) => (
              <img key={index} src={item.src} alt={item.tag} />
            ))
          : null}
      </div>
      <div className={styles.btnsContainer}>
        <BtnAction
          onClick={() => handleLoadMore()}
          bgColor={'#94CCCC'}
          title={'CARGAR MAS'}
        />
        <BtnAction
          onClick={() => handleLoadLess()}
          bgColor={'#94CCCC'}
          title={'CARGAR MENOS'}
        />
        <BtnAction
          onClick={() => goToLink('https://www.instagram.com/donado.fabrica/')}
          bgColor={'#037189'}
          title={'SEGUINOS EN INSTAGRAM'}
        />
      </div>
    </div>
  )
}

export default SocialsImgGrid
