import HeaderTop from './HeaderTop'
import HeaderText from './HeaderText'
import Separator from './Separator'
//Styles
import styles from './Header.module.css'
const Header = () => {
  return (
    <>
      <div className={styles.container}>
        <HeaderTop />
        <HeaderText text='DESCUBRE LA MAGIA EN CADA CUCHARADA' />
      </div>
      <Separator />
    </>
  )
}

export default Header
