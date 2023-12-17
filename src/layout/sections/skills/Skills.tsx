import React from 'react'
import {SectionTitle} from '../../../components/sectionTitle/SectionTitle'
import {Skill} from './skill/Skill'
import {Container} from '../../../components/Container'
import {S} from './Skills_Styles'

const titlesData = {
    mainTitle: 'My Tech Stack',
    subTitle: 'Technologies I’ve been working with recently'
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
        iconId: 'sass',
        title: 'SASS',
        iconViewBox: '0 0 117 87'
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
        title: 'Styled Comp',
        iconViewBox: '0 0 120 120'
    },
    {
        iconId: 'gitHub',
        title: 'GitHub',
        iconViewBox: '0 0 88 88'
    },


    {
        iconId: 'nodeJS',
        title: 'NodeJS',
        iconViewBox: '0 0 32 32'
    },
    {
        iconId: 'figma',
        title: 'Figma',
        iconViewBox: '0 0 59 90'
    },
    {
        iconId: 'vscode',
        title: 'VSCode',
        iconViewBox: '0 0 112 112'
    },


    {
        iconId: 'super',
        title: 'Super',
        iconViewBox: '0 0 120 120'
    }
]

export const Skills: React.FC = () => {
    return (
        <S.Skills>
            <Container>
                <SectionTitle mainTitle={titlesData.mainTitle} subTitle={titlesData.subTitle}/>
                <S.SkillWrapper>
                    {skillData.map((el, index) => {
                        return (
                            <Skill key={index} iconId={el.iconId} title={el.title} iconViewBox={el.iconViewBox}/>
                        )
                    })}
                </S.SkillWrapper>
            </Container>
        </S.Skills>
    )
}


