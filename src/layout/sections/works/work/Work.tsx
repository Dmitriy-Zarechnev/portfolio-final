import React from 'react'
import styled from 'styled-components'
import {TechStack} from '../../../../components/techStack/TechStack'
import {Icon} from '../../../../components/icon/Icon'
import {FlexWrapper} from '../../../../components/FlexWrapper'

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
            <FlexWrapper justify={'space-between'}>
                <FlexWrapper align={'center'} gap={'5px'}>
                    <Icon iconId={'linkChain'} width={'20'} height={'20'} viewBox={'0 0 20 20'}/>
                    <Link href={'#'}>Demo</Link>
                </FlexWrapper>
                <FlexWrapper align={'center'} gap={'5px'}>
                    <Icon iconId={'linkGitHub'} width={'20'} height={'20'} viewBox={'0 0 20 20'}/>
                    <Link href={'#'}>Code</Link>
                </FlexWrapper>
            </FlexWrapper>
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