import React from 'react';
import { connect } from 'react-redux';
import FightFilter from '../components/FightFilter';
import FightList from '../components/FightList';
import FightResultFilter from '../components/FightResultsFilter'

const FightPage = (props) => (
  <div>
    { !props.fight.isFetching && <FightFilter /> }
    { props.fight.finishFetching &&  <FightResultFilter /> }
    <FightList />
  </div>
)

const mapStateToProps = (state) => {
  return {
    fight: state.fight
  }
}

export default connect(mapStateToProps)(FightPage)