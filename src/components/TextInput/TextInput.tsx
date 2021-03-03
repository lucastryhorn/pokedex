import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
  useRef,
} from 'react';
import { TextInputProps, TouchableOpacity, View } from 'react-native';
import { useTheme } from 'styled-components';
import Icon from 'react-native-vector-icons/Feather';

import Text from '../Text';

import {
  ContainerMessage,
  ContainerTextInput,
  TextInputStyled,
} from './styles';

interface InputProps extends TextInputProps {
  icon?: string;
  error?: string;
  placeholderTop?: string;
  colorIcon?: string;
  onPressIcon?(): void;
}

interface InputRef {
  focus(): void;
}

const TextInput: ForwardRefRenderFunction<InputRef, InputProps> = (
  {
    icon,
    defaultValue,
    error,
    placeholderTop,
    colorIcon,
    onPressIcon,
    ...rest
  },
  ref,
) => {
  const inputElementRef = useRef<any>(null);
  const { colors } = useTheme();

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current?.focus();
    },
  }));

  return (
    <View>
      <ContainerMessage>
        <Text fontSize="12px" lineHeight="30px">
          {placeholderTop}
        </Text>
      </ContainerMessage>

      <ContainerTextInput isError={!!error}>
        <TextInputStyled ref={inputElementRef} {...rest} />
        {icon && (
          <TouchableOpacity onPress={onPressIcon}>
            <Icon name={icon} size={18} color={colorIcon || colors.primary} />
          </TouchableOpacity>
        )}
      </ContainerTextInput>
      {error && (
        <ContainerMessage>
          <Text fontSize="12px" lineHeight="30px" color={colors.error}>
            {error}
          </Text>
        </ContainerMessage>
      )}
    </View>
  );
};

export default forwardRef(TextInput);
