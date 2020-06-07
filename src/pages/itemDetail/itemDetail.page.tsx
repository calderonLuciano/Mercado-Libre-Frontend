import React from 'react'
import { useParams } from 'react-router-dom';

const ItemDetailPage = () => {
  const {id} = useParams()
  return (
    <div>
      hello {id} itemDetail page
    </div>
  )
}

export default ItemDetailPage
