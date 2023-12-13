import React from 'react'
import styled from 'styled-components'
import {FlexWrapper} from '../../../components/FlexWrapper'
import aboutPhoto from '../../../assets/images/about_me_photo.webp'
import {Container} from '../../../components/Container'
import {theme} from '../../../styles/theme'

export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'} gap={'25px'}>
                    <AboutPhoto src={aboutPhoto} alt={'MyPhotoWithFlowers'}/>

                    <AboutTextArea>
                        <SectionAboutTitle>About Me</SectionAboutTitle>
                        <AboutText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque corporis cumque deleniti fugiat hic impedit ipsam ipsum, labore laudantium quisquam quo repellat sed tenetur veniam voluptas voluptatibus. Ad animi asperiores consequuntur cumque dignissimos
                            distinctio dolor dolorum excepturi explicabo, harum hic labore numquam officiis quia quos repellat similique sunt totam?
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi consectetur corporis delectus enim eos eveniet harum
                        </AboutText>

                    </AboutTextArea>
                </FlexWrapper>
            </Container>
        </StyledAbout>
    )
}

const StyledAbout = styled.section`
`
/* Стили для рамки
const AboutPhotoWrapper = styled.div`

  position: relative;
  z-index: 0;

  &::before {
    content: '';
    width: 300px;
    height: 740px;
    border: 3px solid ${theme.colors.accent};
    border-radius: 30px;

    position: absolute;
    top: -20px;
    left: -50px;
    z-index: -1;
  }
`
 */

const AboutPhoto = styled.img`
  width: 40%;
  //height: 700px;
  object-fit: cover;
`

const AboutTextArea = styled.div`
  display: flex;
  flex-direction: column;
`

const AboutText = styled.p`
  color: ${theme.colors.primaryTextColor};
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 40px;
`

const SectionAboutTitle = styled.h2`
  color: ${theme.colors.primaryTitle};
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 30px;
  letter-spacing: -0.4px;
`


