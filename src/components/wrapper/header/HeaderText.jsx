//Styles
import styles from './HeaderText.module.css'
const HeaderText = ({text}) => {
  return (
    <div className={styles.containerText}>
      <h1>{text}</h1>
    </div>
  )
}

export default HeaderText
