import {useParams} from 'react-router-dom'
import {useState} from 'react'
import {saboresData} from '../../../mock/saboresData'
import UseAnimations from 'react-useanimations'
//*Assets
import plusToX from 'react-useanimations/lib/plusToX'
//*Components
import Wrapper from '../../wrapper/Wrapper'
//*Styles
import styles from './Sabores.module.css'

const Sabores = () => {
  const {sabor} = useParams()
  const [selected, setSelected] = useState(null)

  const handleSingleSelection = currentId => {
    setSelected(currentId === selected ? null : currentId)
  }

  return (
    <>
      <Wrapper>
        <div className={styles.mainContainer}>
          <h1 className={styles.mainTitle}>{sabor}</h1>
          {saboresData && saboresData.length > 0 ? (
            saboresData
              .filter(item => item.type === sabor)
              .map(item => (
                <div key={item.ID} className={styles.item}>
                  <div className={styles.title}>
                    <h2>{item.title}</h2>
                    <UseAnimations
                      animation={plusToX}
                      size={20}
                      speed={2}
                      onClick={() => handleSingleSelection(item.ID)}
                    />
                  </div>
                  {selected === item.ID && (
                    <div className={styles.description}>
                      <p>{item.description}</p>
                    </div>
                  )}
                </div>
              ))
          ) : (
            <h2>No hay sabores</h2>
          )}
        </div>
      </Wrapper>
    </>
  )
}

export default Sabores
