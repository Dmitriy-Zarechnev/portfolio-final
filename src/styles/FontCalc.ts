const maxWidth: number = 1440
const minWidth: number = 320


export function FontCalc(pcSize: number, mbSize: number): string {
    return `calc( ${mbSize}px + ${pcSize - mbSize} * ((100vw - ${minWidth}) / ${maxWidth}`
}

const font1 = FontCalc(40, 24)

console.log(font1)