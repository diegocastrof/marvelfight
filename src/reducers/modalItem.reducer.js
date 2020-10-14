const modalItemDefault = [];

const modalItemReducer =  (state = modalItemDefault, action) => {
    switch(action.type) {
        case 'FETCH_MODAL_ITEM':
            return [
              ...state,
              action.modalItem
            ]

        case 'UNMOUNT_MODAL_ITEM':
            return state.modalItem = [];
        default:
            return state
    }
}

export default modalItemReducer