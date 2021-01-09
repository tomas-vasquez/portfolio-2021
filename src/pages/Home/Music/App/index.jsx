/**
 * dependencies
 */
import React, { Component } from "react";
import { appContext } from "./app-context";
import Audio from "components/audio";

/**
 * Mocked Assets
 */
import rise from "assets/music/rise.mp3";
import fantastic from "assets/music/fantastic.mp3";
import legendsNeverDie from "assets/music/legends-never-die.mp3";
import shortLegendsNeverDie from "assets/music/short-legends-never-die.mp3";
import corona from "assets/music/pal-proximo-presidente.mp3";

class App extends Component {
  constructor(props) {
    super(props);

    /**
     * state
     */
    this.state = {
      tracks: [
        {
          name: "Pal proximo presidente",
          artist: "Corona",
          url: corona,
        },
        {
          name: "Small Piece of music LND",
          artist: "League of Legends",
          url: shortLegendsNeverDie,
        },
        {
          name: "Legends Never Die",
          artist: "League of Legends",
          url: legendsNeverDie,
        },
        {
          name: "Rise",
          artist: "League of Legends",
          url: rise,
        },
        {
          name: "Fantastic - Cinematic Sound",
          artist: "AudioJungle",
          url: fantastic,
        },
      ],
    };
  }

  /**
   * React Render
   */
  render() {
    /**
     * classNames
     */
    const _root = "app";

    /**
     * render functions
     */
    const main = () => (
      <div className={_root}>
        <Audio
          key="audio-component"
          tracks={this.state.tracks}
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
