import React from 'react'
import { useHistory } from 'react-router-dom'

const Item = ({item}) => {
  const history = useHistory();

  const handleItemClick = (id) =>{
    history.push(`/items/${id}`)
  }

  return (
    <div className="container__item" onClick={() => handleItemClick(item.id)}>
      <img className="item__image" src={item.picture} alt="imagen"></img>
      <div className="container__item__texts">
        <div className="container__items__texts__header">
        <span className="item__price">$ {item.price.amount}</span>
        <span className="item__location">Capital federal</span>
        </div>
        <p>{item.title}</p>
        <p>{item.condition}</p>
      </div>
      <br />
    </div>
  )
}

export default Item
