import React from 'react';
import cursorRing from '../util/cursorRing';

const App = () => {

  cursorRing();

  return (
    <div>
      <div className='pointer-ring'></div>
    </div>
  );
};

export default App;
