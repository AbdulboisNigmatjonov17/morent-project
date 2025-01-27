import React from 'react'
import StateImages from '../../components/state-img/StateImages'
import Comment from '../../components/comments/Comment'
import { useParams } from 'react-router-dom'
import PopularCards from '../../components/cards/PopularCards'
import Cartext from '../../components/cartext/cartext'

const ProductPage = () => {

  const {id} = useParams();

  return (
    <>
      <div className='my-5'>
        <StateImages />
        <Cartext />
      </div>
      <div>
        ID: {id}
      </div>
      <Comment/>
      <PopularCards/>
    </>
  )
}

export default ProductPage