import React from 'react'
import {SectionTitle} from '../../../components/sectionTitle/SectionTitle'
import {Skill} from './skill/Skill'
import {Container} from '../../../components/Container'
import {S} from './Skills_Styles'
import {Reveal} from 'react-awesome-reveal'

const titlesData = {
    mainTitle: 'Технологии',
    subTitle: 'Технологии с которыми я работаю'
}

const skillData = [
    {
        iconId: 'css',
        title: 'CSS3',
        iconViewBox: '0 0 120 119'
    },
    {
        iconId: 'html',
        title: 'HTML5',
        iconViewBox: '0 0 120 120'
    },
    {
        iconId: 'redux',
        title: 'Redux',
        iconViewBox: '0 0 120 120'
    },


    {
        iconId: 'js',
        title: 'JS',
        iconViewBox: '0 0 120 120'
    },
    {
        iconId: 'react',
        title: 'React',
        iconViewBox: '0 0 113 101'
    },
    {
        iconId: 'ts',
        title: 'TS',
        iconViewBox: '0 0 120 120'
    },


    {
        iconId: 'git',
        title: 'Git',
        iconViewBox: '0 0 105 105'
    },
    {
        iconId: 'styledComp',
        title: 'Styled Comp.',
        iconViewBox: '0 0 120 120'
    },
    {
        iconId: 'gitHub',
        title: 'GitHub',
        iconViewBox: '0 0 88 88'
    },

    {
        iconId: 'nextJS',
        title: 'NextJS',
        iconViewBox: '0 0 512 512'
    },
    {
        iconId: 'MUI',
        title: 'MUI',
        iconViewBox: '0 0 24 24'
    }
    ,{
        iconId: 'storyBook',
        title: 'StoryBook',
        iconViewBox: '-31.5 0 319 319'
    }
]

export const Skills: React.FC = () => {
    return (
        <S.Skills id={'techStack'}>
            <Container>
                <SectionTitle mainTitle={titlesData.mainTitle} subTitle={titlesData.subTitle}/>

                <S.SkillWrapper>
                    <Reveal cascade={true}
                            damping={0.2}
                            triggerOnce={true}
                    >
                        {skillData.map((el, index) => {
                            return (
                                <Skill key={index} iconId={el.iconId} title={el.title} iconViewBox={el.iconViewBox}/>
                            )
                        })}
                    </Reveal>
                </S.SkillWrapper>

            </Container>
        </S.Skills>
    )
}


