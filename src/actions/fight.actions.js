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

export const setWinner = (id) => ({
  type: 'SET_WINNER',
  id
})