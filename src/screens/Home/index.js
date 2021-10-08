import React from 'react';
import { ScrollView } from 'react-native'
import { Conteiner ,Bloco} from './styles'

import { AppBar } from '../../components/AppBar'
import { TollBar } from '../../components/TollBar';
import { UsersStories } from '../../components/UsersStories'
import { Feed } from '../../components/Feed'

export const Home = () => {
  return (
    <>

      <AppBar />
      <Conteiner>
      <TollBar/>
      <UsersStories/>
      
        <Feed/>
        <Feed/>
        <Feed/>


      </Conteiner>
      
    </>
  )
}