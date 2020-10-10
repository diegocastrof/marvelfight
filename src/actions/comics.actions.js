export const getComicsById = (id) => {
  const url = `https://gateway.marvel.com/v1/public/characters/${id}/comics?ts=1&apikey=919522bcad87d0714bd2704328098fa4&hash=c12ced18fd3a3e9155dfdf66c3885377`
  return (dispatch) => {
      fetch(url)
          .then(res => res.json())
          .then(comic => {
              dispatch({
                  type: 'FETCH_COMICS',
                  comics: comic.data.results
              })
          })
  }
}

export const unmountComics = () => ({ 
  type: 'UNMOUNT_COMICS'
})