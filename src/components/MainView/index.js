import React from 'react'
import GamePanel from '../GamePanel'
import { Container } from './style'

export default function MainView() {
    return (
        <Container>
            <img 
                src = "https://furia.gg/wp-content/themes/furia-website/img/FURIA.png"
                alt = "Furia Logo"
                className = "mainLogo"
            />
            <div className = "nextGame">
                <h2>PRÓXIMO JOGO</h2>
                <GamePanel />
            </div>
            <img 
                src = "https://furia.gg/wp-content/themes/furia-website/img/PATROCINADORES.png"
                alt = "Furia Sponsors"
                className = "mainSponsors"
            />
            
        </Container>
    )
}
