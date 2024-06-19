const baseURL = "https://www.deckofcardsapi.com/api/deck";

export async function shuffleDeck(){
    try{
        const response = await fetch(`${baseURL}/new/shuffle`);
        const data = await response.json();
        return data;
    }

    catch(err){
        console.error(err);
    }
}


export async function startPlayer(deck_id){

    try{
        const response = await fetch(`${baseURL}/${deck_id}/draw/?count=2`);
        const data = await response.json();
        return data;
    }

    catch(err){
        console.error(err)
    }

}