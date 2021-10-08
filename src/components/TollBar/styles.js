import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons , Fontisto , MaterialCommunityIcons } from '@expo/vector-icons';


export const Conteiner = styled.View.attrs({
  borderBottomEndRadius:10,
  borderBottomStartRadius:10
})`
  width:100%;
  height:${RFValue(100)}px ;
  padding: ${RFValue(11)}px 0;
  background-color:#242526;
`
export const Row = styled.View`
  flex-direction: row;
  width:100%;
  padding: 0 ${RFValue(11)}px;
  justify-content: space-evenly;
`
export const InputWhatsYourMind = styled.TextInput.attrs({
  placeholderTextColor:'#B0B3B8'
})
`
  background-color:#3A3B3C;
  width:85%;
  color: #B0B3B8;
  padding: 0 ${RFValue(11)}px;
  border-radius:${RFValue(11)}px;
`

export const Menu = styled.View`
  flex: 1;
  flex-direction:row;
  align-items: center;
  justify-content: space-around;
  padding:${RFValue(20)}px 0;
`
export const MenuButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content:center;
  width:${RFValue(50)}px;
  height: ${RFValue(20)}px;
  
  `
export const MenuText = styled.Text`
  color: #B0B3B8;
  font-size:${RFValue(15)}px;
  font-weight: bold;
  `

export const LiveIcon = styled(Ionicons)`
  padding: 0 ${RFValue(5)}px;
  font-size:${RFValue(20)}px;
  color:#e84118;
`
export const PhotoIcon = styled(Fontisto)`
  padding: 0 ${RFValue(5)}px;
  font-size:${RFValue(17)}px;
  color:#4cd137;
`

export const RoomIcon = styled(MaterialCommunityIcons)`
  padding: 0 ${RFValue(5)}px;
  font-size:${RFValue(24)}px;
  color: #9c88ff;
`