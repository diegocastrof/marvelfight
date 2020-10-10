import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getCharacters } from '../actions/characters.actions'

import CharacterCard from './CharacterCard'
// import ExpenseListFilter from './ExpenseListFilter'
// import ExpenseSummary from './ExpenseSummary'
// import filteredExpenses from '../selectors/expenses'


class CharacterList extends Component {
    componentDidMount() {
        this.props.getCharacters()
    }
    componentWillUnmount() {
        // tengo que hacer dispatch pa vaciar arreglo de characters
    }
    render() {
        console.log('this.prosps', this.props)
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
        getCharacters: bindActionCreators(getCharacters, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList)