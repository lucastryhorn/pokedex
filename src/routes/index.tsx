import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';

import store from '../store';
import { theme } from '../theme';
import AuthStack from './AuthStack';
import ModalMessage from 'components/ModalMessage';

const Routes: FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <AuthStack />
          <ModalMessage />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
};

export default Routes;
