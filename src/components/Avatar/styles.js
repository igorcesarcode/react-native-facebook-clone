import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width:${RFValue(40)}px;
  height:${RFValue(40)}px ;
  position: relative;
`

export const UserImage = styled.Image`
  width:${RFValue(40)}px;
  height:${RFValue(40)}px;
  border-radius:${RFValue(20)}px;
`