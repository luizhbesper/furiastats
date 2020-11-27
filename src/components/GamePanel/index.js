import React, {useCallback, useState} from 'react'
import {Container} from './style'
import {useNextGame} from '../../api'

export default function GamePanel() {
    const gameInfo = useNextGame();
    const [countdown, setCountdown] = useState(new Date)

    const dateFormatter = useCallback((full) => {
        const date = new Date(gameInfo.game.timestampMatch * 1000)
        return  (date.getDate() ) + "/" + 
                ((date.getMonth() + 1)) + "/" + 
                date.getFullYear() + ' - ' +
                date.getHours() + ':' +
                date.getMinutes() + ':' +
                (date.getUTCSeconds() < 10 ? '0' + date.getUTCSeconds() : date.getUTCSeconds());
    }, [gameInfo.game.timestampMatch])

    return (
        <Container>
            <div className = "superior">
                <div className = "team">
                    <img src = {gameInfo.logo1 ? gameInfo.logo1 : ''} alt = "furia logo" />
                    <span>{"Furia"}</span>
                </div>
                <span className = "vs">vs</span>
                <div className = "team">
                    <span>{gameInfo.game ? gameInfo.game.opponentTeam : ''}</span>
                    <img src = {gameInfo.logo2 ? gameInfo.logo2 : ''} alt = "furia logo" />
                </div>
            </div>
            <div className = "inferior">
                <div>
                <span className  ="tournament">{gameInfo.game.tournament}</span>
                <span className  ="date">{dateFormatter(true) + ' BRT'}</span>
                </div>
                <span className = "countdown"></span>
            </div>
        </Container>
    )
}
