import React from 'react';
import cursorRing from '../util/cursorRing';

const App = () => {

  cursorRing();

  return (
    <div>
      <div className='pointer-ring'></div>
      <center>
        <h1 style={{ color: 'white' }}>Test</h1>
      </center>
    </div>
  );
};

export default App;
