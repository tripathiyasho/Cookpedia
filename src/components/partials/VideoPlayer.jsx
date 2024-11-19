import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({data}) => {
  return (
    <div className="w-full h-full">

      <ReactPlayer
        url={data}
        controls
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default VideoPlayer;
