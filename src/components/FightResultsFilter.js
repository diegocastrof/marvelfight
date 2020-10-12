import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getRandomCharacters, unmountCharacters } from '../actions/characters.actions';
import { setFightNumberFilter, setFinishFetching, setIsFetching } from '../actions/fight.actions';
import { setTextFilter, setWinnerFilter, setLoserFilter, sortByComics, sortByEvents, sortBySeries } from '../actions/filters.actions'

class FightResultsFilter extends Component {
  componentDidMount() {
    this.props.dispatch(setTextFilter())
  }
  componentWillUnmount() {
    this.props.dispatch(setTextFilter())
    this.props.dispatch(setFinishFetching(false))
  }
  render() {
    return (
      <div>
        <div className="container">
          <h2 className="center-align red-text text-lighten-3">Let's check the results...</h2>
          <input 
            type="text"
            value={ this.props.filters.text }
            onChange={ (e) => { 
              this.props.dispatch(setTextFilter(e.target.value)) 
            }}
          />
          <label>
              <input 
                type="checkbox"
                onChange={ (e) => e.target.checked ? this.props.dispatch(setWinnerFilter(true)) : this.props.dispatch(setWinnerFilter(false)) } 
              />
              <span>Winner</span>
          </label>
          <label>
              <input 
                type="checkbox"
                onChange={ (e) => e.target.checked ? this.props.dispatch(setLoserFilter(true)) : this.props.dispatch(setLoserFilter(false)) } 
              />
              <span>Losers</span>
          </label>
          <select 
            className="browser-default"
            value={ this.props.filters.sortBy }
            onChange = { (e) => { 
              (e.target.value) === 'comics' ? this.props.dispatch(sortByComics()) : 
              (e.target.value) === 'events' ? this.props.dispatch(sortByEvents()) : this.props.dispatch(sortBySeries())
            }}
          >
            <option value="comics">Comics</option>
            <option value="events">Events</option>
            <option value="series">Series</option>
          </select>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
    filters: state.filters,
    fight: state.fight
  }
}
export default connect(mapStateToProps)(FightResultsFilter)
