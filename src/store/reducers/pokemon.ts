import { createActions, createReducer } from 'reduxsauce';
import Immutable, { ImmutableObject } from 'seamless-immutable';
import { AnyAction } from 'redux';

import { Error, ListPokemonsType, PokemonType } from '../../commom-types';

type GetPokemonsTypes = {
  getListPokemonsRequest(): AnyAction;
  getListPokemonsSuccess(listPokemons: ListPokemonsType): AnyAction;
  getListPokemonsFailed(error: Error): AnyAction;

  getDetailPokemonRequest(): AnyAction;
  getDetailPokemonSuccess(detailsPokemon: PokemonType): AnyAction;
  getDetailPokemonFailed(error: Error): AnyAction;

  selectPokemon(detailsPokemon: PokemonType): AnyAction;
};

export type InitalPokemonTypes = {
  error?: Error;
  loading: boolean;
  listPokemons: ListPokemonsType;
  detailsPokemon?: PokemonType;
};

type DetailsPokemon = {
  detailsPokemon: PokemonType;
};

export const INITIAL_STATE: ImmutableObject<InitalPokemonTypes> = Immutable({
  loading: false,
  listPokemons: { offset: 0, isLast: false, data: [] },
});

const request = (state = INITIAL_STATE) => state.set('loading', true);

const getListPokemonsSuccess = (
  state = INITIAL_STATE,
  listPokemons: ListPokemonsType,
) => state.merge({ ...listPokemons, loading: false });

const getListPokemonsFailed = (state = INITIAL_STATE, error: Error) =>
  state.merge({ error, loading: false });

const selectPokemon = (
  state = INITIAL_STATE,
  { detailsPokemon }: DetailsPokemon,
) => state.merge({ detailsPokemon });

const getDetailPokemonSuccess = (
  state = INITIAL_STATE,
  { detailsPokemon }: DetailsPokemon,
) => state.merge({ detailsPokemon, loading: false });

export const { Types, Creators } = createActions<AnyAction, GetPokemonsTypes>({
  getListPokemonsRequest: [],
  getListPokemonsSuccess: ['listPokemons'],
  getListPokemonsFailed: ['error'],

  getDetailPokemonRequest: [],
  getDetailPokemonSuccess: ['detailsPokemon'],
  getDetailPokemonFailed: ['error'],

  selectPokemon: ['detailsPokemon'],
});

export default createReducer(INITIAL_STATE, {
  [Types.GET_LIST_POKEMONS_REQUEST]: request,
  [Types.GET_LIST_POKEMONS_SUCCESS]: getListPokemonsSuccess,
  [Types.GET_LIST_POKEMONS_FAILED]: getListPokemonsFailed,

  [Types.GET_DETAIL_POKEMON_REQUEST]: request,
  [Types.GET_DETAIL_POKEMON_SUCCESS]: getDetailPokemonSuccess,
  [Types.GET_DETAIL_POKEMON_FAILED]: getListPokemonsFailed,

  [Types.SELECT_POKEMON]: selectPokemon,
});
