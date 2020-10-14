export const getCharacters = (filter = {}) => {
    let url = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=919522bcad87d0714bd2704328098fa4&hash=c12ced18fd3a3e9155dfdf66c3885377`;
    const { text } = filter;
    text ? url += `&nameStartsWith=${text}` : undefined;
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

export const getCharacterById = (id) => {
    const url = `https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=919522bcad87d0714bd2704328098fa4&hash=c12ced18fd3a3e9155dfdf66c3885377`;
    return (dispatch) => {
        fetch(url)
            .then(res => res.json())
            .then(character => {
                dispatch({
                    type: 'FETCH_CHARACTER',
                    characterInfo: character.data.results[0]
                })
            })
    }
}

export const getCharacterByOffset = (offset) => {
    const url = `https://gateway.marvel.com/v1/public/characters?limit=1&offset=${offset}&ts=1&apikey=919522bcad87d0714bd2704328098fa4&hash=c12ced18fd3a3e9155dfdf66c3885377`       
    return (dispatch) => {
        fetch(url)
            .then(res => res.json())
            .then(character => {
                dispatch({
                    type: 'FETCH_RANDOM_CHARACTER',
                    randomCharacter: character.data.results[0]
                })
            })
    }
}

export const unmountCharacters = () => ({ 
    type: 'UNMOUNT_CHARACTERS'
})