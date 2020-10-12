export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

export const setWinnerFilter = (bool) => ({
    type: 'SET_FILTER_WINNER',
    bool 
})
export const setLoserFilter = (bool) => ({
    type: 'SET_FILTER_LOSER',
    bool
})

export const sortByComics = () => ({
    type: 'SORT_BY_COMICS'
})
export const sortByEvents = () => ({
    type: 'SORT_BY_EVENTS'
})
export const sortBySeries = () => ({
    type: 'SORT_BY_SERIES'
})