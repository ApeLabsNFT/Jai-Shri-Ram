import React, { useEffect} from "react";
import { Link } from "react-router-dom";
import Video from "../assets/loading2.mp4"
import "./loading.css"
export default function Loading() {
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
        style={{
          marginTop:"-10%"
        }}
        >
      </video>
      <button  class="gettohome" ><Link
                to='/HOME'
              >
        GET STARTED
        </Link>
      </button>
    </div>
  );
}