import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setFightNumberFilter, setFinishFetching, setIsFetching } from '../actions/fight.actions';
import { setTextFilter, setWinnerFilter, setLoserFilter, sortByComics, sortByEvents, sortBySeries } from '../actions/filters.actions'

class FightResultsFilter extends Component {
  componentDidMount() {
    this.props.dispatch(setTextFilter())
  }
  componentWillUnmount() {
    this.props.dispatch(setTextFilter())
    this.props.dispatch(setFinishFetching(false));
    this.props.dispatch(setWinnerFilter(true));
    this.props.dispatch(setLoserFilter(false));
    this.props.dispatch(sortByComics());
  }
  render() {
    return (
      <div>
        <div className="container">
          
          <div className="row">
            <h2 className="center-align red-text text-lighten-3">Let's check the results...</h2>
            
            <div className="col s6">
              <input 
              type="text"
              value={ this.props.filters.text }
              placeholder="Filter text here"
              onChange={ (e) => { 
                this.props.dispatch(setTextFilter(e.target.value)) 
              }}
              />
            </div>
            
            <div className="col s6">
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
            <div className="col s12">
              <div className="row">
                <div className="col s6">
                  <label>
                    <input 
                      type="checkbox"
                      checked={ this.props.filters.filterWinner }
                      onChange={ (e) => e.target.checked ? this.props.dispatch(setWinnerFilter(true)) : this.props.dispatch(setWinnerFilter(false)) } 
                    />
                      <span>Winner</span>
                  </label>
                </div>
                <div className="col s6">
                  <label>
                    <input 
                      type="checkbox"
                      checked={ this.props.filters.filterLoser }
                      onChange={ (e) => e.target.checked ? this.props.dispatch(setLoserFilter(true)) : this.props.dispatch(setLoserFilter(false)) } 
                    />
                    <span>Losers</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          



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
