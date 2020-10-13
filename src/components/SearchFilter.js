import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCharacters, unmountCharacters } from '../actions/characters.actions';
import { setTextFilter } from '../actions/filters.actions';

class SearchFilter extends Component {
  handleSearch = (e) =>{
    e.preventDefault()
    this.props.dispatch(unmountCharacters())
    this.props.dispatch(getCharacters(this.props.filters))
  }
  handleClear = (e) =>{
    e.preventDefault()
    this.props.dispatch(unmountCharacters())
    this.props.dispatch(setTextFilter(''))
  }
  render() {
    return (
      <div className="search-bar">
        <div className="row">
          <form className="col s12">
            <div className="container">
              <div className="input-fiel col s4 m8">
                <input 
                  type="text" 
                  value={ this.props.filters.text }
                  placeholder='Search your Marvel Hero!'
                  onChange={ (e) => {
                    this.props.dispatch(setTextFilter(e.target.value))
                  }}
                />
              </div>
              <div className="col s4 m2">
                <button
                  className="waves-effect waves-light btn-small red lighten-2"
                  onClick={ this.handleSearch }
                >
                  Search
                </button>
              </div>
              <div className="col s4 m2">
                <button
                  className="waves-effect waves-light btn-small green lighten-2"
                  onClick={ this.handleClear }
                >
                  Clear
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
    filters: state.filters
  }
}

export default connect(mapStateToProps)(SearchFilter)



