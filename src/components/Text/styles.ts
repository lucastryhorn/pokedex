import { TextProps } from 'react-native';

import styled, { css } from 'styled-components/native';

export interface TextStyledProps extends TextProps {
  fontSize?: string;
  color?: string;
  lineHeight?: string;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  semiBold?: boolean;
  textDecoration?:
    | 'none'
    | 'underline'
    | 'line-through'
    | 'underline line-through';
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
}

export const TextStyled = styled.Text<TextStyledProps>`
  color: ${({ color, theme }) => color || theme.colors.text};

  ${({ fontSize }) =>
    fontSize &&
    css`
      font-size: ${fontSize};
    `};

  ${({ lineHeight }) =>
    lineHeight &&
    css`
      line-height: ${lineHeight};
    `};

  ${({ textAlign }) =>
    textAlign &&
    css`
      text-align: ${textAlign};
    `};

  ${({ textDecoration }) =>
    textDecoration &&
    css`
      text-decoration: ${textDecoration};
    `};

  ${({ fontWeight }) =>
    fontWeight &&
    css`
      font-weight: ${fontWeight};
    `}
`;
