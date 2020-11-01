import React from "react";

function Video(props) {
  return (
      <div className="pointer">
        {(props.isVideoPlaying && props.song.id === props.video.id) ? <i className="fas fa-play"></i> : <i className="fas fa-pause"></i>}
          <span onClick={() =>props.onSelectVideo(props.video)}> {props.video.bandName} - {props.video.songName}</span>
      </div>
      );
    }
      
  export default Video;