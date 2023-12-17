import React from 'react'
import {Logo} from '../../components/logo/Logo'
import {theme} from '../../styles/theme'
import {Container} from '../../components/Container'
import {FlexWrapper} from '../../components/FlexWrapper'
import {DesktopMenu} from './headerMenu/desktopMenu/DesktopMenu'
import {MobileMenu} from './headerMenu/mobileMenu/MobileMenu'
import {S} from './Header_Styles'

const items: Array<string> = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact']

const logoSetting = {
    id: 'logo',
    width: '60',
    height: '60',
    viewBox: '0 0 32 32',
    fill: theme.colors.accent
}

export const Header: React.FC = () => {

    const [width, setWidth] = React.useState(window.innerWidth)
    const breackpoint = 768

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleWindowResize)
        return () => window.removeEventListener('resize', handleWindowResize)
    }, [])

    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo iconId={logoSetting.id} width={logoSetting.width}
                          height={logoSetting.height} viewBox={logoSetting.viewBox}
                          fill={logoSetting.fill}/>

                    {width < breackpoint ? <MobileMenu menuItems={items}/>
                        : <DesktopMenu menuItems={items}/>}
                </FlexWrapper>
            </Container>
        </S.Header>
    )
}



