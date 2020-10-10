const comicsDefault = [];

const comicsReducer =  (state = comicsDefault, action) => {
    switch(action.type) {
        case 'FETCH_COMICS':
            return [
                ...state,
                ...action.comics
            ]
        case 'UNMOUNT_COMICS':
            return state.comics = []
        
        default:
            return state
    }
}

export default comicsReducer