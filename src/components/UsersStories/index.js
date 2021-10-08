import React from 'react';
import { Conteiner , ConteinerUserImageProfile, UserStoriesTitle , UserImageProfile , UserStoryImage } from './styles'
export const UsersStories = () => {

  return(
    <Conteiner
    horizontal={true}
    >
      <ConteinerUserImageProfile>
        <UserStoriesTitle>Teste</UserStoriesTitle>
        <UserImageProfile
        source={require('../../assets/user1.jpg')}
        />

        <UserStoryImage 
        source={require('../../assets/story1.jpg')}
        />
      </ConteinerUserImageProfile>

      <ConteinerUserImageProfile>
        <UserStoriesTitle>Teste</UserStoriesTitle>
        <UserImageProfile
        source={require('../../assets/user2.jpg')}
        />

        <UserStoryImage 
        source={require('../../assets/story2.jpg')}
        />
      </ConteinerUserImageProfile>



      <ConteinerUserImageProfile>
        <UserStoriesTitle>Teste</UserStoriesTitle>
        <UserImageProfile
        source={require('../../assets/user3.jpg')}
        />

        <UserStoryImage 
        source={require('../../assets/story3.jpg')}
        />
      </ConteinerUserImageProfile>



      <ConteinerUserImageProfile>
        <UserStoriesTitle>Teste</UserStoriesTitle>
        <UserImageProfile
        source={require('../../assets/user1.jpg')}
        />

        <UserStoryImage 
        source={require('../../assets/story1.jpg')}
        />
      </ConteinerUserImageProfile>

      <ConteinerUserImageProfile>
        <UserStoriesTitle>Teste</UserStoriesTitle>
        <UserImageProfile
        source={require('../../assets/user2.jpg')}
        />

        <UserStoryImage 
        source={require('../../assets/story2.jpg')}
        />
      </ConteinerUserImageProfile>



      <ConteinerUserImageProfile>
        <UserStoriesTitle>Teste</UserStoriesTitle>
        <UserImageProfile
        source={require('../../assets/user3.jpg')}
        />

        <UserStoryImage 
        source={require('../../assets/story3.jpg')}
        />
      </ConteinerUserImageProfile>
    </Conteiner>

  )
}