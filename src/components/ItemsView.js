import React, { Component } from 'react';

class ItemsView extends Component {
  
  render() {
    const size = 5;
    const visibleItems = this.props.items.slice(0, size);
    const { title } = this.props;
    return (
      <div>
        <h3>{ title }</h3>
        <div className="row">
          {
            visibleItems.length === 0 ? <p> No { title.toLowerCase() } found...</p> :
            visibleItems.map(({ id, title, thumbnail }) => (
                <div key={ id } className="col s3">
                  <div className="card">
                    <div className="card-image">
                        <img src={ `${thumbnail.path}.${thumbnail.extension}`.replace('http://', 'https://') } alt="Character picture"/>
                    </div>
                    <div className="card-content">
                        <h4> { title }</h4>
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
