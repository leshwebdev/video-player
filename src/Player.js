import React from "react";
import { Badge } from "react-bootstrap";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";

function Player(props) {
  if (props.song.id) {
    return (
      <div className="container flex column">
            <Badge pill variant="primary">
              {props.song.bandName} - {props.song.songName}
            </Badge>
            <div style={{ width: "auto" }}>
              <ResponsiveEmbed aspectRatio="16by9">
                <embed type="image/svg+xml" src={props.song.vidFile} />
              </ResponsiveEmbed>
            </div>
      </div>
    );
  } else {
    return "";
  }
}

export default Player;
