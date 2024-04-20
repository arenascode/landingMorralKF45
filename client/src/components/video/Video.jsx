// import { useRef, useState } from "react";
import "./video.scss";

const Video = () => {
  // const videoRef = useRef(null);
  // const progressRef = useRef(null);
  // const [play, setPlay] = useState(false);

  // const handlePlay = (e) => {
  //   e.preventDefault();
  //   const playerOverlay = document.querySelector('.hoverBtn')
  //   // const video = document.querySelector('.playerVideo')
  //   if (videoRef.current) {
  //     if (!play) {
  //       videoRef.current.play();
  //       playerOverlay.style.opacity = 0
  //     } else {
  //       videoRef.current.pause();
  //       playerOverlay.style.opacity = 1;

  //     }
  //     setPlay(!play);
  //   }
  // };

  // console.log(playerOverlay);

  // const handleProgress = () => {
  //   const percent =
  //     (videoRef.current.currentTime / videoRef.current.duration) * 100;
  //   console.log(percent);
  //   progressRef.current.style.flexBasis = `${percent}%`;
  //   console.log(videoRef.current.ended);
  //   if (videoRef.current.ended) {
  //     setPlay(false);
  //   }
  // };

  return (
    <div id="videoContainer" className="player">
      <img src="assets/video/promoVideoMorralKf45.webp" alt="" />
      {/* <video
        ref={videoRef}
        onClick={handlePlay}
        onTimeUpdate={handleProgress}
        muted
        className="playerVideo"
        src="assets/video/promoVideoMorralKf45.mp4"
      ></video>
      <button className="hoverBtn">►</button>
      <div className="playerControls">
        <div className="progress">
          <div ref={progressRef} className="progressFilled"></div>
        </div>
        <button
          className="playerButton"
          title="Toggle Play"
          onClick={handlePlay}
        >
          {play ? "❚ ❚" : "►"}
        </button>
      </div>
      <div className="btnContainer"></div> */}
    </div>
  );
};
export default Video;
