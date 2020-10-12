import React from 'react';
import { connect } from 'react-redux';
import FightFilter from '../components/FightFilter';
import FightList from '../components/FightList';

const FightPage = (props) => (
  <div>
    <h2 className="center-align red-text text-lighten-3">How many fights are we having this evening?</h2>
    { !props.fight.isFetching && <FightFilter />}
    <FightList />
  </div>
)

const mapStateToProps = (state) => {
  return {
    fight: state.fight
  }
}

export default connect(mapStateToProps)(FightPage)