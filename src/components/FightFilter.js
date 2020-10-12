import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getRandomCharacters, unmountCharacters } from '../actions/characters.actions';
import { setFightNumberFilter, setIsFetching } from '../actions/fight.actions';

class FightFilter extends Component {
  handleSubmit = (e) =>{
    e.preventDefault()
    if (!this.props.fight.fightNum) {
      alert('Enter a valid number to start')
    } else {
      this.props.dispatch(setIsFetching(true))
      this.props.dispatch(unmountCharacters())
      for (let i = 0; i < this.props.fight.fightNum *2 ; i++ ) {
        this.props.dispatch(getRandomCharacters())
      }
    }
  }
  render() {
    return (
      <div className="search-bar">
        <div className="row">
          <form className="col s12">
            <div className="container">
              <div className="input-fiel col s10">
                <input 
                  type="number" 
                  value={ this.props.fight.fightNum }
                  onChange={ (e) => {
                    e.target.value < 1 ? undefined : this.props.dispatch(setFightNumberFilter(e.target.value))
                  }}
                />
              </div>
              <div className="col s2">
                <button
                  className="waves-effect waves-light btn-small red lighten-2"
                  disabled={ this.props.fight.isFetching }
                  onClick={ this.handleSubmit }
                >
                  Go!
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
    filters: state.filters,
    fight: state.fight
  }
}
export default connect(mapStateToProps)(FightFilter)
