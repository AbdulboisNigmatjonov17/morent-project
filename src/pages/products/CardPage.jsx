import React from 'react'
import StateImages from '../../components/state-img/StateImages'
import Comment from '../../components/comments/Comment'
import PopularCards from '../../components/cards/PopularCards'
import Cartext from '../../components/cartext/cartext'

const ProductPage = () => {

  return (
    <>
      <div className='my-5 w-full flex justify-between'>
        <StateImages />
        <div className='w-[50%]'>
<<<<<<< HEAD
          <Cartext />
=======
                 <Cartext />
>>>>>>> 80bcf0397d6d642d2ffb56b4fb60cd1ffefff497
        </div>
      </div>
      <Comment />
      <PopularCards />
    </>
  )
}

export default ProductPage