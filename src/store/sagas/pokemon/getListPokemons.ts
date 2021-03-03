import { put, select, takeLatest } from 'redux-saga/effects';
import api from 'services/api';

import { getState } from 'store/utils';

import { INITIAL_REGION_KANTO, LIMIT, URL_POKEMON } from 'utils/constants';

import { ListPokemonsType, PokemonType } from '../../../commom-types';

import { Creators as GlobalCreators } from '../../reducers/global';
import { Creators as PokemonCreators, Types } from '../../reducers/pokemon';

type PokemonParamsType = {
  pokemon: {
    listPokemons: ListPokemonsType;
  };
};

function* getListPokemonsRequest() {
  try {
    const {
      pokemon: {
        listPokemons: { offset, data },
      },
    }: PokemonParamsType = yield select(getState);

    const res = yield api.get('pokemon', { params: { offset, limit: LIMIT } });

    const newOffset = offset + 10;
    const isLast = data.length === INITIAL_REGION_KANTO;

    const newData = [...data, ...res.data?.results];

    const dataWithImage = newData?.map((item: PokemonType, index: number) => ({
      ...item,
      image: `${URL_POKEMON}/${index + 1}.png`,
    }));

    yield put(
      PokemonCreators.getListPokemonsSuccess({
        offset: newOffset,
        isLast,
        data: dataWithImage,
      }),
    );
  } catch (error) {
    yield put(PokemonCreators.getListPokemonsFailed(error));
    yield put(
      GlobalCreators.setModalRequest({ open: true, message: error.message }),
    );
  }
}

export default function* watch() {
  yield takeLatest(Types.GET_LIST_POKEMONS_REQUEST, getListPokemonsRequest);
}
