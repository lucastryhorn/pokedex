import styled, { css } from 'styled-components/native';
import FastImage, { FastImageProps } from 'react-native-fast-image';

export interface IFastImageProps extends FastImageProps {
  width: number;
  height: number;
}

export const ImageStyled = styled(FastImage)<IFastImageProps>`
  ${({ width }) =>
    width &&
    css`
      width: ${width}px;
    `}

  ${({ height }) =>
    height &&
    css`
      height: ${height}px;
    `}
`;
