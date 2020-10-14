export const getModalItemByTitleAndId = (title, id) => {
  const url_title = title.toLowerCase();
  const url = `https://gateway.marvel.com/v1/public/${url_title}/${id}?ts=1&apikey=919522bcad87d0714bd2704328098fa4&hash=c12ced18fd3a3e9155dfdf66c3885377`       
  return (dispatch) => {
      fetch(url)
          .then(res => res.json())
          .then(item => {
              dispatch({
                  type: 'FETCH_MODAL_ITEM',
                  modalItem: item.data.results[0]
              })
          })
  }
}

export const unmountModalItem = () => ({ 
  type: 'UNMOUNT_MODAL_ITEM'
})