import React from 'react'
import styled from 'styled-components'
import {FlexWrapper} from '../../../components/FlexWrapper'
import {SectionTitle} from '../../../components/sectionTitle/SectionTitle'
import aboutPhoto from '../../../assets/images/about_photo.webp'

export const About = () => {
    return (
        <StyledAbout>
            <FlexWrapper align={'center'} justify={'space-around'}>
                <AboutPhoto src={aboutPhoto} alt={'MyPhoto'}/>
                <AboutTextArea>
                    <SectionTitle mainTitle={'About me'}/>
                    <AboutText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque corporis cumque deleniti fugiat hic impedit ipsam ipsum, labore laudantium quisquam quo repellat sed tenetur veniam voluptas voluptatibus. Ad animi asperiores consequuntur cumque dignissimos
                        distinctio dolor dolorum excepturi explicabo, harum hic labore numquam officiis quia quos repellat similique sunt totam?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi consectetur corporis delectus enim eos eveniet harum illum in minus perspiciatis sed totam, ut, voluptate voluptatibus! Assumenda aut cumque distinctio dolorem enim eum minima mollitia nam optio
                        quibusdam, quis quos rerum vel velit vero vitae voluptas? Consectetur consequuntur perferendis sapiente.
                    </AboutText>
                </AboutTextArea>
            </FlexWrapper>
        </StyledAbout>
    )
}

const StyledAbout = styled.section`
`

const AboutTextArea = styled.div`
`

const AboutText = styled.p`
  width: 50%;
`

const AboutPhoto = styled.img`
  width: 500px;
  height: 800px;
  object-fit: cover;
`