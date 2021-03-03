import React, { FC } from 'react';

import { ImageStyled, IFastImageProps } from './styles';

const Image: FC<IFastImageProps> = props => {
  return <ImageStyled {...props} />;
};

export default Image;
