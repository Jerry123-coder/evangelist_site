// import React from 'react';
// import YouTube from 'react-youtube';

// const VideoPlayer = () => {
//   // Replace 'YOUR_VIDEO_ID' with the actual YouTube video ID
//   const videoId = 'svwfZa3Odwk';

//   // You can customize the player options as needed
//   const opts = {
//     height: '390',
//     width: '640',
//     playerVars: {
//       // Enable autoplay if desired
//       autoplay: 0, // 0 means autoplay is disabled, 1 means autoplay is enabled
//     },
//   };

//   return (
//     <div>
//       <YouTube videoId={videoId} opts={opts} />
//     </div>
//   );
// };

// export default VideoPlayer;


import React from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = () => {
  // Replace 'YOUR_VIDEO_ID' with the actual YouTube video ID
  const videoId = 'svwfZa3Odwk';

  // You can customize the player options as needed
  const optsWeb = {
    height: '390',
    width: '640',
    playerVars: {
      // Enable autoplay if desired
      autoplay: 0, // 0 means autoplay is disabled, 1 means autoplay is enabled
    },
  };

  const optsMobile = {
    height: '400',
    width: '100%',
    playerVars: {
      // Enable autoplay if desired
      autoplay: 0, // 0 means autoplay is disabled, 1 means autoplay is enabled
    },
  };

  return (
    <div className="lg:w-full m-auto shadow-md">
      <YouTube videoId={videoId} opts={optsMobile} />
    </div>
  );
};

export default VideoPlayer;
