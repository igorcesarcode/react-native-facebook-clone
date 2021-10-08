import React from 'react'
import { Container , UserImage } from './styles'

export const Avatar = ({source}) => {
  return (
    <Container>
      <UserImage
      source={source}
      />
    </Container>
  )

}