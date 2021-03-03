import { TouchableOpacityProps } from 'react-native';

import styled, { css } from 'styled-components/native';

export interface TouchableOpacityStyledProps extends TouchableOpacityProps {
  bgColor?: string;
  width?: string;
  height?: string;
}

export const ContainerButton = styled.TouchableOpacity<TouchableOpacityStyledProps>`
  background-color: ${({ bgColor, theme }) => bgColor || theme.colors.primary};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}
  ${({ height }) =>
    height &&
    css`
      height: ${height};
    `};
`;
