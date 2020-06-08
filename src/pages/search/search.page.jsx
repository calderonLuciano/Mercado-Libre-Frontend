import React from 'react'
import UiActionTypes from '../../redux/ui/ui.types';
import { useDispatch } from 'react-redux';

const SearchPage = () => {
  const dispatch = useDispatch();
  dispatch({type: UiActionTypes.CHANGE_PAGE, payload: 'search'});
  return (
    <>
    
    </>
  )
}

export default SearchPage
