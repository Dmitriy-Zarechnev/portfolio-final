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

export const Sl = {
    Slider,
    Slide,
    Image
}