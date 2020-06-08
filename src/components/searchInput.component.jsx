import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import UiActionTypes from '../redux/ui/ui.types'
import {selectSearchText} from '../redux/ui/ui.selectors'

const SearchInput = () => {
 
  const history = useHistory();
  const dispatch = useDispatch();
  const searchInput = useSelector(selectSearchText);

  const handleInputChange = (event) => {
    dispatch({type: UiActionTypes.CHANGE_SEARCH, payload: event.target.value})
  };

  const handleClick = (event) => {
    event.preventDefault();
    history.push({
      pathname: "/items",
      search: `?q=${searchInput}`,
    });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      history.push({
        pathname: "/items",
        search: `?q=${searchInput}`,
      });
    }
  };

  return (
    <div className="navbar__container__input">
      <input
        type="text"
        className="navbar__input"
        placeholder="Nunca dejes de buscar"
        onChange={handleInputChange}
        defaultValue={searchInput}
        value={searchInput}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleClick} className="navbar__button">
        <div className="navbar__button__icon" role="img"></div>
      </button>
    </div>
  );
};

export default SearchInput;
