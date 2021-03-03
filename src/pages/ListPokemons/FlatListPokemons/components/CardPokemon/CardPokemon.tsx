import { useNavigation } from '@react-navigation/native';
import { PokemonType } from 'commom-types';
import Image from 'components/Image';
import Text from 'components/Text';
import React, { FC, useCallback, useMemo } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';

import capitalizeFirstLetter from 'utils/capitalizeFirstLetter';

import { Creators as PokemonCreators } from 'store/reducers/pokemon';

import { CardPokemonStyled } from './styles';

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(
    {
      selectPokemon: PokemonCreators.selectPokemon,
    },
    dispatch,
  );

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type TPokemonWithProps = PropsFromRedux & PokemonType;

const CardPokemon: FC<TPokemonWithProps> = ({ name, image, selectPokemon }) => {
  const { navigate } = useNavigation();

  const memoNamePokemon = useMemo(() => capitalizeFirstLetter(name), []);

  const handleButton = useCallback(() => {
    selectPokemon({ name, image });
    navigate('DetailsPokemon');
  }, []);

  return (
    <CardPokemonStyled onPress={handleButton}>
      <Text fontSize="26px" fontWeight="700">
        {memoNamePokemon}
      </Text>
      <Image width={100} height={100} source={{ uri: image }} />
    </CardPokemonStyled>
  );
};

export default connector(CardPokemon);
