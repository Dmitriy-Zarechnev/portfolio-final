import styled from 'styled-components'
import {font} from '../../styles/Common'
import {theme} from '../../styles/theme'
import {S} from '../../layout/sections/works/Works_Styles'

const Slider = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid red;
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

export const Sl ={
    Slider,
    Slide,
    Image,
    Pagination
}