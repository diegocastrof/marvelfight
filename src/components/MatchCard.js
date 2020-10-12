import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setWinner } from '../actions/fight.actions'

class MatchCard extends Component {
  state = {
    winnerId: undefined
  }
  componentDidMount() {
    const winnerIndex = Math.round(Math.random());
    const winnerId = this.props.fighters[winnerIndex].id;
    this.props.dispatch(setWinner(winnerId))
    this.setState(() => ({ winnerId }))
  }
  render() {
    const fighterOne = this.props.fighters[0];
    const fighterTwo = this.props.fighters[1];
    const winnerId = this.state.winnerId;
    return (
      <div>
        <div> { fighterOne.id === winnerId ? `${fighterOne.name} is the Winner i weas`: fighterOne.name } </div>
  
        <div> { fighterTwo.id === winnerId ? `${fighterTwo.name} is the Winner i weas`: fighterTwo.name } </div>
        <br/>
      </div>
    )
  }
}

export default connect()(MatchCard)