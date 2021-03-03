import React, { FC } from 'react';

import Detail from './components/Detail';

import { ContainerDetailPokemon } from './styles';

const DetailsPokemon: FC = () => {
  return (
    <ContainerDetailPokemon>
      <Detail />
    </ContainerDetailPokemon>
  );
};

export default DetailsPokemon;
