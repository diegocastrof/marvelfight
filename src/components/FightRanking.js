import React, { Component } from 'react';
import { connect } from 'react-redux';
import  getVisibleFighters from '../selectors/ranking.selectors'
import { resetResults } from '../actions/fight.actions'

import RankingItem from '../components/RankingItem'

class FightRanking extends Component {
    state = {
      showRanking: true 
    }
    componentWillUnmount() {
      this.props.dispatch(resetResults())
    }
    handleShowRanking = () => {
      this.setState((prevState) => ({ 
        showRanking: !prevState.showRanking
      }))
    }
    render() {
      return (
        <div>
          <div className="container">
            <h3 className="center-align red-text text-lighten-3">Ranking</h3>
            <button
              onClick={ this.handleShowRanking }
              className="waves-effect waves-light btn-small red lighten-2"
            >
              { this.state.showRanking ? 'Hide Ranking' : 'Show Ranking'}
            </button>

            { this.state.showRanking && 
            <ul className="collection">
              {
                this.props.visibleFighters.length === 0 ? <li className="collection-item align-center"> No results </li> : 
                  this.props.visibleFighters.map((fighter, index) => (    
                    <RankingItem key={fighter.id} {...fighter} ranking={index+1} />
                  ))
              }
            </ul>
            }
            <br/>
          </div>
        </div>

      )
    }
} 

const mapStateToProps = (state) => {
  return {
    visibleFighters: getVisibleFighters(state.fight, state.filters)
  }
}

export default connect(mapStateToProps)(FightRanking)


{/* <li key={fighter.id}>{fighter.name} has {fighter.comics.available} comics, {fighter.events.available} events and {fighter.series.available} series available</li> */}