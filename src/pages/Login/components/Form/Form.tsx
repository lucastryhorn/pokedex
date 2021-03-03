import React, { useCallback, useRef, useState } from 'react';
import { Controller, UseFormMethods } from 'react-hook-form';
import { TextInput as TextInputNative } from 'react-native';
import { connect, ConnectedProps } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { useTheme } from 'styled-components';

import { LoginType } from 'commom-types';

import TextInput from 'components/TextInput';
import Button from 'components/Button';

import { withForm } from 'hocs/withForm';
import defaultValues, { validationSchema } from 'schema/login';

import { RootState } from 'store/reducers';
import { Creators as AuthCreators } from 'store/reducers/auth';

import { ViewButton } from './styles';

const mapStateToProps = ({ auth }: RootState) => ({
  loading: auth.getIn(['loading']),
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(
    {
      loginRequest: AuthCreators.getLoginRequest,
    },
    dispatch,
  );

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export type LoginFormProps = PropsFromRedux & UseFormMethods;

const Form = ({
  handleSubmit,
  errors,
  control,
  setValue,
  loginRequest,
  loading,
}: LoginFormProps) => {
  const { colors } = useTheme();
  const [show, setShow] = useState(false);
  const refPassword = useRef<TextInputNative>(null);

  const setShowPassword = useCallback(() => {
    setShow(!show);
  }, [show, setShow]);

  const submit = useCallback(
    (data: LoginType) => {
      loginRequest(data);
    },
    [loginRequest],
  );

  return (
    <>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ value, onChange }) => (
          <TextInput
            testID="emailInput"
            placeholder="user.name@mail.com"
            value={value}
            onChangeText={text => onChange(text)}
            error={errors.email?.message}
            placeholderTop={'E-MAIL'}
            onSubmitEditing={() => refPassword.current?.focus()}
            {...(!!value
              ? { icon: 'x', onPressIcon: () => setValue('email', '') }
              : {})}
            {...(!!errors.email?.message ? { colorIcon: colors.error } : {})}
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ value, onChange }) => (
          <TextInput
            ref={refPassword}
            testID="passwordInput"
            placeholder="******"
            value={value}
            onChangeText={text => onChange(text)}
            error={errors.password?.message}
            placeholderTop={'SENHA'}
            icon={show ? 'eye-off' : 'eye'}
            onPressIcon={setShowPassword}
            secureTextEntry={!show}
          />
        )}
      />

      <ViewButton>
        <Button
          loading={loading}
          onPress={handleSubmit(submit)}
          width="160px"
          height="48px"
          textColor="white">
          ENTRAR
        </Button>
      </ViewButton>
    </>
  );
};

export default withForm(connector(Form), { defaultValues, validationSchema });
