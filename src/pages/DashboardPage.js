import React from 'react';
import CharacterList from '../components/CharacterList'
import SearchFilter from '../components/SearchFilter'
import Landing from '../components/Landing'
import { connect } from 'react-redux'

const DashboardPage = (props) => {
  return (
    <div>
      <SearchFilter />
      { !props.thereIsCharacters && <Landing />}
      { props.thereIsCharacters && <CharacterList />}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    thereIsCharacters: state.characters.length > 0
  }
}

export default connect(mapStateToProps)(DashboardPage)