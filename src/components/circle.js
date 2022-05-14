
import "./circle.css"
function  Circle(props){
    return(<>
    <div class="circle-container">
    <div class="semitop">
        <img alt="jaishriram assets insights profit" style={{width:"75px",height:"75px"}}class="semiimg" src={props.image}></img>
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