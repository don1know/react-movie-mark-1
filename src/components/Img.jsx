import { Link } from 'react-router-dom';



function Img(prop){
    var w = window.innerWidth;
    var h = window.innerHeight;

    var g=w*.4
var cs={
    width:g+'px', 
height:h*.55+'px',
backgroundColor:'#000000',
padding:'0px',
marginTop:"14px",
float: 'left',
}

var img={
   width:g+'px', 
//    image height thumbnail
   height:h*.4+'px'
}
var pr="/player"+prop.mv
return(<>
<div id='chi' style={cs} >
<Link to={pr}> 
    <img style={img} src={prop.ima} alt="" /></Link> 

    <p style={{fontSize:'15px'}} >dc</p>
</div>

</>)
}
export default Img ;
