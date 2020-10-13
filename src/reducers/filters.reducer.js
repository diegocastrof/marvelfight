// Filter reducer
const filterDefault = {
  text: '',
  filterWinner: true,
  filterLoser: false,
  sortBy: 'comics'          // comics, events, or series
}

const filterReducer = ((state = filterDefault, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    case 'SET_FILTER_WINNER':
      return {
        ...state,
        filterWinner: action.bool
      }
    case 'SET_FILTER_LOSER':
      return {
        ...state,
        filterLoser: action.bool
      }
    case 'SORT_BY_COMICS':
      return {
        ...state,
        sortBy: 'comics'
      }
    case 'SORT_BY_EVENTS':
      return {
        ...state,
        sortBy: 'events'
      }
    case 'SORT_BY_SERIES':
      return {
        ...state,
        sortBy: 'series'
      }
    default:
      return state
  }
})

export default filterReducer