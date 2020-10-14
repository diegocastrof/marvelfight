import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getCharacterById, unmountCharacters } from '../actions/characters.actions';
import { getComicsById, unmountComics } from '../actions/comics.actions';
import { getEventsById, unmountEvents } from '../actions/events.actions';
import { getSeriesById, unmountSeries } from '../actions/series.actions';

import Loading from '../components/Loading';
import ItemsView from '../components/ItemsView';
import ItemModal from '../components/ItemModal';

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
      const { name, description, thumbnail, comics, events, series } = this.props.characterInfo
      let img_url = `${thumbnail.path}.${thumbnail.extension}`
      img_url = img_url.replace('http://', 'https://')
      return (
        <div>
          <div className="container">
              <h1 className="center-align red-text text-lighten-3">{ name }</h1>
              <img src={img_url} className="materialboxed center-align responsive-img" width="500" alt="Character picture"/>
              {
                !description ? 
                  <blockquote>There's no description for { name } </blockquote> :
                  <blockquote>{ description }</blockquote>
              }
              <ItemsView title={'Comics'} items={ this.props.comics } />
              <ItemsView title={'Events'} items={ this.props.events } />
              <ItemsView title={'Series'} items={ this.props.series } />
          </div>
          <ItemModal />
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



