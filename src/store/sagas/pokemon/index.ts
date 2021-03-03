import { all, fork } from 'redux-saga/effects';

import watchGetListPokemonsRequest from './getListPokemons';
import wathGetDetailPokemon from './getDetailPokemon';

function* pokemonSagas() {
  yield all([fork(watchGetListPokemonsRequest), fork(wathGetDetailPokemon)]);
}

export default pokemonSagas;
