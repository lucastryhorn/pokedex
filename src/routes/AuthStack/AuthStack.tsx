import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '../../store/reducers';
import { authScreens, noAuthSreens } from '../screens';

const mapStateToProps = ({ auth }: RootState) => ({
  isAuth: auth.getIn(['isAuth']),
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Stack = createStackNavigator();

const AuthStack = ({ isAuth }: PropsFromRedux) => (
  <Stack.Navigator headerMode="none">
    {Object.entries({
      ...(isAuth ? authScreens : noAuthSreens),
    }).map(([name, component]) => (
      <Stack.Screen key={name} name={name} component={component} />
    ))}
  </Stack.Navigator>
);

export default connector(AuthStack);
