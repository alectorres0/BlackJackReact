import {shuffleDeck} from '../API'
import {useState, useEffect} from "react"


const Deck = () =>{

    const [deck, setDeck] = useState(null);
useEffect(()=>{
    const getDeck = async() =>{
        const data = await shuffleDeck();
        setDeck(data.deck_id);
    }
    getDeck();
   

},[])



return(
    <h1>{deck}</h1>
)
}



export default Deck