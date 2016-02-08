import React from 'react';
import ReactDOM from 'react-dom';

 // Create new component that produce HTML
const App = () => {
  return <div>Hi!</div>;
};


 // Inject component's generated HTML into DOM
ReactDOM.render(<App />, document.querySelector('.container'));
