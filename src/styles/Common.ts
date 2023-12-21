import {theme} from './theme'

type FontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    fontM?: number
    fontD?: number
}

export const font = ({family, weight, color, lineHeight, fontM, fontD}: FontPropsType) => `
    font-family:${family || 'Poppins'};
    font-weight:${weight || 400};
    color:${color || theme.colors.primaryTextColor};
    line-height:${lineHeight || 1.4};
    font-size:calc( (100vw - 360px)/(1600 - 360) * (${fontD} - ${fontM}) + ${fontM}px);
 `

