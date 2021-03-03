import { TextInputProps } from 'react-native';
import styled, { css } from 'styled-components/native';

interface ContainerView {
  isFocused?: boolean;
  isError?: boolean;
}

export const ContainerTextInput = styled.View<ContainerView>`
  width: 100%;
  height: 48px;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary};
  padding: 0 16px;

  ${({ isError, theme }) =>
    isError &&
    css`
      border-color: ${theme.colors.error};
    `}
`;

export const TextInputStyled = styled.TextInput.attrs<TextInputProps>(
  ({ theme }) => ({
    placeholderTextColor: theme.colors.primary,
  }),
)`
  flex: 1;
`;

export const ContainerMessage = styled.View`
  padding-left: 14px;
`;
