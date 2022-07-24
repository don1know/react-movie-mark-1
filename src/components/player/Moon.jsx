import { Link } from 'react-router-dom';


function Player() {
    var h = window.innerWidth;
    var hh=h*.9
    var srcc="https://firebasestorage.googleapis.com/v0/b/jsprj-b0693.appspot.com/o/1.webm?alt=media&token=ac4c3f6e-2a07-42c3-a3df-df139c6ac4a0"
    return (<>

        <video id="video" controls width={hh} autoPlay >
            <source id="source" src={srcc} srcSet=""></source>
        </video>

<Link to='/' >

        <button style={{padding:'20px'}} >Home</button></Link>
    </>)

}

export default Player;
