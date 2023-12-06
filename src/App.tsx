import './App.css'
import {Header} from './layout/header/Header'
import {Main} from './layout/sections/main/Main'
import {Skills} from './layout/sections/skills/Skills'
import {Works} from './layout/sections/works/Works'
import {Hobbies} from './layout/sections/slider/Hobbies'

function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Hobbies/>
        </div>
    )
}

export default App

