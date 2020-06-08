import { all, call } from 'redux-saga/effects';
import { itemsSagas } from './items/items.sagas.js';

export default function* rootSaga() {
  yield all([call(itemsSagas)]);
}