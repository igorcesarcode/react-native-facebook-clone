import styled from 'styled-components/native'
import { RFValue , RFPercentage } from 'react-native-responsive-fontsize';
export const Conteiner = styled.ScrollView`
`
export const ConteinerUserImageProfile = styled.View`
  position: relative;
  align-items: center;
  width:100px;
  height:200px;
  margin: 10px ${RFValue(7)}px;
`
export const UserImageProfile = styled.Image`
  position:absolute;
  z-index:1;
  top: 8px;
  left: 8px;
  width:25px;
  height:25px;
  border-radius:15px;
`

export const UserStoryImage = styled.Image`
  width:100%;
  height:170px;
  border-radius:${RFPercentage(1)}px;
`
export const UserStoriesTitle = styled.Text`
  position:absolute;
  bottom: 30px;
  z-index:1;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
`