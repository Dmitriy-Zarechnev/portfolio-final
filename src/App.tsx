import {Header} from './layout/header/Header'
import {Main} from './layout/sections/main/Main'
import {Skills} from './layout/sections/skills/Skills'
import {Works} from './layout/sections/works/Works'
import {Hobbies} from './layout/sections/hobbies/Hobbies'
import {Contact} from './layout/sections/contacts/Contact'
import {Footer} from './layout/footer/Footer'
import {About} from './layout/sections/about/About'
import {Particle} from './components/particle/Particle'

function App() {
    return (
        <div>
            <Particle/>
            <Header/>
            <Main/>
            <About/>
            <Skills/>
            <Works/>
            <Hobbies/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default App

