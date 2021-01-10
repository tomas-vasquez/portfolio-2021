/**
 * dependencies
 */
import React, { Component } from "react";
import { appContext } from "./app-context";
import Audio from "components/audio";
import { about } from "config";

/**
 * Mocked Assets
 */

class App extends Component {
  constructor(props) {
    super(props);

    /**
     * state
     */
    this.state = {};
  }

  render() {
    const main = () => (
      <div className="app">
        <Audio
          key="audio-component"
          tracks={about.music.tracks}
          thread="worker"
        />
      </div>
    );

    return (
      <appContext.Consumer>{(context) => main(context)}</appContext.Consumer>
    );
  }
}

export default App;
