const fightDefault = {
  fightNum: 0,
  isFetching: false,
  finishFetching: false,
  winners: [],
  losers: []
}

const fightReducer = ((state = fightDefault, action) => {
  switch (action.type) {
    case 'SET_FIGHT_NUMBER_FILTER':
      return {
        ...state,
        fightNum: action.fightNum
      }
    case 'SET_IS_FETCHING':
      return {
        ...state,
        isFetching: action.isFetching
      }
    case 'SET_FINISH_FETCHING':
      return {
        ...state,
        finishFetching: action.finishFetching
      }
    case 'SET_WINNER':
      return {
        ...state,
        winners: [...state.winners, action.winner]
      }
    case 'SET_LOSER':
      return {
        ...state,
        losers: [...state.losers, action.loser]
      }
    case 'RESET_RESULTS':
      return {
        ...state,
        winners: [],
        losers: []
      }
    default:
      return state
  }
})

export default fightReducer