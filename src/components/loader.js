import React, { useState } from "react";
import "./loader.css"
import Vanvas from "../assets/Asset 33.svg"
import Loaded from "../assets/Asset 24.svg"
import Raja from "../assets/Asset 37.svg"
import { Link } from "react-router-dom";
function Loader(){
    const[showload,setload]=useState(true)
    const[showloaded,setloaded]=useState(false)
    setTimeout(()=>{
setload(false)
setloaded(true)
    },4800)
    return(<>{showloaded &&
    <div className="loaded ">
        <img className="avatar2 slide-in-blurred-top" src={Loaded}></img>
        <span className="Started slide-in-blurred-top" onClick={()=>{setloaded(false)}}><Link to="/home" style={{textDecoration:"none",color:"white"}}>GET STARTED
        </Link></span>
    </div>

    }
    {showload && 
    <div className="final fade">
        <div className="Loader scale-out-center">
            <table>
                <tr>
<td>
            
            <img className="avatar" src={Vanvas}></img>
            </td>
            <td class="line">
            <div class="line">
  <div class="circle circle-1"></div>
  <div class="circle circle-2"></div>
  <div class="circle circle-3"></div>
  <div class="circle circle-4"></div>
  <div class="circle circle-5"></div>
  </div>
  
  </td>     <td>     <img className="avatar" src={Raja}></img> </td></tr>  </table>
  </div>
  <div className="Loading scale-out-center">
  
            <div class="progress ">
                <span className="neonText">Loading</span>
  <div class="progress-value"></div>
  </div>
  </div>
  </div>}
</>
    )
}
export default Loader;