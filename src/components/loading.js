import React, { useState} from "react";
import { Link } from "react-router-dom";
import Video from "../assets/final2.mp4"
import "./loading.css"

export default function Loading() {
  const [muted, setMuted] = useState(true);
const handleToggleMute = () => setMuted(current => !current);

                


  return (
    <div class="vod" style={{
alignContent:"center",
display:"flex",
width:"100vw",
height:"90vh",
justifyContent:"center"
    }}>
      <noscript>Jai Shri Ram NFT, Jaishriram NFT,jaishriram,Ram mandir, Ram bhagwan NFT</noscript>
      <video 
          src={Video}
          type="video/mp4"
           autoplay="true"
           width="90%"
          muted={muted}
        >
      </video>
      <button onClick={handleToggleMute} className="control">{muted &&
        <img src="https://img.icons8.com/ios/50/ffffff/mute--v1.png" alt="Jaishriram mute"/>}
        {!muted &&
       <img src="https://img.icons8.com/ios/50/ffffff/high-volume--v1.png" alt="jaishriram unmute"/>}
        </button>
      <button  class="gettohome" ><Link
                to='/HOME'
              >
        GET STARTED
        </Link>
      </button>
    </div>
  );
}