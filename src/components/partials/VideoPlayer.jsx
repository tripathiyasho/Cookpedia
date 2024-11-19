import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  return (
    <div className="w-full h-full">
      <ReactPlayer
        url="https://vid.tasty.co/output/71862/hls24_1515525175.m3u8"
        controls
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default VideoPlayer;
