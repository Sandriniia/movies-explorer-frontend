import React from 'react';
import { Spinner } from 'react-spinners-css';

import './Loading.css';

function Loading() {
  return (
    <div className='loading'>
      <h1 className='loading__title'>Loading...</h1>
      <Spinner />
    </div>
  );
}

export default Loading;
