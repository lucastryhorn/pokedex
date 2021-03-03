import styled from 'styled-components/native';

export const CardPokemonStyled = styled.TouchableOpacity`
  width: 335px;
  height: 115px;
  background-color: ${({ theme }) => theme.colors.white};
  margin-bottom: 30px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  overflow: hidden;
  elevation: 1px;
`;
