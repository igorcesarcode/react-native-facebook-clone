import React from 'react'
import {
  Conteiner,
  Row,
  InputWhatsYourMind,
  Menu,
  MenuButton,
  MenuText,
  LiveIcon,
  PhotoIcon,
  RoomIcon
} from './styles'

import { Avatar } from '../Avatar'

export const TollBar = () => {
  return ( 
    <Conteiner>
      <Row>
      <Avatar source={require('../../assets/story1.jpg')} />
      <InputWhatsYourMind placeholder={'Oque você esta pensando?'} />
      </Row> 
     <Menu>
        <MenuButton>
          <LiveIcon name="md-videocam"/>
          <MenuText>Ao vivo</MenuText>
        </MenuButton>

        <MenuButton>
          <PhotoIcon name='photograph'/>
          <MenuText>Foto</MenuText>
        </MenuButton>
        
        <MenuButton>
          <RoomIcon name='video-plus'/>
          <MenuText>Sala</MenuText>
        </MenuButton>
               
      </Menu>
    </Conteiner>

  )
}