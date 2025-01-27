import Banners from '../../components/banner/Banners'
// import Card from '../../components/cards/card'
import PopularCards from '../../components/cards/PopularCards'
import RecCards from '../../components/cards/RecCards'

const HomePage = () => {
  return (
    <>
      <Banners />
      {/* <Card /> */}
      <PopularCards/>
      <RecCards/>
    </>
  )
}

export default HomePage