import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getModalItemByTitleAndId } from '../actions/modalItem.actions';

class ItemsView extends Component {
  handleClickItem = (title, id, e) => {
    e.preventDefault();
    this.props.dispatch(getModalItemByTitleAndId(title, id))
  }
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
            visibleItems.map(({ id, title: itemTitle, thumbnail }) => (
                <div key={ id } className="col s6 m6 l3">
                  <div className="card-container">
                    <div className="card">
                      <div className="card-image">
                          <img className="card-image__img" src={ `${thumbnail.path}.${thumbnail.extension}`.replace('http://', 'https://') } alt="Character picture"/>
                      </div>
                      <div className="card-content item-view-content">
                          <h4 className="card__title center-align red-text text-lighten-3">
                            <a onClick={ (e) => this.handleClickItem(title, id, e) }>
                              { itemTitle }
                            </a>

                          </h4>
                          <div className="center-align">
                            <button 
                              className="waves-effect waves-light red lighten-2 btn center-align"
                              onClick={ (e) => this.handleClickItem(title, id, e) }>
                                Read More
                            </button>     
                          </div>
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

export default connect()(ItemsView)
