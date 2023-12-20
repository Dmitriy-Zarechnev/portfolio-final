import React, {useCallback} from 'react'
import type {Container, Engine} from 'tsparticles-engine'
import Particles from 'react-tsparticles'
import {loadSlim} from 'tsparticles-slim'
import {theme} from '../../styles/theme'

export const Particle: React.FC = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine)
        await loadSlim(engine)
    }, [])

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container)
    }, [])

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: 'repulse'
                        },
                        resize: true
                    },
                    modes: {
                        push: {
                            quantity: 4
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4
                        }
                    }
                },
                particles: {
                    color: {
                        value: `${theme.colors.contactColor}`
                    },
                    move: {
                        direction: 'none',
                        enable: true,
                        outModes: {
                            default: 'bounce'
                        },
                        random: false,
                        speed: 1,
                        straight: false
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1000
                        },
                        value: 50
                    },
                    opacity: {
                        value: 0.5
                    },
                    shape: {
                        type: 'circle'
                    },
                    size: {
                        value: {min: 1, max: 3}
                    }
                },
                detectRetina: true
            }}
        />
    )
}