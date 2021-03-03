import { combineReducers } from 'redux';

import { ImmutableObject } from 'seamless-immutable';

import auth, { InitalLoginTypes } from './auth';
import global, { InitalGlobalTypes } from './global';
import pokemon, { InitalPokemonTypes } from './pokemon';

export interface IReducers {
  auth: ImmutableObject<InitalLoginTypes>;
  global: ImmutableObject<InitalGlobalTypes>;
  pokemon: ImmutableObject<InitalPokemonTypes>;
}

const rootReducer = combineReducers({
  auth,
  global,
  pokemon,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
