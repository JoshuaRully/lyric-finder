import React, { Component } from 'react';

const Context = React.createContext();

class Provider extends Component {
  state = {
    track_list: [
      { track: { track_name: 'name' } },
      { track: { track_name: 'test' } }
    ],
    heading: 'Top 10 Tracks'
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;
