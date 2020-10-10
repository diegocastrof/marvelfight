const charactersDefault = [];

const characterReducer =  (state = charactersDefault, action) => {
    switch(action.type) {
        case 'FETCH_CHARACTERS':
            return [
                ...state,
                ...action.characters
            ]
        case 'UNMOUNT_CHARACTERS':
            return state.characters = []
        
        case 'FETCH_CHARACTER':
            return [
                ...state,
                action.characterInfo
            ]
        default:
            return state
    }
}

export default characterReducer