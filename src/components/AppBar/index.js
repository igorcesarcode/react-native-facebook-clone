import React from 'react';
import {
  Conteiner,
  Text,
  Row,
  Button,
  SearchIcon,
  FacebookMessengerIcon
} from './styles';

export const AppBar = () => {
  return (
    <Conteiner>
      <Text>Facebook</Text>
      <Row>
        <Button>
          <SearchIcon
          name='search'
          />
        </Button>
        <Button>
          <FacebookMessengerIcon
          name='facebook-messenger'
          />
        </Button>
      </Row>
    </Conteiner>
  
  
  )
  
}