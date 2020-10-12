import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <div className="container">
      <h1 className="center-align red-text text-lighten-3">404 Not found...</h1>
      <Link to="/">Back home</Link>
    </div>
  </div>
)

export default NotFoundPage