import React, {useState} from 'react'
import {SectionTitle} from '../../../components/sectionTitle/SectionTitle'
import {TabMenu, TabsStatusType} from './tabMenu/TabMenu'
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

const tabsItems: Array<{ title: string, status: TabsStatusType }> = [
    {
        title: 'All',
        status: 'all'
    },

    {
        title: 'Landing Page',
        status: 'landing'
    },
    {
        title: 'React',
        status: 'React'
    },
    {
        title: 'SPA',
        status: 'SPA'
    }
]

const worksData = [
    {
        title: 'First Title',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        src: pictureFirst,
        altText: 'ProjectPicture',
        techText: 'React',
        liveLink: '#',
        codeLink: '#'
    },
    {
        title: 'Second Title',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        src: pictureSecond,
        altText: 'ProjectPicture',
        techText: 'SPA',
        liveLink: '#',
        codeLink: '#'
    },
    {
        title: 'Third Title',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        src: pictureThird,
        altText: 'ProjectPicture',
        techText: 'landing',
        liveLink: '#',
        codeLink: '#'
    },
    {
        title: 'Forth Title',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        src: pictureForth,
        altText: 'ProjectPicture',
        techText: 'SPA, HTML',
        liveLink: '#',
        codeLink: '#'
    },
    {
        title: 'Fifth Title',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        src: pictureFifth,
        altText: 'ProjectPicture',
        techText: 'React',
        liveLink: '#',
        codeLink: '#'
    },
    {
        title: 'Sixth Title',
        text: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        src: pictureSixth,
        altText: 'ProjectPicture',
        techText: 'landing',
        liveLink: '#',
        codeLink: '#'
    }
]


export const Works: React.FC = () => {

    const [currentFilterStatus, setCurrentFilterStatus] = useState('all')

    let filteredWorks = worksData

    if (currentFilterStatus === 'landing') {
        filteredWorks = worksData.filter((work) => {
            return work.techText === 'landing'
        })
    }

    if (currentFilterStatus === 'React') {
        filteredWorks = worksData.filter((work) => {
            return work.techText === 'React'
        })
    }

    if (currentFilterStatus === 'SPA') {
        filteredWorks = worksData.filter((work) => {
            return work.techText === 'SPA'
        })
    }

    function changeFilterStatus(value: TabsStatusType) {
        setCurrentFilterStatus(value)
    }

    return (
        <S.Works id={'projects'}>
            <Container>
                <SectionTitle mainTitle={titlesData.mainTitle} subTitle={titlesData.subTitle}/>
                <TabMenu tabsItems={tabsItems}
                         changeFilterStatus={changeFilterStatus}
                         currentFilterStatus={currentFilterStatus}/>
                <S.WorkWrapper>
                    {filteredWorks.map((el, index) => {
                        return (
                            <Work key={index} title={el.title} text={el.text}
                                  src={el.src} altText={el.altText} techText={el.techText} liveLink={el.liveLink} codeLink={el.codeLink}/>
                        )
                    })}
                </S.WorkWrapper>
            </Container>
        </S.Works>
    )
}


