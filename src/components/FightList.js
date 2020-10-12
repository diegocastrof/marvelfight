import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setFightNumberFilter, setIsFetching, setFinishFetching } from '../actions/fight.actions';
import { unmountCharacters } from '../actions/characters.actions';

import Loading from './Loading';
import MatchCard from './MatchCard'

class FightList extends Component {
    componentDidMount() {
      this.props.setIsFetching(false)
      this.props.setFightNumberFilter(0)
      this.props.unmountCharacters()
    }
    handleReset = () => {
      this.props.setIsFetching(false)
      this.props.setFinishFetching(false)
      this.props.setFightNumberFilter(0)
      this.props.unmountCharacters()
    }
    render() {
      const { characters, fight } = this.props
      if (characters.length === fight.fightNum*2 && fight.fightNum) {        
        const fightSuite = characters.reduce((result, value, index, array) => {
          if (index % 2 === 0)
            result.push(array.slice(index, index + 2));
          return result;
        }, []);
        return (
          <div className="container">
            <h2 className="center-align red-text text-lighten-3">Combats of Evening</h2>
            {
              fightSuite.map((fight, index) => (
                <MatchCard key={ index } fighters={ fight } /> 
              ))
            }
            <button 
              className="waves-effect waves-light btn-small red lighten-2"
              onClick={ this.handleReset }
            >
              Battle Again!
            </button>
            <br/>
            <br/>
          </div>
        )} else if (fight.isFetching) {
          return (
            <Loading />
        )} else {
          return (
              <p className="center-align">Choose the number of fights for the evening</p>
          )
        }   
    }
} 

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
    filters: state.filters,
    fight: state.fight
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      setIsFetching: bindActionCreators(setIsFetching, dispatch),
      setFinishFetching: bindActionCreators(setFinishFetching, dispatch),
      setFightNumberFilter: bindActionCreators(setFightNumberFilter, dispatch),
      unmountCharacters: bindActionCreators(unmountCharacters, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FightList)