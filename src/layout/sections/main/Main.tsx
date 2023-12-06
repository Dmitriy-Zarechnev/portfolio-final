import React from 'react'
import styled from 'styled-components'
import mainPhoto from '../../../assets/images/main_photo.webp'
import {FlexWrapper} from '../../../components/FlexWrapper'

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={'center'} justify={'space-around'}>
                <MainTextArea>
                    <MainText>Hi 👋, My name is</MainText>
                    <MyName>Dmitriy Zarechnev</MyName>
                    <MainTitle>A Web Developer and a Builder Things for Web</MainTitle>
                </MainTextArea>

                <Photo src={mainPhoto} alt="myPhoto"/>
            </FlexWrapper>
        </StyledMain>
    )
}

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: cornflowerblue;
`

const MainTextArea = styled.div`

`

const MainText = styled.span`

`

const MyName = styled.h2`

`

const MainTitle = styled.h1`

`

const Photo = styled.img`
  width: 350px;
  height: 450px;
  object-fit: cover;
`

