import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getCharacters, unmountCharacters } from '../actions/characters.actions';

import CharacterCard from './CharacterCard';
import Loading from './Loading';

class CharacterList extends Component {
    componentDidMount() {
      this.props.getCharacters(this.props.filters)
    }
    componentWillUnmount() {
      this.props.unmountCharacters()
    }
    render() {
        if (this.props.characters) {
          return (
            <div className="container">
              <h1 className="center-align red-text text-lighten-3">Discover our fighters</h1>
              <div className="row">
                {
                  this.props.characters.map((character, index) => (
                    <div key={character.id} className="col s4">
                      <CharacterCard key={character.id} {...character}/>
                    </div>
                  ))
                }
              </div>
            </div>
          )
        } else return (
          <Loading />
        )    
    }
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
    filters: state.filters
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCharacters: bindActionCreators(getCharacters, dispatch),
        unmountCharacters: bindActionCreators(unmountCharacters, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList)