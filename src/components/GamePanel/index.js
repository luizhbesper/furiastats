import React, {useEffect, useState} from 'react'
import {Container} from './style'
import axios from 'axios'

export default function GamePanel() {
    const [game, setGame] = useState();
    const [logo1, setLogo1] = useState(null);
    const [logo2, setLogo2] = useState(null);

    useEffect(() => {
        axios
        .get('http://localhost:3300/nextmatch')
        .then(response => setGame(response.data))
        
        axios.get('http://localhost:3300/nextmatch/team1Logo', { responseType: 'arraybuffer' })
        .then(response => {
            let blob = new Blob(
                [response.data], 
                { type: response.headers['content-type'] }
            )
            let image = URL.createObjectURL(blob)
            setLogo1(image)
        })
        
        axios.get('http://localhost:3300/nextmatch/team2Logo', { responseType: 'arraybuffer' })
        .then(response => {
            let blob = new Blob(
                [response.data], 
                { type: response.headers['content-type'] }
            )
            let image = URL.createObjectURL(blob)
            setLogo2(image)
        })

    }, [])

    return (
        <Container>
            <div className = "superior">
                <div className = "team">
                    <img src = {logo1 ? logo1 : ''} alt = "furia logo" />
                    <span>{"Furia"}</span>
                </div>
                <span className = "vs">vs</span>
                <div className = "team">
                    <span>{game ? game.opponentTeam : ''}</span>
                    <img src = {logo2 ? logo2 : ''} alt = "furia logo" />
                </div>
            </div>
        </Container>
    )
}
