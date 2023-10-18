import  { useEffect, useRef } from "react";
//import "./styles.css";

const Info = () => {

    const videoEl = useRef(null);

    const attemptPlay = () => {
      videoEl &&
        videoEl.current &&
        videoEl.current.play().catch(error => {
          console.error("Error attempting to play", error);
        });
    };
    useEffect(() => {
        attemptPlay();
      }, []);
    return (
        
        <div className="App">
      <div>
        <div className="text-center mb-[100px] ">
        <div className="divider">  <h2 className="text-black text-[60px] font-bold ">Wish</h2> </div>
        <div className="my-[20px]"><i className="text-[20px] text-[#808080] ">The Fashion House..</i></div>
        <div className="mb-[200px]">
        <p className="text-[18px] text-black">Inspired by a seamless blend of timeless elegance and modern style, our fashion company is dedicated to<br/> 
           offering eco-conscious, inclusive, and empowering clothing choices for all.</p>
        </div>
        </div>
        <video
          style={{ maxWidth: "100%", width: "1400px", margin: "0 auto" }}
          playsInline
          loop
          muted
          controls
          alt="All the devices"
          
          src="/video.mp4"
        
          ref={videoEl}
        />
      </div>
    </div>
    );
};

export default Info;