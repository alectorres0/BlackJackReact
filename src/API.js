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