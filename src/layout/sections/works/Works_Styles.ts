import styled, {css} from 'styled-components'
import {Button} from '../../../components/Button'
import {theme} from '../../../styles/theme'
import {respFont} from '../../../styles/Common'


//  ---------------- Works Styles -------------------
const Works = styled.section`

`

const WorkWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 60px 34px;
  align-items: stretch;
  position: relative;
  height: 100%;
`

//  ---------------- Work Styles -------------------
const Work = styled.div`
  max-width: 375px;
  width: 100%;
  box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.20);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`

const ImageWrapper = styled.div`
  position: relative;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -40%);
    transition: ${theme.animations.fastTransition};
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(2px);
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    opacity: 0;
    transition: ${theme.animations.fastTransition};
  }

  &:hover {
    &::before {
      opacity: 1;
    }

    ${Button} {
      transform: translate(-50%, -50%);
      opacity: 1;
    }
  }

  @media ${theme.media.tablet} {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
    }
  }
`

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`

const TextWrapper = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  padding: 25px 30px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`

export const ProjectTitle = styled.h3`
  color: ${theme.colors.worksCards};
  text-align: center;
  font-size: 28px;
  font-weight: 500;
  text-transform: capitalize;
  margin-bottom: 17px;
`

const ProjectText = styled.p`
  color: ${theme.colors.primaryTextColor};
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 12px;
  flex: 1 1 auto;
`

const Link = styled.a`
  color: ${theme.colors.worksCards};
  font-size: 16px;
  font-weight: 400;
  background: linear-gradient(${theme.colors.worksCards}, ${theme.colors.worksCards}) 0 75% /0 2px no-repeat;
  transition: ${theme.animations.fastTransition};

  &:hover {
    background-size: 100% 2px;
  }

  @media ${theme.media.tablet} {
    background-size: 100% 2px;
  }
`

//  ---------------- TabMenu Styles -------------------

const TabMenu = styled.nav`

  ul {
    display: flex;
    justify-content: space-between;
    max-width: 352px;
    width: 100%;
    margin: 0 auto 40px;
  }
`

const ListItem = styled.li`
  position: relative;
`

const TabLink = styled.button<{ active: boolean }>`
  ${respFont({PxMax: 20, PxMin: 18})};
  font-weight: 500;
  color: ${theme.colors.worksCards};
  text-align: center;
  text-transform: uppercase;

  &:hover {
    &::before {
      height: 5px;
    }
  }

  &::before {
    content: '';
    display: inline-block;
    background-color: ${theme.colors.accent};
    height: 0;
    position: absolute;
    bottom: -5px;
    left: -10px;
    right: -10px;
    transition: ${theme.animations.fastTransition};


    ${props => props.active && css<{ active: boolean }>`
      height: 5px;
    `}
  }
`

//  ---------------- Export -------------------
export const S = {
    Works,
    WorkWrapper,
    Work,
    ImageWrapper,
    Image,
    TextWrapper,
    ProjectTitle,
    ProjectText,
    Link,
    TabMenu,
    ListItem,
    TabLink
}