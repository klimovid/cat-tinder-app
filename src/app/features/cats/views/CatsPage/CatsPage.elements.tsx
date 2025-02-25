import { Image, SafeAreaView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import theme from '../../../../../config/theme';

export const Container = styled(SafeAreaView)`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${theme.colors.background};
`;

export const Header = styled.View`
  height: 50px;
`;

export const SwiperWrapper = styled.View`
   display: flex;
`;

export const ButtonsWrapper = styled.View`
  position: absolute;
  bottom: 120px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
  gap: 54px;
`
const ButtonImage = styled.Image.attrs({
  resizeMode: 'stretch',
})`
  height: 36px;
  width: 36px;
`;

const Touchable= styled(TouchableOpacity).attrs({
  activeOpacity: 0.9,
  hitSlop: {
    top: 8,
    right: 8,
    bottom: 8,
    left: 16,
  },
})`
  align-items: center;
  justify-content: center;
  height: 54px;
  width: 54px;
  background-color: ${theme.colors.white};
  border-radius: 36px;
  shadow-radius: 5px;
  shadow-offset: 0px 5px;
  shadow-color: black;
  shadow-opacity: 0.5;
  elevation: 5;
`;

export const Button = (props: { source: string, onPress: () => void }) => (
  <Touchable onPress={props.onPress}>
    <ButtonImage source={props.source} />
  </Touchable>
);
