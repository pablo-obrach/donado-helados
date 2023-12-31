//*Components
import Wrapper from '../wrapper/Wrapper'
import Slider from '../slider/Slider'
import FollowUs from '../socials-Instagram/FollowUs'
import SocialsInfo from '../socials-Instagram/SocialsInfo'
import SocialsImgGrid from '../socials-Instagram/SocialsImgGrid'
//*Styles
import './Home.module.css'
const Home = () => {
  return (
    <Wrapper
      text={'DESCUBRE LA MAGIA EN CADA CUCHARADA'}
      backgroundImage={'src/assets/banners/pbackground.webp'}
    >
      <Slider />
      <FollowUs social='@DONADO.FABRICA' />
      <SocialsInfo />
      <SocialsImgGrid />
    </Wrapper>
  )
}

export default Home
