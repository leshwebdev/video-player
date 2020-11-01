import React from "react";
import Video from "./Video";
import { ListGroup } from "react-bootstrap";

function Videos(props) {
  return (
    <div className="container videos">
      <ListGroup as="ul">
        <ListGroup.Item as="li" active>Choose A Song</ListGroup.Item>
        {props.videos.map((video, index) => (
          <ListGroup.Item key={index} as="li" variant={props.song.id === video.id ? "dark" : ""}>
            <Video video={video} song={props.song} isVideoPlaying={props.isVideoPlaying} onSelectVideo={props.onSelectVideo} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default Videos;