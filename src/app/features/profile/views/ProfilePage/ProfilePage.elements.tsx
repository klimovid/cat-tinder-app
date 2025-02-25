import styled from 'styled-components/native';
import theme from '../../../../../config/theme';

export const Container = styled.View`
  display: flex;
  flex: 1;
  justifyContent: center;
  alignItems: center;
  background-color: ${theme.colors.background};
`;

export const Label = styled.Text`
  font-size: 36px;
  color: ${theme.colors.black};
`;