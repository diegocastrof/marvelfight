import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getCharacters, unmountCharacters } from '../actions/characters.actions';

import CharacterCard from './CharacterCard'

class CharacterList extends Component {
    componentDidMount() {
        this.props.getCharacters()
    }
    componentWillUnmount() {
        this.props.unmountCharacters()
    }
    render() {
        return (
            <div className="container">
                <h1 className="text-center">Discover our fighters</h1>
                <div className="row">
                    {
                        this.props.characters.map((character, index) => (
                            <div key={character.id} className="col s3">
                                <CharacterCard key={character.id} {...character}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCharacters: bindActionCreators(getCharacters, dispatch),
        unmountCharacters: bindActionCreators(unmountCharacters, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList)