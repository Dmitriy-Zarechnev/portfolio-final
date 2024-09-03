import React, {useState} from 'react'
import {SectionTitle} from '../../../components/sectionTitle/SectionTitle'
import {TabMenu, TabsStatusType} from './tabMenu/TabMenu'
import {Work} from './work/Work'
import flashCardsImg from '..//../../assets/images/flashCards.png'
import toDoListImg from '..//../../assets/images/toDoList.jpeg'
import socialNetwork from '..//../../assets/images/picturesOfLife.jpg'
import counterImg from '..//../../assets/images/counter.jpg'
import clicker from '..//../../assets/images/clicker.png'
import {Container} from '../../../components/Container'
import {S} from './Works_Styles'
import {AnimatePresence, motion} from 'framer-motion'

const titlesData = {
    mainTitle: 'Проекты',
    subTitle: 'Проекты разработанные мной'
}

const tabsItems: Array<{ title: string, status: TabsStatusType }> = [
    {
        title: 'Все',
        status: 'all'
    },
    {
        title: 'React',
        status: 'React'
    },
    {
        title: 'NextJS',
        status: 'NextJS'
    },
    {
        title: 'Мини',
        status: 'Mini project'
    }
]

const worksData = [
    {
        title: 'Flash Cards',
        text: 'Приложение, которое позволяет пользователям создавать, организовывать и использовать карточки для запоминания информации. Такие платформы часто используются для изучения языков, подготовки к экзаменам, или просто для запоминания различных фактов.',
        src: flashCardsImg,
        altText: 'Flash Cards project',
        techText: 'React',
        liveLink: 'https://flashcards-lemon-seven.vercel.app/sign-in',
        codeLink: 'https://github.com/Dmitriy-Zarechnev/flashcards',
        id: 1
    },
    {
        title: 'TO DO LIST',
        text: 'Приложение, которое помогает пользователям организовывать свои задачи и управлять временем. Такие платформы предназначены для планирования дел, постановки целей и отслеживания прогресса в выполнении задач. Они могут быть полезны как для личного использования, так и для работы в команде.',
        src: toDoListImg,
        altText: 'TO DO LIST project',
        techText: 'React',
        liveLink: 'https://dmitriy-zarechnev.github.io/ToDoList_ui/',
        codeLink: 'https://github.com/Dmitriy-Zarechnev/ToDoList_ui',
        id: 2
    },
    {
        title: 'Pictures-Of-Life',
        text: 'Онлайн-пространство, предназначенное для взаимодействия между пользователями, создания и обмена контентом, а также построения и поддержания социальных связей. Такие платформы позволяют людям общаться, делиться информацией, находить сообщества по интересам и участвовать в общественной жизни, независимо от географического расположения.',
        src: socialNetwork,
        altText: 'Pictures-Of-Life project',
        techText: 'NextJS',
        liveLink: 'https://pictures-of-life.online/ru',
        codeLink: 'https://github.com/technosamuraiway/pictures-of-life',
        id: 3
    },
    {
        title: 'Counter',
        text: 'Простое, но полезное приложение, предназначенное для отслеживания числовых значений или событий. Оно может быть использовано в самых разных целях, таких как подсчет дней до события, ведение учета задач, отслеживание времени или просто подсчет чего-либо',
        src: counterImg,
        altText: 'Counter project',
        techText: 'Mini project',
        liveLink: 'https://dmitriy-zarechnev.github.io/Counter_v2/',
        codeLink: 'https://github.com/Dmitriy-Zarechnev/Counter_v2',
        id: 4
    },
    {
        title: 'Mini game',
        text: 'Игровое или развлекательное приложение, в котором пользователи взаимодействуют с элементами на экране, обычно квадратами, для выполнения различных задач или достижения целей. Оно может быть использовано для развлечения, тренировки внимательности или скорости реакции.',
        src: clicker,
        altText: 'Clicker project',
        techText: 'Mini project',
        liveLink: 'https://dmitriy-zarechnev.github.io/Game/',
        codeLink: 'https://github.com/Dmitriy-Zarechnev/Game',
        id: 5
    }
]


export const Works: React.FC = () => {

    const [currentFilterStatus, setCurrentFilterStatus] = useState('all')

    let filteredWorks = worksData


    if (currentFilterStatus === 'React') {
        filteredWorks = worksData.filter((work) => {
            return work.techText === 'React'
        })
    }

    if (currentFilterStatus === 'NextJS') {
        filteredWorks = worksData.filter((work) => {
            return work.techText === 'NextJS'
        })
    }

    if (currentFilterStatus === 'Mini project') {
        filteredWorks = worksData.filter((work) => {
            return work.techText === 'Mini project'
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
                    <AnimatePresence>
                        {filteredWorks.map((el) => {
                            return (
                                <motion.div
                                    layout={true}
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    exit={{opacity: 0}}
                                    key={el.id}
                                >
                                    <Work key={el.id} title={el.title} text={el.text}
                                          src={el.src} altText={el.altText} techText={el.techText}
                                          liveLink={el.liveLink} codeLink={el.codeLink}
                                    />
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>
                </S.WorkWrapper>
            </Container>
        </S.Works>
    )
}


