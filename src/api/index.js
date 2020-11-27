import {useState, useEffect} from 'react'
import axios from 'axios'

export function useNextGame() {
    const [game, setGame] = useState({});
    const [logo1, setLogo1] = useState('')
    const [logo2, setLogo2] = useState('')
    
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

    const response = {
        game,
        logo1,
        logo2,
    }

    return response;
}
