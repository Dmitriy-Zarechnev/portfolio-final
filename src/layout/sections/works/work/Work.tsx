import React from 'react'
import styled from 'styled-components'
import {TechStack} from '../../../../components/techStack/TechStack'
import {Icon} from '../../../../components/icon/Icon'
import {theme} from '../../../../styles/theme'
import {Button} from '../../../../components/Button'

type WorkPropsType = {
    title: string
    text: string
    src: string
    techText: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <ImageWrapper>
                <Image src={props.src} alt="ProjectPicture"/>
                <Button>View Project</Button>
            </ImageWrapper>

            <TextWrapper>
                <ProjectTitle>{props.title}</ProjectTitle>
                <ProjectText>{props.text}</ProjectText>
                <TechStack techText={props.techText}/>
                <LinkWrapper>
                    <Link href={'#'}>Live Preview</Link>
                    <Icon iconId={'linkLogo'} width={'20'} height={'20'} viewBox={'0 0 32 32'} fill={`${theme.colors.worksCards}`}/>
                    <Link href={'#'}>View Code</Link>
                </LinkWrapper>
            </TextWrapper>
        </StyledWork>
    )
}

const StyledWork = styled.div`
  max-width: 375px;
  box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.20);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`

const ImageWrapper = styled.div`
  position: relative;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  &:hover {
    &::before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(4px);
      border-top-right-radius: 20px;
      border-top-left-radius: 20px;
    }

    ${Button} {
      opacity: 1;
    }
  }

  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
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


 export const ProjectText = styled.p`
  color: ${theme.colors.primaryTextColor};
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 12px;
  flex: 1 1 auto;
`

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;

`

const Link = styled.a`
  color: ${theme.colors.worksCards};
  font-size: 16px;
  font-weight: 400;

  &:hover {
    text-decoration: underline;
  }

`