const fightDefault = {
  fightNum: 0,
  isFetching: false,
  winners: []
}

const fightReducer = ((state = fightDefault, action) => {
  switch (action.type) {
    case 'SET_FIGHT_NUMBER_FILTER':
      return {
        ...state,
        fightNum: action.fightNum
      }
    case 'SET_FETCHING_STATE':
      return {
        ...state,
        isFetching: action.isFetching
      }
    case 'SET_WINNER':
      return {
        ...state,
        winners: [...state.winners, action.id]
      }
    default:
      return state
  }
})

export default fightReducer