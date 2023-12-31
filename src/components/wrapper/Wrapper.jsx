import Header from './header/Header'
import Footer from './footer/Footer'
const Wrapper = ({children, backgroundImage, text}) => {
  return (
    <>
      <Header backgroundImage={backgroundImage} text={text} />
      {children}
      <Footer />
    </>
  )
}

export default Wrapper
