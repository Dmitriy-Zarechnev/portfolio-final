import React from 'react'
import styled from 'styled-components'
import {TechStack} from '../../../../components/techStack/TechStack'

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
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <TechStack techText={props.techText}/>
            <Link href={'#'}>Demo</Link>
            <Link href={'#'}>Code</Link>
        </StyledWork>
    )
}

const StyledWork = styled.div`
  background-color: aquamarine;
  max-width: 540px;
  width: 100%;
`

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`

const Title = styled.h3`
`

const Text = styled.p`
`

const Link = styled.a`
`