import Header from './header/Header'
import Footer from './footer/Footer'
const Wrapper = ({children, backgroundImage, text}) => {
  return (
    <>
      <Header backgroundImage={backgroundImage} text={text} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Wrapper
