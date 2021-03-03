import React, { FC, useCallback, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { RootState } from 'store/reducers';

import { Creators as PokemonCreators } from 'store/reducers/pokemon';
import { ListPokemons } from './styles';

import CardPokemon from './components/CardPokemon';

const mapStateToProps = ({ pokemon }: RootState) => ({
  listPokemons: pokemon.getIn(['listPokemons', 'data']),
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(
    {
      getListPokemonsRequest: PokemonCreators.getListPokemonsRequest,
    },
    dispatch,
  );

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const FlatListPokemons: FC<PropsFromRedux> = ({
  getListPokemonsRequest,
  listPokemons,
}) => {
  useEffect(() => {
    getListPokemonsRequest();
  }, []);

  const onEndReached = useCallback(() => {
    getListPokemonsRequest();
  }, []);

  const keyExtractor = useCallback((_, index) => index.toString(), []);

  const renderItem = useCallback(({ item }) => {
    return <CardPokemon {...item} />;
  }, []);

  return (
    <ListPokemons
      data={listPokemons}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      onEndReached={onEndReached}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default connector(FlatListPokemons);
