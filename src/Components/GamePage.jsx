import {shuffleDeck} from '../API'
import {useState, useEffect} from 'react'
import Player from './Player'
const GamePage = () =>{

const [deck, setDeck] = useState(null);
useEffect(()=>{
    const getDeck = async() =>{
        const data = await shuffleDeck();
        setDeck(data.deck_id);
    }
    getDeck();
   

},[])
    return(
        <>
        <h1>Welcome to BlackJack!</h1>

        {deck && <Player deck = {deck} />}
        </>
    )
}


export default GamePage