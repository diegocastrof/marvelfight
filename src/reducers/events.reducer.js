const eventsDefault = [];

const eventsReducer =  (state = eventsDefault, action) => {
    switch(action.type) {
        case 'FETCH_EVENTS':
            return [
                ...state,
                ...action.events
            ]
        case 'UNMOUNT_EVENTS':
            return state.events = []
        
        default:
            return state
    }
}

export default eventsReducer