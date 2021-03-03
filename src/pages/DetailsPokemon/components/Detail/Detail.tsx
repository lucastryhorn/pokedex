import React, { FC, useCallback, useEffect, useMemo } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { connect, ConnectedProps } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';

import { RootState } from 'store/reducers';
import { Creators as PokemonCreators } from 'store/reducers/pokemon';

import { PokemonType } from 'commom-types';
import Image from 'components/Image';
import Text from 'components/Text';

import capitalizeFirstLetter from 'utils/capitalizeFirstLetter';
import {
  Badges,
  Body,
  ButtonBack,
  HeaderPokemon,
  Stats,
  ViewRow,
  ViewTitle,
} from './styles';

const mapStateToProps = ({ pokemon }: RootState) => ({
  detailsPokemon: pokemon.getIn(['detailsPokemon']),
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(
    {
      getDetailPokemonRequest: PokemonCreators.getDetailPokemonRequest,
    },
    dispatch,
  );

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type PokeDetail = {
  detailsPokemon?: PokemonType | object;
};

type PokemonWithProps = PropsFromRedux & PokeDetail;

const Detail: FC<PokemonWithProps> = ({
  getDetailPokemonRequest,
  detailsPokemon,
}) => {
  const { goBack } = useNavigation();
  const { colors } = useTheme();

  useEffect(() => {
    getDetailPokemonRequest();
  }, []);

  const memoNamePokemon = useMemo(() => {
    if (detailsPokemon?.name) {
      return capitalizeFirstLetter(detailsPokemon.name);
    }
    return '';
  }, [detailsPokemon?.name]);

  const handleGoBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <>
      <HeaderPokemon
        type={detailsPokemon?.types && detailsPokemon?.types[0].type.name}>
        <ButtonBack onPress={handleGoBack}>
          <Icon name="arrow-left" size={30} color={colors.white} />
        </ButtonBack>

        <Image
          width={100}
          height={100}
          source={{ uri: detailsPokemon?.image }}
        />
        <ViewTitle>
          <Text fontSize="32px" color={colors.white}>
            {memoNamePokemon}
          </Text>
          <ViewRow>
            {detailsPokemon?.types?.map(item => (
              <Badges type={item.type.name}>
                <Text fontWeight="700" color={colors.white}>
                  {capitalizeFirstLetter(item.type.name)}
                </Text>
              </Badges>
            ))}
          </ViewRow>
        </ViewTitle>
      </HeaderPokemon>
      <Body>
        {detailsPokemon?.stats?.map(item => (
          <Stats
            type={detailsPokemon.types && detailsPokemon?.types[0].type.name}>
            <Text fontWeight="500">
              {capitalizeFirstLetter(item.stat.name)}
            </Text>
            <Text>{item.base_stat}</Text>
          </Stats>
        ))}
      </Body>
    </>
  );
};

export default connector(Detail);
