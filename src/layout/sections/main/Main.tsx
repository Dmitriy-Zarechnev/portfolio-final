import React from 'react'
import styled from 'styled-components'
import mainPhoto from '../../../assets/images/main_photo.webp'
import {FlexWrapper} from '../../../components/FlexWrapper'
import {Container} from '../../../components/Container'
import {theme} from '../../../styles/theme'

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'}>
                    <MainTextArea>
                        <MainHello>Hello There</MainHello>
                        <MainText>My name is</MainText>
                        <MyName> Dmitriy Zarechnev</MyName>
                        <MainTitle>A Web Developer and a Builder Things for Web</MainTitle>
                    </MainTextArea>
                    <Photo src={mainPhoto} alt="myPhoto"/>
                </FlexWrapper>
            </Container>
        </StyledMain>
    )
}

const StyledMain = styled.div`
  min-height: 100vh;
  display: flex;
`

const MainTextArea = styled.div`

`

const MainHello = styled.h3`
  font-size: 20px;
  font-weight: 700;
  `

const MainText = styled.span`
  color: ${theme.colors.linkFont};
  font-size: 40px;
  font-weight: 700;
  `

const MyName = styled.h2`
  font-size: 55px;
  font-weight: 700;
  color: ${theme.colors.accent};
  margin: 10px 0;
`

const MainTitle = styled.h1`
  font-size: 35px;
  font-weight: 700;
`

const Photo = styled.img`
  width: 350px;
  height: 450px;
  object-fit: cover;
`

