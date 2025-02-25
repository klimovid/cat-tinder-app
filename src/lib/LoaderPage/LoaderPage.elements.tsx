import styled from 'styled-components/native';
import theme from '../../config/theme';

export const Container = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.background};
`;

export const Image = styled.Image`
  width: 100px;
  height: 100px;
`;
