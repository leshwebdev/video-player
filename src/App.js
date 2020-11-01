import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Videos from "./Videos";
import Player from "./Player";
import Loader from "./Loader";
import "./App.css";

function App() {
  const [state, setState] = useState({
    videos: [
      { id: 1, bandName: "A-Ha!" , songName: "Take On Me" , vidFile: "./vid/1.mp4" },
      { id: 2, bandName: "El Chombo" , songName: "Dame Tu Cosita feat. Cutty Ranks" , vidFile: "./vid/2.mp4" },
      { id: 3, bandName: "Lofi Boy" , songName: "The Struggle In The 90s" , vidFile: "./vid/3.mp4"}
    ],
    song: {},
    videoIsPlaying: false,
    loaderIsShown: false,
  });

  const selectVideo = (vid) => {
    setState((state) => ({ ...state, loaderIsShown: true }));
    setTimeout(()=> {
      setState((state) => ({ ...state, loaderIsShown: false, song: vid, videoIsPlaying: true }));
   }, 2000)
  };

  const loaderShow = () => setState((state) => ({ ...state, loaderIsShown : true }));

  return (
      <div className="App w-auto shadow p-3 mb-5 bg-white rounded">
        <Row>
          <Col md={6}><Videos videos={state.videos} song={state.song} onSelectVideo={selectVideo} isVideoPlaying={state.videoIsPlaying} /></Col>
          <Col md={6}><Player song={state.song} /></Col>
        </Row>
        <Loader isLoaderShown={state.loaderIsShown} onShowLoader={loaderShow} />
    </div>
  );
}

export default App;