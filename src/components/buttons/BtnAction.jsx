//Styles
import styles from './btnAction.module.css'
const BtnAction = ({onClick, title, bgColor, width}) => {
  return (
    <button
      className={styles.btn}
      style={{backgroundColor: bgColor, width: width}}
      onClick={onClick}
    >
      {title}
    </button>
  )
}

export default BtnAction
