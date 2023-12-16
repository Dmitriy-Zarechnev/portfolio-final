import React from 'react'
import styled from 'styled-components'
import {SectionTitle} from '../../../components/sectionTitle/SectionTitle'
import {TabMenu} from './tabMenu/TabMenu'
import {FlexWrapper} from '../../../components/FlexWrapper'
import {Work} from './work/Work'
import pictureFirst from '..//../../assets/images/img_1.webp'
import pictureSecond from '..//../../assets/images/img_2.webp'
import pictureThird from '..//../../assets/images/img_3.webp'
import pictureForth from '..//../../assets/images/img_4.webp'
import pictureFifth from '..//../../assets/images/img_5.webp'
import pictureSixth from '..//../../assets/images/img_6.webp'
import {Container} from '../../../components/Container'

const worksItems: Array<string> = ['All', 'Landing Page', 'React', 'SPA']

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle mainTitle={'Projects'} subTitle={'Things I’ve built so far'}/>
                <TabMenu menuItems={worksItems}/>
                <FlexWrapper justify={'center'} wrap={'wrap'} gap={'60px 34px'} align={'stretch'}>
                    <Work title={'First Title'} text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                          src={pictureFirst} techText={'React, JavaScript, SASS, HTML'}/>
                    <Work title={'Second Title'} text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                          src={pictureSecond} techText={'React, JavaScript, SASS, HTML'}/>
                    <Work title={'Third Title'} text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                          src={pictureThird} techText={'React, JavaScript, SASS, HTML'}/>
                    <Work title={'Forth Title'} text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                          src={pictureForth} techText={'React, JavaScript, SASS, HTML'}/>
                    <Work title={'Fifth Title'} text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                          src={pictureFifth} techText={'React, JavaScript, SASS, HTML'}/>
                    <Work title={'Sixth Title'} text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                          src={pictureSixth} techText={'React, JavaScript, SASS, HTML'}/>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    )
}

const StyledWorks = styled.section`
    
`
