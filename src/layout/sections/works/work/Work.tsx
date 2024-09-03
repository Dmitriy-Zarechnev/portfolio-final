import React from 'react'
import {TechStack} from '../../../../components/techStack/TechStack'
import {theme} from '../../../../styles/theme'
import {Button} from '../../../../components/Button'
import {FlexWrapper} from '../../../../components/FlexWrapper'
import {S} from '../Works_Styles'
import {Logo} from '../../../../components/logo/Logo'

type WorkPropsType = {
    title: string
    text: string
    src: string
    altText: string
    techText: string
    liveLink: string
    codeLink: string
}

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.Image src={props.src} alt={props.altText}/>
                <Button as={'a'} target={'_blank'} href={props.liveLink}>Открыть проект</Button>
            </S.ImageWrapper>

            <S.TextWrapper>
                <S.ProjectTitle>{props.title}</S.ProjectTitle>
                <S.ProjectText>{props.text}</S.ProjectText>
                <TechStack techText={props.techText}/>
                <FlexWrapper justify={'space-between'}>
                    <S.Link href={props.liveLink} target={'_blank'}>Live Preview</S.Link>
                    <Logo iconId={'linkLogo'} width={'20'}
                          height={'20'} viewBox={'0 0 32 32'}
                          fill={`${theme.colors.worksCards}`}/>
                    <S.Link href={props.codeLink} target={'_blank'}>View Code</S.Link>
                </FlexWrapper>
            </S.TextWrapper>
        </S.Work>
    )
}

