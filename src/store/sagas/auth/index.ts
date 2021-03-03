import { all, fork } from 'redux-saga/effects';

import watchGetLoginRequest from './loginRequest';

function* authSagas() {
  yield all([fork(watchGetLoginRequest)]);
}

export default authSagas;
