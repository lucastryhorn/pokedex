import { put, select, takeLatest } from 'redux-saga/effects';

import api from 'services/api';
import { getState } from 'store/utils';

import { PokemonType } from '../../../commom-types';

import { Creators as GlobalCreators } from '../../reducers/global';
import { Creators as PokemonCreators, Types } from '../../reducers/pokemon';

type PokemonParamsType = {
  pokemon: {
    detailsPokemon: PokemonType;
  };
};

function* getDetailPokemonRequest() {
  try {
    const {
      pokemon: { detailsPokemon },
    }: PokemonParamsType = yield select(getState);

    const res = yield api.get(`pokemon/${detailsPokemon.name}`);

    const newDetails = { ...detailsPokemon, ...res.data };

    yield put(PokemonCreators.getDetailPokemonSuccess(newDetails));
  } catch (error) {
    yield put(PokemonCreators.getDetailPokemonFailed(error));
    yield put(
      GlobalCreators.setModalRequest({ open: true, message: error.message }),
    );
  }
}

export default function* watch() {
  yield takeLatest(Types.GET_DETAIL_POKEMON_REQUEST, getDetailPokemonRequest);
}
