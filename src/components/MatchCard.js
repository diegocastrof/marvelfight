import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setFinishFetching, setWinner, setLoser } from '../actions/fight.actions'
import { Link } from 'react-router-dom'

class MatchCard extends Component {
  state = {
    winnerId: undefined
  }
  componentDidMount() {
    const winnerIndex = Math.round(Math.random());
    const loserIndex = winnerIndex ? 0 : 1;
    const winner = this.props.fighters[winnerIndex];
    const loser = this.props.fighters[loserIndex];
    this.props.dispatch(setWinner(winner));
    this.props.dispatch(setLoser(loser));
    this.props.dispatch(setFinishFetching(true))
    this.setState(() => ({ winnerId: winner.id }))
  }
  render() {
    const fighterOne = this.props.fighters[0];
    const fighterTwo = this.props.fighters[1];
    const winnerId = this.state.winnerId;
    return (
      <div>
        <br/>
        <div className="row">
          {/* Fighter One Card */}
          <div className="col s8 m5">
            <div className="card horizontal red lighten-5">
              <div className="card-image">
                <img className="circle" src={`${fighterOne.thumbnail.path}.${fighterOne.thumbnail.extension}`.replace('http://', 'https://')}/>
              </div>
              <div className="card-stacked">
                <div className="card-action">
                  <a href={`/character/${fighterOne.id}`} target="_blank"> { fighterOne.name }</a>
                </div>
                <div className="card-content">
                  { fighterOne.id === winnerId ? 
                    <h2 className="match-result green-text text-lighten-1">WINNER</h2> :
                    <h2 className="match-result red-text text-darken-2">LOSER</h2>
                  }
                  <p className="match-results-stats">
                    Comics: {fighterOne.comics.available} <br/>
                    Events: {fighterOne.comics.available}  <br/>
                    Series: {fighterOne.comics.available} <br/>
                  </p>
                </div>
              </div>
            </div>
          </div>          
 
          <div className="col s2">
            <div className="vs_container">
              <img className="vs_img" src="./imgs/versus.png" alt=""/>
            </div>
          </div>
          {/* Fighter Two Card */}
          <div className="col s8 m5">
            <div className="card horizontal red lighten-5">
              <div className="card-image">
                <img className="circle" src={`${fighterTwo.thumbnail.path}.${fighterTwo.thumbnail.extension}`.replace('http://', 'https://')}/>
              </div>
              <div className="card-stacked">
                <div className="card-action">
                  <a href={`/character/${fighterTwo.id}`} target="_blank"> { fighterTwo.name }</a>
                </div>
                <div className="card-content">
                  { fighterTwo.id === winnerId ? 
                    <h2 className="match-result green-text text-lighten-1">WINNER</h2> :
                    <h2 className="match-result red-text text-darken-2">LOSER</h2>
                  }
                  <p className="match-results-stats">
                    Comics: {fighterTwo.comics.available} <br/>
                    Events: {fighterTwo.comics.available}  <br/>
                    Series: {fighterTwo.comics.available} <br/>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
        <br/>
      </div>
    )
  }
}

export default connect()(MatchCard)