import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize';
import { AntDesign , FontAwesome5 , MaterialCommunityIcons} from '@expo/vector-icons';

export const Conteiner = styled.View.attrs({
  borderBottomEndRadius:10,
  borderBottomStartRadius:10,
  borderTopStartRadius:10,
  borderTopEndRadius:10
})`
  width:100%;
  margin-top:${RFValue(10)}px;
  margin-bottom:${RFValue(10)}px;
  border-radius:${RFValue(1)}px;
  background-color:#242526;

`

export const FeedHeader = styled.View`
  width:100%;
  flex-direction:row;
  padding: ${RFValue(30)}px 0 ;
  padding: ${RFValue(10)}px 0;
`
export const FeedFooter = styled.View`
  width:100%;
  padding: ${RFValue(20)}px 0;
  flex-direction:row;
  align-items:center;
  justify-content:space-around;
`
export const FeedTitleContainer = styled.View`
  flex-direction:column;
  margin-left:${RFValue(10)}px;
`

export const FeedTitle = styled.Text`
  color:#FFFFFF;
  font-weight: bold;
`
export const FeedSubTitle = styled.Text`
  color:#B0B3B8;
  font-weight:normal;
`

export const FeedImage = styled.Image`
  width:100%;
  padding: 0 ${RFValue(10)}px;
`
export const FeedText = styled.Text`
  color:#FFFFFF;
  font-weight:normal;
  margin: ${RFValue(5)}px ${RFValue(10)}px;

`

export const FeedUserImage = styled.Image`
  width:${RFValue(40)}px;
  height:${RFValue(40)}px;
  border-radius:${RFValue(20)}px;
  margin-left:${RFValue(10)}px;
`
export const IconContainer = styled.View`
  flex-direction:row;
  align-items:center;
  justify-content:center;
  padding: 0 ${RFValue(5)}px;
`
export const TextFeedFooter = styled.Text`
  color:#B0B3B8;
  font-weight:normal;
  margin-left:${RFValue(10)}px;
`

export const LikeIcon = styled(AntDesign)`
  color: #B0B3B8;
  font-size:${RFValue(20)}px;
`
export const CommentIcon = styled(FontAwesome5)`
  color: #B0B3B8;
  font-size:${RFValue(20)}px;
`

export const ShareIcon = styled(AntDesign)`
  color: #B0B3B8;
  font-size:${RFValue(20)}px;
`