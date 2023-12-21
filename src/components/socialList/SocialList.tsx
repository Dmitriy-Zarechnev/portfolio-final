import React from 'react'
import {Icon} from '../icon/Icon'
import {S} from './SocialList_Styles'


export type iconsType = {
    id: string
    size: string
    viewBox: string
    link: string
    aria: string
}

export const SocialList: React.FC<{ iconsInfo: Array<iconsType> }> = (props: { iconsInfo: Array<iconsType> }) => {
    return (
        <S.SocialList>
            {props.iconsInfo.map((el: iconsType, index: number) => {
                return (
                    <S.SocialItem key={index}>
                        <S.SocialLink href={el.link} target={'_blank'} aria-label={el.aria}>
                            <Icon iconId={el.id} width={el.size} height={el.size} viewBox={el.viewBox}/>
                        </S.SocialLink>
                    </S.SocialItem>
                )
            })}
        </S.SocialList>
    )
}




