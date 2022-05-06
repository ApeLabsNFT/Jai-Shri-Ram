import React, { useState } from "react";
import "./circle.css"
function  Circle(props){
    function checklength(){
    if(((props.bottomtext).length)>5)
    {  return false
    }
    else{
        return true
    }}
    return(<>
    <div class="circle-container">
    <div class="semitop">
        <img style={{width:"75px",height:"75px"}}class="semiimg" src={props.image}></img>
        <span class="topsemi">{props.text}</span>
    </div>
    <div class="emptydown">
        <span style={{ fontSize:(props.font)}}class="downempty">{props.bottomtext}</span>
    </div>
    </div>
    </>
    )
}
export default Circle