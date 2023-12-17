import React from 'react'
import {Icon} from '../icon/Icon'
import {S} from './Logo_Styles'

type LogoPropsType = {
    iconId: string,
    width?: string,
    height?: string,
    viewBox?: string,
    fill?: string
}

export const Logo: React.FC<LogoPropsType> = (props: LogoPropsType) => {
    return (
        <S.Logo href="#">
            <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox} fill={props.fill}/>
        </S.Logo>
    )
}



