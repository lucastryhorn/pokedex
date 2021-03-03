import {
  KeyboardAvoidingViewProps,
  ScrollViewProps,
  SafeAreaView,
} from 'react-native';

import styled from 'styled-components/native';
import { isIOS } from 'utils/constants';

export const ContainerLogin = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 0px 10px 120px 10px;
`;

export const ContainerScrollView = styled.ScrollView.attrs<ScrollViewProps>({
  keyboardShouldPersistTaps: 'handled',
  contentContainerStyle: { flex: 1 },
})``;

export const ContainerKeyboardView = styled.KeyboardAvoidingView.attrs<KeyboardAvoidingViewProps>(
  { ...(isIOS ? { enable: true, behavior: 'padding' } : {}) },
)`
  flex: 1;
`;
