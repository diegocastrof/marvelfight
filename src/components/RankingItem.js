import React from 'react';

const RankingItem = (props) => {
  const { name, thumbnail, comics, events, series, ranking} = props
  return (
    <div>
      <li className="collection-item avatar">
        <img src={`${thumbnail.path}.${thumbnail.extension}`.replace('http://', 'https://')} alt="Ranking photo" className="circle" />
        <span className="title">{name}</span>
        <p>Comics: {comics.available} <br/>
          Events: {events.available}  <br/>
          Series: {events.available}
        </p>
        <p className="secondary-content">
          <p className="ranking-result">{ ranking }</p>
        </p>
      </li>
    </div>
  )
}

export default RankingItem