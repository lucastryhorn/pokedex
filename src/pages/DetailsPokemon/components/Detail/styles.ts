import { ViewProps } from 'react-native';
import styled from 'styled-components/native';

interface IView extends ViewProps {
  type?: string;
}

export const HeaderPokemon = styled.View<IView>`
  flex-direction: row;
  align-items: center;
  background-color: ${({ type, theme }) =>
    theme.colors.backgroundTypes[type] || 'white'};
  padding: 40px 60px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const ButtonBack = styled.TouchableOpacity`
  position: absolute;
  top: 20px;
  left: 17px;
`;

export const ViewTitle = styled.View`
  margin-left: 25px;
`;

export const ViewRow = styled.View`
  flex-direction: row;
`;

export const Badges = styled.View<IView>`
  background-color: ${({ type, theme }) => theme.colors.types[type] || 'white'};
  padding: 5px 10px;
  border-radius: 3px;
  margin-right: 5px;
`;

export const Body = styled.View`
  flex: 1;
  padding: 10px 50px;
`;

export const Stats = styled.View<IView>`
  flex-direction: row;
  margin-bottom: 10px;
  border-width: 1px;
  justify-content: space-between;
  padding: 5px;
  border-radius: 3px;
  border-color: ${({ type, theme }) => theme.colors.types[type] || 'white'};
`;
