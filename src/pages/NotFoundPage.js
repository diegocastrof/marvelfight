import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <h1>404 Not found...</h1>
    <Link to="/">Back home</Link>
  </div>
)

export default NotFoundPage