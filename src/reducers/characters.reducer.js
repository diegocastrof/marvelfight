const charactersDefault = [];

const characterReducer =  (state = charactersDefault, action) => {
    switch(action.type) {
        case 'FETCH_CHARACTERS':
            // console.log(action.characters.data.results)
            return [
                ...state,
                ...action.characters
            ]
        default:
            return state
    }
}

export default characterReducer