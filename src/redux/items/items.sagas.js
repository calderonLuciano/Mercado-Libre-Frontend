import { takeLatest, put, all, call } from 'redux-saga/effects';

import ItemsActionTypes from './items.types';

import {
  getItemsSuccess,
  getItemsFailure,
  getItemSuccess,
  getItemFailure,
  getItemsGlobalFailure
} from './items.actions';

import {
  ItemService
} from '../../services/itemService';

export function* searchItemsSaga(action) {
  const itemService = new ItemService();
  try{
    const response = yield itemService.searchItems(action.payload);
    if(response){
      yield put(getItemsSuccess(response.results));
    }else {
      yield put(getItemsFailure(response.error));
    } 
  } catch (error) {
    yield put(getItemsGlobalFailure(error.message));
  }
}

export function* onGetItemsStart() {
  yield takeLatest(ItemsActionTypes.GET_ITEMS_START, searchItemsSaga);
}

export function* getItemSaga(action) {
  const itemService = new ItemService();
  try{
    const response = yield itemService.getItemDetail(action.payload);
    if(response){
      yield put(getItemSuccess(response.results));
    }else {
      yield put(getItemFailure(response.error));
    } 
  } catch (error) {
    yield put(getItemsGlobalFailure(error));
  }
}

export function* onGetItemStart() {
  yield takeLatest(ItemsActionTypes.GET_ITEM_START, getItemSaga);
}

export function* itemsSagas() {
  yield all([
    call(onGetItemsStart),
    call(onGetItemStart)
  ]);
}
