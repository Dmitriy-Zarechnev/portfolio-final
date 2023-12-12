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
                    <PhotoWrapper>
                        <Photo src={mainPhoto} alt="MyMainPhoto"/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    )
}

const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;
`

const MainTextArea = styled.div`
`

const MainHello = styled.h2`
  color: ${theme.colors.primaryTitle};
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -1px;
`

const MainText = styled.span`
  color: ${theme.colors.primaryTitle};
  font-size: 40px;
  font-weight: 700;
  letter-spacing: -1px;
`

const MyName = styled.span`
  font-size: 55px;
  font-weight: 700;
  color: ${theme.colors.accent};
  margin: 10px 0;
  letter-spacing: -1px;
`

const MainTitle = styled.h1`
  font-size: 35px;
  font-weight: 700;
  color: ${theme.colors.primaryTitle};
  letter-spacing: -1px;
`

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;

  &::before {
    content: '';
    width: 350px;
    height: 500px;
    border: 5px solid ${theme.colors.accent};

    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;
  }
`

const Photo = styled.img`
  width: 350px;
  height: 450px;
  object-fit: cover;
`

