import React from 'react'
import StateImages from '../../components/state-img/StateImages'
import Comment from '../../components/comments/Comment'
import PopularCards from '../../components/cards/PopularCards'
import Cartext from '../../components/cartext/cartext'

const ProductPage = () => {

  return (
    <>
      <div className='my-5'>
        <StateImages />
        {/* <Cartext /> */}
      </div>
      <Comment />
      <PopularCards />
    </>
  )
}

export default ProductPage