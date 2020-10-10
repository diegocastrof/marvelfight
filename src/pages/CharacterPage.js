import React from 'react';

const CharacterPage = (props) => (
  <div>
    <h1>This is Character id: {props.match.params.id} Page</h1>
  </div>
)

export default CharacterPage