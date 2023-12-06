import React from 'react'
import styled from 'styled-components'
import hobbyFirst from '..//../assets/images/Hobby_1.webp'
import {FlexWrapper} from '../FlexWrapper'


export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide>
                    <Title>Badminton</Title>
                    <Image src={hobbyFirst} alt="Badminton"/>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eos labore quia. A adipisci explicabo fuga iste minima odit sed.</Text>
                </Slide>
            </FlexWrapper>
            <Pagination>
                <span> </span>
                <span> </span>
                <span> </span>
            </Pagination>
        </StyledSlider>
    )
}

const StyledSlider = styled.div`
  border: 1px solid red;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Slide = styled.div`
  text-align: center;
`

const Title = styled.h3`
`

const Image = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`


const Text = styled.p`
`

const Pagination = styled.div`
  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 5px;
    background-color: greenyellow;
  }
`