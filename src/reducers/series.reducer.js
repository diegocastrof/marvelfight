const seriesDefault = [];

const seriesReducer =  (state = seriesDefault, action) => {
    switch(action.type) {
        case 'FETCH_SERIES':
            return [
                ...state,
                ...action.series
            ]
        case 'UNMOUNT_COMICS':
            return state.series = []
        
        default:
            return state
    }
}

export default seriesReducer