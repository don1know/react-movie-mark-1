import { Link } from 'react-router-dom';


function Player() {
    var h = window.innerWidth;
    var hh=h*.98
    var srcc="https://firebasestorage.googleapis.com/v0/b/jsprj-b0693.appspot.com/o/Guardian-v2-34-720-hindi.m4v?alt=media&token=17b2c1c8-a708-4b6f-a2e7-a352a6bc774b"
    return (<>

        <video id="video" controls width={hh} autoPlay >
            <source id="source" src={srcc} srcSet=""></source>
        </video>

<Link to='/' >

        <button style={{padding:'20px'}} >Home</button></Link>
    </>)

}

export default Player;
