import React, { Component } from 'react';

class ItemsView extends Component {
  
  render() {
    const size = 8;
    const visibleItems = this.props.items.slice(0, size);
    const { title } = this.props;
    return (
      <div>
        <h2 className="red-text text-lighten-3">{title}</h2>
        <div className="row">
          {
            visibleItems.length === 0 ? <p> No { title.toLowerCase() } found...</p> :
            visibleItems.map(({ id, title, thumbnail }) => (
                <div key={ id } className="col s6 m6 l3">
                  <div className="card-container">
                    <div className="card">
                      <div className="card-image">
                          <img className="card-image__img" src={ `${thumbnail.path}.${thumbnail.extension}`.replace('http://', 'https://') } alt="Character picture"/>
                      </div>
                      <div className="card-content item-view-content">
                          <h4 className="card__title center-align red-text text-lighten-3"> { title }</h4>
                          
                      </div>
                    </div>
                  </div>
                </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default ItemsView
