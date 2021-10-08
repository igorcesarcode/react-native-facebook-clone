import React from 'react'

import {
  Conteiner,
  FeedHeader,
  FeedTitleContainer,
  FeedTitle,
  FeedSubTitle,
  FeedImage,
  FeedText,
  FeedUserImage,
  FeedFooter,
  IconContainer,
  TextFeedFooter,
  LikeIcon,
  CommentIcon,
  ShareIcon
} from './styles'

export const Feed = () => {
  return (
    <>
      <Conteiner>
        <FeedHeader>
          <FeedUserImage source={require('../../assets/user3.jpg')} />
          <FeedTitleContainer>

            <FeedTitle>Super Facebook React Native</FeedTitle>
            <FeedSubTitle>Pequeno teste</FeedSubTitle>

          </FeedTitleContainer>

        </FeedHeader>

        <FeedText>
          Lorem ipsum dolor sit amet, con
          Lorem ipsum dolor sit amet, con
          Lorem ipsum dolor sit amet, con
          Lorem ipsum dolor sit amet, con
        </FeedText>

        <FeedImage source={require('../../assets/user5.jpg')} />

        <FeedFooter>

          <IconContainer>
          <LikeIcon
          name='like2'
          />
          <TextFeedFooter>Curtir</TextFeedFooter>
          </IconContainer>
          
          <IconContainer>
          <CommentIcon
          name='comment-alt'
          />
          <TextFeedFooter>Comentar</TextFeedFooter>
          </IconContainer>

          <IconContainer>
          <ShareIcon
          name='sharealt'
          />
          <TextFeedFooter>Compartilhar</TextFeedFooter>
          </IconContainer>
          
        </FeedFooter>
      </Conteiner>
    </>

  )
}