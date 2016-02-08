import React from 'react';
import ReactDOM from 'react-dom';

import apiKey from './api';
import SearchBar from './components/search_bar';

const API_KEY = apiKey;
console.log(API_KEY);

 // Create new component that produce HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};


 // Inject component's generated HTML into DOM
ReactDOM.render(<App />, document.querySelector('.container'));
