import HeaderTop from './HeaderTop'
import HeaderText from './HeaderText'
import Separator from './Separator'
//Styles
import styles from './Header.module.css'
const Header = ({backgroundImage, text}) => {
  return (
    <>
      <header
        style={{backgroundImage: `url(${backgroundImage})`}}
        className={`${backgroundImage === undefined ? '' : styles.container}`}
      >
        <HeaderTop />
        <HeaderText text={text} />
      </header>
      {backgroundImage === undefined ? null : <Separator />}
    </>
  )
}

export default Header
