import React from 'react'
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
import {S} from './Works_Styles'

const titlesData = {
    mainTitle: 'Projects',
    subTitle: 'Things I’ve built so far'
}

const worksItems: Array<string> = ['All', 'Landing Page', 'React', 'SPA']

const workData = [
    {
        title: 'First Title',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        src: pictureFirst,
        altText: 'ProjectPicture',
        techText: 'React, JavaScript, SASS, HTML',
        liveLink: '#',
        codeLink: '#'
    },
    {
        title: 'Second Title',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        src: pictureSecond,
        altText: 'ProjectPicture',
        techText: 'React, JavaScript, SASS, HTML',
        liveLink: '#',
        codeLink: '#'
    },
    {
        title: 'Third Title',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        src: pictureThird,
        altText: 'ProjectPicture',
        techText: 'React, JavaScript, SASS, HTML',
        liveLink: '#',
        codeLink: '#'
    },
    {
        title: 'Forth Title',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        src: pictureForth,
        altText: 'ProjectPicture',
        techText: 'React, JavaScript, SASS, HTML',
        liveLink: '#',
        codeLink: '#'
    },
    {
        title: 'Fifth Title',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        src: pictureFifth,
        altText: 'ProjectPicture',
        techText: 'React, JavaScript, SASS, HTML',
        liveLink: '#',
        codeLink: '#'
    },
    {
        title: 'Sixth Title',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        src: pictureSixth,
        altText: 'ProjectPicture',
        techText: 'React, JavaScript, SASS, HTML',
        liveLink: '#',
        codeLink: '#'
    }
]


export const Works: React.FC = () => {
    return (
        <S.Works>
            <Container>
                <SectionTitle mainTitle={titlesData.mainTitle} subTitle={titlesData.subTitle}/>
                <TabMenu menuItems={worksItems}/>
                <FlexWrapper justify={'center'} wrap={'wrap'} gap={'60px 34px'} align={'stretch'}>
                    {workData.map((el, index) => {
                        return (
                            <Work key={index} title={el.title} text={el.text}
                                  src={el.src} altText={el.altText} techText={el.techText} liveLink={el.liveLink} codeLink={el.codeLink}/>
                        )
                    })}
                </FlexWrapper>
            </Container>
        </S.Works>
    )
}


