export const setFightNumberFilter = (fightNum = 0) => ({
  type: 'SET_FIGHT_NUMBER_FILTER',
  fightNum
})

export const setIsFetching = (bool) => ({
  type: 'SET_IS_FETCHING',
  isFetching: bool
})


export const setFinishFetching = (bool) => ({
  type: 'SET_FINISH_FETCHING',
  finishFetching: bool
})

export const setWinner = (winner) => ({
  type: 'SET_WINNER',
  winner
})

export const setLoser = (loser) => ({
  type: 'SET_LOSER',
  loser
})

export const resetResults = () => ({
  type: 'RESET_RESULTS'
})