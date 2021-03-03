import { ViewProps } from 'react-native';
import styled from 'styled-components/native';

interface IViewProps extends ViewProps {
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
}

export const ViewModal = styled.View<IViewProps>`
  flex: 1;
  justify-content: center;
  align-items: ${({ alignItems }) => alignItems || 'center'};
  background-color: #00000080;
`;

export const ModalMessageStyled = styled.View`
  width: 60%;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  padding: 20px;
  align-items: center;
`;
