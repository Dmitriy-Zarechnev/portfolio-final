import styled from 'styled-components'
import {theme} from '../../../styles/theme'
import { respFont} from '../../../styles/Common'

const Main = styled.section`
  min-height: 100vh;
  display: flex;

  @media ${theme.media.mobile} {
    margin-top: 50px;
  }
`

const MainTextArea = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;

  @media ${theme.media.mobile} {
    margin-bottom: 50px;
  }
`

const MainHello = styled.span`
  font-weight: 400;
  color: ${theme.colors.primaryTitle};
  font-size: 16px;
  letter-spacing: -1px;
`

const MainText = styled.span`
  ${respFont({ PxMax: 27, PxMin: 20})};
  font-weight: 400;
  color:${theme.colors.primaryTitle};
  letter-spacing: -1px;
`

const MyName = styled.h2`
  ${respFont({ PxMax: 50, PxMin: 36})};
  font-weight: 700;
  color: transparent;
  letter-spacing: -1px;
  margin: 10px 0;

  background-image: linear-gradient(90deg, ${theme.colors.accent}, ${theme.colors.contactColor});
  -webkit-background-clip: text;

  @media ${theme.media.mobile} {
    margin: 15px 0 22px;
  }
`

const MainTitle = styled.h1`
  ${respFont({ PxMax: 27, PxMin: 20})};
  font-weight: 400;
  color: ${theme.colors.primaryTitle};
  letter-spacing: -1px;

  p {
    display: none;
  }
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
      top: -17px;
      left: 20px;
    }
  }
`

const Photo = styled.img`
  width: 350px;
  height: 450px;
  object-fit: cover;
  margin-right: 20px;

  @media ${theme.media.mobile} {
    width: 310px;
    height: 380px;
  }
`

export const S = {
    Main,
    MainTextArea,
    MainHello,
    MainText,
    MyName,
    MainTitle,
    PhotoWrapper,
    Photo
}
