import Text from 'components/Text';
import React, { FC } from 'react';

import FlatListPokemons from './FlatListPokemons';

import { ContainerListPokemon } from './styles';

const ListPokemons: FC = () => {
  return (
    <ContainerListPokemon>
      <Text fontSize="32px">Pokédex</Text>
      <FlatListPokemons />
    </ContainerListPokemon>
  );
};

export default ListPokemons;
