import React from 'react'
import styled from 'styled-components'
import {TechStack} from '../../../../components/techStack/TechStack'
import {Icon} from '../../../../components/icon/Icon'
import {theme} from '../../../../styles/theme'

type WorkPropsType = {
    title: string
    text: string
    src: string
    techText: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt=""/>
            <TextWrapper>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
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
`

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 30px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`

const Title = styled.h3`
  color: ${theme.colors.worksCards};
  text-align: center;
  font-size: 28px;
  font-weight: 500;
  text-transform: capitalize;
  margin-bottom: 17px;
`

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const Text = styled.p`
  color: ${theme.colors.primaryTextColor};
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 12px;
  flex-grow: 1;
`

const Link = styled.a`
  color: ${theme.colors.worksCards};
  font-size: 16px;
  font-weight: 400;
  text-decoration: underline;
`