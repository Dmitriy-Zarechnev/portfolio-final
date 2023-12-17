import React from 'react'
import {TechStack} from '../../../../components/techStack/TechStack'
import {Icon} from '../../../../components/icon/Icon'
import {theme} from '../../../../styles/theme'
import {Button} from '../../../../components/Button'
import {FlexWrapper} from '../../../../components/FlexWrapper'
import {S} from '../Works_Styles'


type WorkPropsType = {
    title: string
    text: string
    src: string
    altText:string
    techText: string
    liveLink:string
    codeLink:string
}

export const Work:React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.Image src={props.src} alt={props.altText}/>
                <Button>View Project</Button>
            </S.ImageWrapper>

            <S.TextWrapper>
                <S.ProjectTitle>{props.title}</S.ProjectTitle>
                <S.ProjectText>{props.text}</S.ProjectText>
                <TechStack techText={props.techText}/>
                <FlexWrapper justify={'space-between'}>
                    <S.Link href={props.liveLink}>Live Preview</S.Link>
                    <Icon iconId={'linkLogo'} width={'20'} height={'20'} viewBox={'0 0 32 32'} fill={`${theme.colors.worksCards}`}/>
                    <S.Link href={props.codeLink}>View Code</S.Link>
                </FlexWrapper>
            </S.TextWrapper>
        </S.Work>
    )
}

