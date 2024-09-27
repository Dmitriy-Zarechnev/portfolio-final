import React, {useState} from 'react'
import {SectionTitle} from '../../../components/sectionTitle/SectionTitle'
import {TabMenu, TabsStatusType} from './tabMenu/TabMenu'
import {Work} from './work/Work'
import flashCardsImg from '..//../../assets/images/flashCards.png'
import toDoListImg from '..//../../assets/images/toDoList.jpeg'
import socialNetwork from '..//../../assets/images/picturesOfLife.jpg'
import counterImg from '..//../../assets/images/counter.jpg'
import clicker from '..//../../assets/images/clicker.jpeg'
import {Container} from '../../../components/Container'
import {S} from './Works_Styles'
import {AnimatePresence, motion} from 'framer-motion'

const titlesData = {
    mainTitle: 'Проекты',
    subTitle: 'Проекты разработанные мной (май 2023 - н.в.)'
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
        title: 'Memory Boost',
        text: 'Передовое приложение для создания и использования учебных карточек, разработанное для улучшения запоминания и обучения. Вы сможете легко создавать собственные наборы карточек, использовать готовые шаблоны и делиться ими с другими пользователями. Интеллектуальная система повторений поможет вам запомнить информацию быстрее и надолго. Независимо от того, готовитесь ли вы к экзаменам, изучаете новый язык или просто хотите улучшить свои знания, Memory Boost станет вашим незаменимым инструментом для самообразования.',
        src: flashCardsImg,
        altText: 'Memory Boost project',
        techText: 'React',
        liveLink: 'https://flashcards-lemon-seven.vercel.app/sign-in',
        codeLink: 'https://github.com/Dmitriy-Zarechnev/flashcards',
        id: 1
    },
    {
        title: 'Task Master',
        text: 'Приложение для управления задачами, созданное для повышения вашей продуктивности и организации. С его помощью вы сможете легко планировать свой день, устанавливать приоритеты и отслеживать выполнение задач. Вы студент, родитель или просто работник, который хочет лучше управлять своим временем, Task Master станет вашим надежным помощником в достижении целей.',
        src: toDoListImg,
        altText: 'TaskMaster project',
        techText: 'React',
        liveLink: 'https://dmitriy-zarechnev.github.io/ToDoList_ui/',
        codeLink: 'https://github.com/Dmitriy-Zarechnev/ToDoList_ui',
        id: 2
    },
    {
        title: 'Connectify',
        text: 'Инновационная социальная сеть, созданная для того, чтобы объединять людей по всему миру. С Connectify вы можете легко находить и общаться с друзьями, делиться своими мыслями, фотографиями, а также участвовать в интересных обсуждениях. Приложение предлагает интуитивно понятный интерфейс. Независимо от того, хотите ли вы оставаться на связи с близкими, находить единомышленников или просто делиться своими увлечениями, Connectify станет вашим надежным проводником в мире социальных сетей.',
        src: socialNetwork,
        altText: 'Connectify project',
        techText: 'NextJS',
        liveLink: 'https://pictures-of-life.online/ru',
        codeLink: 'https://github.com/technosamuraiway/pictures-of-life',
        id: 3
    },
    {
        title: 'Counter',
        text: 'Простое, но полезное приложение, предназначенное для отслеживания числовых значений. Оно может быть использовано в самых разных целях, таких как подсчет дней до события, ведение учета задач, отслеживание времени или просто подсчет чего-либо',
        src: counterImg,
        altText: 'Counter project',
        techText: 'Mini project',
        liveLink: 'https://dmitriy-zarechnev.github.io/Counter_v2/',
        codeLink: 'https://github.com/Dmitriy-Zarechnev/Counter_v2',
        id: 4
    },
    {
        title: 'Mini game',
        text: 'Игровое или развлекательное приложение, в котором пользователи взаимодействуют с элементами на экране для достижения большего числа очков. Оно может быть использовано для развлечения, тренировки внимательности или скорости реакции.',
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


