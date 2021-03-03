import React, { FC } from 'react';
import { Image } from 'react-native';

import logo from 'assets/img/pokedex.png';

const Logo: FC = () => {
  return <Image source={logo} />;
};

export default Logo;
