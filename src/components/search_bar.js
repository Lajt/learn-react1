// import React then create new variable Component: (Component = React.Component)
import React, { Component } from 'react';

// ES6 Class
class SearchBar extends Component {
  // aditional note: if component change its state, component will rerender itself
  // each instance of component has its own state

  // called auto if new instance is created
  constructor(props){
    // call parent method(Component)
    super(props);

    this.state = { term: '' };
  }

  //you always need render method and return some jsx
  render(){
    // controlled component example, every time rerender it takes value from state
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
      );
  }
  
  onInputChange(term){
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }


}
// typical export to use this component in other files
export default SearchBar;
