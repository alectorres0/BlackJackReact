import {startPlayer} from '../API'
import {useState, useEffect} from 'react'

const Player = ({deck}) =>{
const [playerCards, setPlayerCards] = useState([]);
useEffect(()=>{

    const getPlayerCards = async()=>{
        const cards = await startPlayer(deck);
        console.log(cards.cards)
        setPlayerCards(cards.cards)
    }
    
    getPlayerCards();

},[])

console.log("playerCards" + playerCards)
return(
    deck ? (playerCards.map((card)=>{
        return(<h1 key = {card.code}>{`${card.value} of ${card.suit}`}</h1>)
    })
):(<h1>Loading</h1>
)    

// {/* <h1>Hi</h1> */}
)
}




export default Player