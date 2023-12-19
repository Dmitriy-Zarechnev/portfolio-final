import React from 'react'
import {Icon} from '../icon/Icon'
import {S} from './Logo_Styles'
import {animateScroll as scroll} from 'react-scroll'

type LogoPropsType = {
    iconId: string,
    width?: string,
    height?: string,
    viewBox?: string,
    fill?: string
}

export const Logo: React.FC<LogoPropsType> = (props: LogoPropsType) => {
    return (
        <S.Logo onClick={()=>{scroll.scrollToTop()}}>
            <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox} fill={props.fill}/>
        </S.Logo>
    )
}



