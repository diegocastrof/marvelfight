const getVisibleFighters = ({ winners, losers }, { text, sortBy, filterWinner, filterLoser }) => {
  let filteredFighters = [];
  if (filterWinner && filterLoser || !filterWinner && !filterLoser) {
    filteredFighters = [...winners, ...losers];
  } else if (filterWinner) {
    filteredFighters = [...winners];
  } else { filteredFighters = [...losers]}

  filteredFighters = filteredFighters.filter(fighter => fighter.name.toLowerCase().includes(text.toLowerCase()));

  return filteredFighters.sort((a, b) => {
    if (sortBy === 'comics') {
      return a.comics.available > b.comics.available ? -1 : 1
    } else if (sortBy === 'events') {
      return a.events.available > b.events.available ? -1 : 1
    } else {
      return a.series.available > b.series.available ? -1 : 1
    }
  })
}

export default getVisibleFighters
