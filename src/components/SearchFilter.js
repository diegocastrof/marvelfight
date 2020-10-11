import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getCharacters, unmountCharacters } from '../actions/characters.actions';
import { setTextFilter } from '../actions/filters.actions';

class SearchFilter extends Component {
  handleSearch = () =>{
    this.props.dispatch(unmountCharacters())
    this.props.dispatch(getCharacters(this.props.filters))
  }
  render() {
    return (
      <div>
        <input 
          type="text" 
          value={ this.props.filters.text }
          placeholder='Search your Marvel Hero!'
          onChange={ (e) => {
            this.props.dispatch(setTextFilter(e.target.value))
          }}
        />
        <button
          onClick={ this.handleSearch }
        >
          Search
        </button>
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