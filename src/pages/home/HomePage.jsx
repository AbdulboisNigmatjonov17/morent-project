import Banners from '../../components/banner/Banners'
import PopularCards from '../../components/cards/PopularCards'
import RecCards from '../../components/cards/RecCards'
import PickUp from '../../components/PIck-Up/PickUp'

const HomePage = () => {
  return (
    <>
      <Banners />
      <PickUp />
      <PopularCards/>
      <RecCards/>
    </>
  )
}

export default HomePage