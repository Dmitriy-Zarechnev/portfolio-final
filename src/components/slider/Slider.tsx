import React from 'react'
import styled from 'styled-components'
import hobbyFirst from '..//../assets/images/Hobby_1.webp'
import {theme} from '../../styles/theme'
import {Container} from '../Container'
import {font} from '../../styles/Common'
import {S} from '../../layout/sections/works/Works_Styles'


export const Slider = () => {
    return (
        <StyledSlider>
            <Container>
                <Slide>
                    <S.ProjectTitle>Badminton</S.ProjectTitle>
                    <Image src={hobbyFirst} alt="Badminton"/>
                    <S.ProjectText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eos labore quia. A adipisci explicabo fuga iste minima odit sed.
                    </S.ProjectText>
                </Slide>

                <Pagination>
                    <span> </span>
                    <span className={'active'}> </span>
                    <span> </span>
                </Pagination>
            </Container>
        </StyledSlider>
    )
}

const StyledSlider = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Slide = styled.div`
  text-align: center;

  ${S.ProjectText} {
    ${font({fontD: 18, fontM: 14})}
    padding: 10px;
  }
`

const Image = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;

  @media ${theme.media.mobile} {
    width: 100%;
    height: 100%;
    aspect-ratio: 16/9;
  }
`

const Pagination = styled.div`
  text-align: center;

  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${theme.colors.secondaryTextColor};

    & + span {
      margin-left: 10px;
    }

    &.active {
      background-color: ${theme.colors.accent};
      width: 20px;
      border-radius: 20px;
    }
  }
`