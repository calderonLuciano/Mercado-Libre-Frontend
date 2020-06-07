import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const SearchInput = () => {
  const [searchInput, setSearchInput] = useState('');
  const history = useHistory();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setSearchInput(event.target.value);
  }

  const handleClick = () =>{
    history.push({
      pathname: '/items',
      search: `?q=${searchInput}`
    })
  }

  return (
    <div className="navbar__container__input">
      <input 
        type="text" 
        className="navbar__input" 
        placeholder="Nunca dejes de buscar"
        onChange= {handleInputChange}
        defaultValue = {searchInput}
      />
      <button onClick= {handleClick} className="navbar__button">
        <div className="navbar__button__icon" role="img">
        </div>
      </button>
    </div>
      
  )
}

export default SearchInput
