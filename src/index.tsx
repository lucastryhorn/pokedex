import 'react-native-gesture-handler';
import React, { FC } from 'react';
import { LogBox } from 'react-native';

import Routes from './routes';

LogBox.ignoreAllLogs();

const App: FC = () => {
  return <Routes />;
};

export default App;
