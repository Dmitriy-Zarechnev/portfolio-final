import React from 'react'
import styled from 'styled-components'
import mainPhoto from '../../../assets/images/main_photo.webp'
import {FlexWrapper} from '../../../components/FlexWrapper'
import {Container} from '../../../components/Container'
import {theme} from '../../../styles/theme'
import {font} from '../../../styles/Common'

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'} wrap={'wrap'}>
                    <MainTextArea>
                        <MainHello>Hello There</MainHello>
                        <MainText>My name is </MainText>
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
  margin-top: 70px;
`

const MainTextArea = styled.div`
  display: flex;
  flex-direction: column;
`

const MainHello = styled.span`
  color: ${theme.colors.primaryTitle};
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -1px;
`

const MainText = styled.span`
  color: ${theme.colors.primaryTitle};
  font-size: 27px;
  font-weight: 700;
  letter-spacing: -1px;
`

const MyName = styled.h2`
  ${font({weight: 700, color: 'transparent', Fmax: 50, Fmin: 36})};
  //font-size: 50px;
  //font-weight: 700;
  letter-spacing: -1px;
  background-image: linear-gradient(90deg, ${theme.colors.accent}, ${theme.colors.contactColor});
  //color: transparent;
  -webkit-background-clip: text;
`

const MainTitle = styled.h1`
  font-size: 27px;
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

    @media ${theme.media.mobile} {
      width: 314px;
      height: 414px;
    }

  }
`

const Photo = styled.img`
  width: 350px;
  height: 450px;
  object-fit: cover;

  @media ${theme.media.mobile} {
    width: 310px;
    height: 380px;
  }
`

