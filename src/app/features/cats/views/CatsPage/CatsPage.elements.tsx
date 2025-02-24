import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: red;
`;

export const Header = styled.View`
  height: 100px;
  background-color: green;
`;

export const SwiperWrapper = styled.View`
  display: flex;
`;

export const ButtonsWrapper = styled.View`
  display: flex;
  flex: 1;
  background-color: pink;
  margin-bottom: 120px; 
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 100;
`
