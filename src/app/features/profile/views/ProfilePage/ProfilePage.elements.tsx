import styled from 'styled-components/native';
import theme from '../../../../../config/theme';

export const Container = styled.View`
  display: flex;
  flex: 1;
  justifyContent: center;
  alignItems: center;
`;

export const Label = styled.Text`
  font-size: 24px;
  color: ${theme.colors.black};
`;