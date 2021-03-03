import React, { FC } from 'react';

import Text from '../Text';

import { ContainerButton, TouchableOpacityStyledProps } from './syles';

interface ButtonProps extends TouchableOpacityStyledProps {
  children: string;
  loading?: boolean;
  textColor?: string;
}

const Button: FC<ButtonProps> = ({
  children,
  loading,
  textColor,
  bgColor,
  ...rest
}) => {
  return (
    <ContainerButton disabled={loading} bgColor={bgColor} {...rest}>
      <Text fontSize={'16px'} color={textColor} lineHeight="20px">
        {loading ? 'AGUARDE' : children}
      </Text>
    </ContainerButton>
  );
};

export default Button;
