import vidbg from "vidbg.js";

export function setVideoBg() {
    const instance = new vidbg(
        ".vidbg-box",
        {
          mp4: "files/Epic-Car-Washing.mp4", // URL or relative path to MP4 video
          webm: "iles/Epic-Car-Washing.mp4",
          poster: "img/car.jpg", // URL or relative path to fallback image
          overlay: false, // Boolean to display the overlay or not
          overlayColor: "#000", // The overlay color as a HEX
          overlayAlpha: 0.3, // The overlay alpha. Think of this as the last integer in RGBA()
        },
        {
            autoplay: true,
            controls: false,
            loop: true,
            muted: true,
            playsInline: true,
        }
    );
    
    let autoplay = instance.isVideoPlaying();
      
    const videoFunc = () => {
        if (autoplay) {
            autoplay = false;
            handleMainBtnVideo();
            instance.pauseVideo();
        }
        else {
            autoplay = true;
            handleMainBtnVideo();
            instance.playVideo();
        }
    }
    
    const handleMainBtnVideo = () => {
        if (!autoplay) {
            mainBtnVideo.classList.remove('btn-video--stop');
            mainBtnVideo.classList.add('btn-video--play');
        }
        else {
            mainBtnVideo.classList.add('btn-video--stop');
            mainBtnVideo.classList.remove('btn-video--play');
        }
    }
    
    let mainBtnVideo = document.querySelector('.main__btn-video');
    handleMainBtnVideo();
    
    mainBtnVideo.addEventListener('click', videoFunc);
}
