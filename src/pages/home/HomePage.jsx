import Banners from '../../components/banner/Banners'
// import Card from '../../components/cards/card'
import Comment from '../../components/comments/Comment'
import StateImages from '../../components/state-img/StateImages'
import PopularCards from '../../components/cards/PopularCards'

const HomePage = () => {
  return (
    <>
      <Banners />
      <StateImages />
      <Comment />
      {/* <Card /> */}
      <PopularCards/>
    </>
  )
}

export default HomePage