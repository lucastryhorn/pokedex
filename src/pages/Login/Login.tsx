import React, { FC } from 'react';
import Form from './components/Form';
import Logo from './components/Logo';
import { ContainerLogin, ContainerScrollView } from './styles';

const Login: FC = () => {
  return (
    <ContainerScrollView>
      <ContainerLogin>
        <Logo />
        <Form />
      </ContainerLogin>
    </ContainerScrollView>
  );
};

export default Login;
