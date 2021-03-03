import React, { FC } from 'react';

import { TextStyled, TextStyledProps } from './styles';

const Text: FC<TextStyledProps> = props => {
  return <TextStyled {...props} />;
};

export default Text;
