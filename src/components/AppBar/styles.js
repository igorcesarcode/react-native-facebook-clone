import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { FontAwesome5 , MaterialCommunityIcons  } from '@expo/vector-icons'

export const Conteiner = styled.View`
  width: 100%;
  height: ${RFValue(58)}px;
  padding: 0px ${RFValue(11)}px;
  flex-direction:row;
  align-items: center;
  justify-content:space-between;
  margin-top:${getStatusBarHeight()}px;
  background-color:#242526;

`
export const Text = styled.Text`
  color:#FFFFFF;
  font-size: ${RFValue(25)}px;
  font-weight: bold;
  letter-spacing: -0.3px;

`

export const Row = styled.View`
  flex-direction: row;
`
export const Button = styled.TouchableOpacity`
  width:${RFValue(25)}px;
  height:${RFValue(25)}px;
  align-items: center;
  justify-content:center;
  margin-left: ${RFValue(16)}px;
`
export const SearchIcon = styled(FontAwesome5)`
  color:#B0B3B8;
  font-size: ${RFValue(18)}px;
`
export const FacebookMessengerIcon = styled(MaterialCommunityIcons)`
  color:#B0B3B8;
  font-size: ${RFValue(18)}px;
`