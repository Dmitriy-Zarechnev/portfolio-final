import {Header} from './layout/header/Header'
import {Main} from './layout/sections/main/Main'
import {Skills} from './layout/sections/skills/Skills'
import {Works} from './layout/sections/works/Works'
import {Footer} from './layout/footer/Footer'
import {About} from './layout/sections/about/About'
import {Particle} from './components/particle/Particle'
import {Slogan} from './layout/sections/slogan/Slogan'

function App() {
    return (
        <div>
            <Particle/>
            <Header/>
            <Main/>
            <About/>
            <Skills/>
            <Works/>
            <Slogan/>
            <Footer/>
        </div>
    )
}

export default App

