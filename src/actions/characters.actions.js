export const getCharacters = (q) => {
    const url = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=919522bcad87d0714bd2704328098fa4&hash=c12ced18fd3a3e9155dfdf66c3885377`
    return (dispatch) => {
        fetch(url)
            .then(res => res.json())
            .then(characters => {
                dispatch({
                    type: 'FETCH_CHARACTERS',
                    characters: characters.data.results
                })
            })
    }
}