import { Animated, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import theme from '../../../../../config/theme';

const INFO_WRAPPER_HORIZONTAL_PADDING = 16
const INFO_WRAPPER_VERTICAL_PADDING = 8

export const Container = styled.View`
  display: flex;
  flex-direction: column; 
  border-radius: 20px;
  margin: 0px 20px;
  height: 400px;
  shadow-radius: 5px;
  shadow-offset: 0px 5px;
  shadow-color: black;
  shadow-opacity: 0.5;
  elevation: 5;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  min-width: 100px;
  min-height: 100px;
  align-self: center;
`;

export const InfoWrapper = styled.View`
  position: absolute;
  bottom: 0px;
  left: 20px;
  right: 20px;
  padding: ${INFO_WRAPPER_VERTICAL_PADDING}px ${INFO_WRAPPER_HORIZONTAL_PADDING}px 0px;
  display: flex;
  flex-direction: column;
  border-radius: 10px 10px 0px 0px;
  background-color: ${theme.colors.white};
`;

export const Title = styled.Text`
  font-size: 16px;
  color: ${theme.colors.black};
`;

export const SubTitle = styled.Text`
  font-size: 8px;
  color: ${theme.colors.grey};
  margin-bottom: 8px;
`;

export const Count = styled.Text`
  font-size: 16px;
  color: ${theme.colors.black};
  position: absolute;
  top: ${INFO_WRAPPER_VERTICAL_PADDING}px;
  right: ${INFO_WRAPPER_HORIZONTAL_PADDING}px;
`;

