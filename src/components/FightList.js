import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setFightNumberFilter, setIsFetching } from '../actions/fight.actions';
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
            {
              fightSuite.map((fight, index) => (
                <MatchCard key={ index } fighters={ fight } /> 
              ))
            }
            <button onClick={ this.handleReset }>Try again</button>
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
      setFightNumberFilter: bindActionCreators(setFightNumberFilter, dispatch),
      unmountCharacters: bindActionCreators(unmountCharacters, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FightList)