import { delay, put, takeLatest } from 'redux-saga/effects';
import { LoginType } from '../../../commom-types';

import { Creators as AuthCreators, Types } from '../../reducers/auth';
import { Creators as GlobalCreators } from '../../reducers/global';

type ParamsLogin = {
  data: LoginType;
};

function* getLoginRequest({ data: { email, password } }: ParamsLogin) {
  yield delay(1500);

  if (email === 'test@gmail.com' && password === '123456') {
    yield put(AuthCreators.getLoginSuccess({ user: email }));
  } else {
    yield put(AuthCreators.getLoginFailed());
    yield put(
      GlobalCreators.setModalRequest({
        open: true,
        message: 'Usuario/Senha erradas!',
      }),
    );
  }
}

export default function* watch() {
  yield takeLatest(Types.GET_LOGIN_REQUEST, getLoginRequest);
}
