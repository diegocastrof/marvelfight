export const setFightNumberFilter = (fightNum = 0) => ({
  type: 'SET_FIGHT_NUMBER_FILTER',
  fightNum
})

export const setIsFetching = (bool) => ({
  type: 'SET_FETCHING_STATE',
  isFetching: bool
})

export const setWinner = (id) => ({
  type: 'SET_WINNER',
  id
})