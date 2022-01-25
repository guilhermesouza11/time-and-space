import React from 'react';
import MainHeader from '../Header/index';
import {
  Container,
  FormMessage,
  InputMessage,
  Message,
  BoxMessage,
  Hours
} from './styles';


const Content = () => {
  return(
    <>
      <MainHeader />
      <Container>
        <FormMessage>
          <InputMessage placeholder="Write here" />
            <BoxMessage>
              <Message>Estou supondo que isso aqui foi escrito assim, este é um conteúdo chumbado, ignore.</Message>
              <Hours>25/01 / 01:35</Hours>
            </BoxMessage>
            <BoxMessage>
              <Message>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam saepe quos doloribus, eaque totam nihil impedit illum assumenda, natus temporibus, debitis facilis velit nesciunt dolor. Doloribus culpa commodi et suscipit?</Message>
              <Hours>25/01 / 01:35</Hours>
            </BoxMessage>
            <BoxMessage>
              <Message>Estou supondo que isso aqui foi escrito assim, este é um conteúdo chumbado, ignore.</Message>
              <Hours>25/01 / 01:35</Hours>
            </BoxMessage>
            <BoxMessage>
              <Message>Estou supondo que isso aqui foi escrito assim, este é um conteúdo chumbado, ignore.</Message>
              <Hours>25/01 / 01:35</Hours>
            </BoxMessage>
        </FormMessage>
      </Container>
    </>
  )
}

export default Content;