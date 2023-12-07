import './App.css'
import {Header} from './layout/header/Header'
import {Main} from './layout/sections/main/Main'
import {Skills} from './layout/sections/skills/Skills'
import {Works} from './layout/sections/works/Works'
import {Hobbies} from './layout/sections/slider/Hobbies'
import {Contact} from './layout/sections/contacts/Contact'
import {Slogan} from './layout/sections/slogan/Slogan'

function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Hobbies/>
            <Contact/>
            <Slogan/>
        </div>
    )
}

export default App

