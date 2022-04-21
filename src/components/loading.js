import React, { useEffect,useState} from "react";
import { Link } from "react-router-dom";
import Video from "../assets/loading2.mp4"
import "./loading.css"

export default function Loading() {
  const [muted, setMuted] = useState(true);
const handleToggleMute = () => setMuted(current => !current);

const [muteicon, setMutedicon] = useState(false);
const handleToggleMuteicon = () => setMuted(current => !current);
                


  return (
    <div class="vod" style={{
alignContent:"center",
display:"flex",
width:"100vw",
height:"90vh",
justifyContent:"center"
    }}>
      <video 
          src={Video}
          type="video/mp4"
           autoplay="true"
           width="90%"
          muted={muted}
        >
      </video>
      <button onClick={handleToggleMute} className="control">{muted &&
        <img src="https://img.icons8.com/ios/50/ffffff/mute--v1.png"/>}
        {!muted &&
       <img src="https://img.icons8.com/ios/50/ffffff/high-volume--v1.png"/>}
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