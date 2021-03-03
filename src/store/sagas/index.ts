import { all, fork } from 'redux-saga/effects';

import authSagas from './auth';
import pokemonSagas from './pokemon';

function* rootSaga() {
  yield all([fork(authSagas), fork(pokemonSagas)]);
}

export default rootSaga;
