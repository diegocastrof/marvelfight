export const getEventsById = (id) => {
  const url = `https://gateway.marvel.com/v1/public/characters/${id}/events?ts=1&apikey=919522bcad87d0714bd2704328098fa4&hash=c12ced18fd3a3e9155dfdf66c3885377`
  return (dispatch) => {
      fetch(url)
          .then(res => res.json())
          .then(event => {
              dispatch({
                  type: 'FETCH_EVENTS',
                  events: event.data.results
              })
          })
  }
}

export const unmountEvents = () => ({ 
  type: 'UNMOUNT_EVENTS'
})