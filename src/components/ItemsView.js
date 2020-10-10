import React, { Component } from 'react';
import CharacterCard from '../components/CharacterCard'

class ItemsView extends Component {
  
  render() {
    return (
      <div>
        <h3>{ this.props.title }</h3>
        <div className="row">
          {
            this.props.items.length === 0 ? <p> No {this.props.title.toLowerCase()} found...</p> :
            this.props.items.map(({ id, title, description, thumbnail }) => (
                <div key={ id } className="col s2">
                  <div className="card">
                    <div className="card-image">
                        <img src={ `${thumbnail.path}.${thumbnail.extension}` } alt=""/>
                        <span className="card-title">{ title }</span>

                    </div>
                    <div className="card-content">
                        <p>{ description }</p>
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
