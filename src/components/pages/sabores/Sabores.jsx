import {useParams} from 'react-router-dom'
import {useState} from 'react'
import {saboresData} from '../../../mock/saboresData'
import {saboresTitle} from '../../../mock/saboresTitles'
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
    <div className={styles.container}>
      <Wrapper>
        <article className={styles.mainContainer}>
          <h1 className={styles.mainTitle}>
            {saboresTitle.map(item => (item.type === sabor ? item.name : null))}
          </h1>
          <div className={styles.divider}>
            {saboresData && saboresData.length > 0 ? (
              saboresData
                .filter(item => item.type === sabor)
                .map(item => (
                  <div key={item.ID} className={styles.item}>
                    <div className={styles.title}>
                      <h2>{item.title}</h2>
                      <div>
                        <UseAnimations
                          animation={plusToX}
                          size={20}
                          speed={2}
                          onClick={() => handleSingleSelection(item.ID)}
                        />
                      </div>
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
        </article>
      </Wrapper>
    </div>
  )
}

export default Sabores
