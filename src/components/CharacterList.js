import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getCharacters, unmountCharacters } from '../actions/characters.actions';

import CharacterCard from './CharacterCard';
import Loading from './Loading';

class CharacterList extends Component {
    componentDidMount() {
      // this.props.unmountCharacters()
      // this.props.getCharacters(this.props.filters)
    }
    componentWillUnmount() {
      this.props.unmountCharacters()
    }
    render() {
        if (this.props.characters) {
          return (
            <div className="container">
              <div className="characterList-layout">
                <h1 className="center-align red-text text-lighten-3 characterList-title">Discover our fighters</h1>
                <div className="row">
                  {
                    this.props.characters.map((character, index) => (
                      <div key={character.id} className="col s6 m6 l4">
                        <CharacterCard key={character.id} {...character}/>
                      </div>
                    ))
                  }
                </div>
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