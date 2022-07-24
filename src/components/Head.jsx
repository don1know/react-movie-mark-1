import { useState } from "react";


function A() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    var g=(h*.35)*.3
    // var uu="https://firebasestorage.googleapis.com/v0/b/jsprj-b0693.appspot.com/o/1.webm?alt=media&token=ac4c3f6e-2a07-42c3-a3df-df139c6ac4a0"
    // const [now,upd] = useState(uu)
    // function jj(){
    //     upd("https://firebasestorage.googleapis.com/v0/b/jsprj-b0693.appspot.com/o/Doctor.Strange.in.the.Multiverse.of.Madness.2022.IMAX.1080p.DSNP.WEB-DL.H.264.%5BHindi%20DD%205.1%20-%20Eng%20DD%205.1%5D-MSubs_%5BVegamovies.NL%5D.mkv?alt=media&token=aceced94-996a-442d-bc50-201c988b3c19")


    //     var video = document.getElementById('video');
    //     var source = document.createElement('source');
    //     video.pause();
    //     source.setAttribute('src', 'https://firebasestorage.googleapis.com/v0/b/jsprj-b0693.appspot.com/o/Doctor.Strange.in.the.Multiverse.of.Madness.2022.IMAX.1080p.DSNP.WEB-DL.H.264.%5BHindi%20DD%205.1%20-%20Eng%20DD%205.1%5D-MSubs_%5BVegamovies.NL%5D.mkv?alt=media&token=aceced94-996a-442d-bc50-201c988b3c19');
    //     source.setAttribute('type', 'video/webm');   
    //     video.load();
    //     video.play();     
    // }
    var cs = {
        backgroundColor: '#373737',
        height: h * .35 + "px"

    }
    var input={
backgroundColor:'#0f0f0f',
color:'efebe7',
borderColor:'efebe7',
borderRadius:'10px 20px 20px 10px',
padding:'8px 0',
textIndent:'10px',
border :'1px solid fff',
height:g*.3 +'px',
width:w*.8 +'px',
display: 'block',
marginRight: 'auto',
marginLeft: 'auto',
}
    
    return (
        <><div style={cs} >
            <div style={{paddingTop:g*.5+'px',paddingBottom:g*.5+'px',textAlign:'center'}} >Mark 1.0</div>
            <input style={input} placeholder='What are you looking for?' type="text" />
        </div>



        </>
    )
}
export default A;