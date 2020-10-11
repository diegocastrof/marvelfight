import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getCharacterById, unmountCharacters } from '../actions/characters.actions';
import { getComicsById, unmountComics } from '../actions/comics.actions';
import { getEventsById, unmountEvents } from '../actions/events.actions';
import { getSeriesById, unmountSeries } from '../actions/series.actions';

import Loading from '../components/Loading';
import ItemsView from '../components/ItemsView';

class CharacterPage extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getCharacterById(id);
    this.props.getComicsById(id);
    this.props.getEventsById(id);
    this.props.getSeriesById(id);
  }
  componentWillUnmount() {
    this.props.unmountCharacters();
    this.props.unmountComics();
    this.props.unmountEvents();
    this.props.unmountSeries();
  }
  render() {
    if (this.props.characterInfo) {
      const { name, thumbnail, comics, events, series } = this.props.characterInfo
      const img_url = `${thumbnail.path}.${thumbnail.extension}`
      return (
        <div className="container">
            <h1>{ name }</h1>
            <img src={img_url} alt="Character picture"/>
            
            <ItemsView title={'Comics'} items={ this.props.comics } />
            <ItemsView title={'Events'} items={ this.props.events } />
            <ItemsView title={'Series'} items={ this.props.series } />
        </div>
        )
    } else return (
      <Loading />
    )    
  }
}

const mapStateToProps = (state) => {
  return {
    characterInfo: state.characters[0],
    comics: state.comics,
    events: state.events,
    series: state.series
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      getCharacterById: bindActionCreators(getCharacterById, dispatch),
      unmountCharacters: bindActionCreators(unmountCharacters, dispatch),
      getComicsById: bindActionCreators(getComicsById, dispatch),
      unmountComics: bindActionCreators(unmountComics, dispatch),
      getEventsById: bindActionCreators(getEventsById, dispatch),
      unmountEvents: bindActionCreators(unmountEvents, dispatch),
      getSeriesById: bindActionCreators(getSeriesById, dispatch),
      unmountSeries: bindActionCreators(unmountSeries, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterPage)



