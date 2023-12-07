import React from 'react'
import styled from 'styled-components'
import {Icon} from '../../components/icon/Icon'
import {Logo} from '../../components/logo/Logo'
import {FlexWrapper} from '../../components/FlexWrapper'
import {Menu} from '../../components/menu/Menu'

const items: Array<string> = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact']

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper justify={'space-between'} align={'center'}>
                <Logo/>
                <FlexWrapper gap={'20px'} align={'center'}>
                    <Phone>+91 12345 09876</Phone>
                    <Email>info@example.com</Email>
                    <SocialList>
                        <SocialItem>
                            <SocialLink href={'#'}>
                                <Icon width={'30'} height={'30'} viewBox={'0 0 30 30'} iconId={'gitHubFoot'}/>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink href={'#'}>
                                <Icon width={'30'} height={'30'} viewBox={'0 0 32 32'} iconId={'twitterFoot'}/>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink href={'#'}>
                                <Icon width={'30'} height={'30'} viewBox={'0 0 30 30'} iconId={'linkedFoot'}/>
                            </SocialLink>
                        </SocialItem>
                    </SocialList>
                </FlexWrapper>
            </FlexWrapper>
            <Menu menuItems={items}/>
        </StyledFooter>

    )
}

const StyledFooter = styled.footer`
  background-color: darkorange;
  min-height: 20vh;
  display: flex;
  flex-direction: column;
`

const Phone = styled.span`

`

const Email = styled.span`

`

const SocialList = styled.ul`
  display: flex;
  gap: 15px;
`

const SocialItem = styled.li`
`

const SocialLink = styled.a`
`
