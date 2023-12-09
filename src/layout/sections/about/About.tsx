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
                <FlexWrapper direction={'column'}>
                    <AboutTextArea>
                        <SectionTitle mainTitle={'About me'}/>
                        <AboutText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque corporis cumque deleniti fugiat hic impedit ipsam ipsum, labore laudantium quisquam quo repellat sed tenetur veniam voluptas voluptatibus. Ad animi asperiores consequuntur cumque dignissimos
                            distinctio dolor dolorum excepturi explicabo, harum hic labore numquam officiis quia quos repellat similique sunt totam?
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi consectetur corporis delectus enim eos eveniet harum illum in minus perspiciatis sed totam, ut, voluptate voluptatibus! Assumenda aut cumque distinctio dolorem enim eum minima mollitia nam optio
                            quibusdam, quis quos rerum vel velit vero vitae voluptas? Consectetur consequuntur perferendis sapiente.
                        </AboutText>
                    </AboutTextArea>
                    <FlexWrapper direction={'column'}>
                        <SectionTitle mainTitle={'Work Experience'}/>
                        <ExperienceBlock>
                            <FlexWrapper>
                                <TitleName>Junior Web Developer</TitleName>
                                <IconNotButton>Full Time</IconNotButton>
                            </FlexWrapper>
                            <FlexWrapper >
                                <Place>Dr. Rajkumar’s Learning App</Place>
                                <Country>Bengaluru</Country>
                                <Period>Sep 2021 - Dec 2021</Period>
                            </FlexWrapper>
                        </ExperienceBlock>
                    </FlexWrapper>
                    <FlexWrapper direction={'column'}>
                        <SectionTitle mainTitle={'Education'}/>
                        <ExperienceBlock>
                            <FlexWrapper>
                                <TitleName>Bachelor in Electronics & Communication</TitleName>
                                <IconNotButton>Full Time</IconNotButton>
                            </FlexWrapper>
                            <FlexWrapper justify={'space-between'}>
                                <Place>Bangalore Instutute of Technology</Place>
                                <Period>Aug 2015 - Dec 2020</Period>
                            </FlexWrapper>
                        </ExperienceBlock>
                    </FlexWrapper>
                </FlexWrapper>
            </FlexWrapper>
        </StyledAbout>
    )
}

const StyledAbout = styled.section`
`

const AboutPhoto = styled.img`
  width: 400px;
  height: 700px;
  object-fit: contain;
`

const AboutTextArea = styled.div`
  width: 50%;
`

const AboutText = styled.p`

`

const ExperienceBlock=styled.section`
    border-bottom: 2px solid #EBEAED;
`

const TitleName=styled.h3`
    flex-grow: 1;
`

const IconNotButton=styled.span`
`

const Place=styled.span`
`

const Country=styled.span`
  flex-grow: 1;
`

const Period=styled.span`
      
  
`