import YouTube, { YouTubeProps, YouTubePlayer} from "react-youtube"
import { useEffect } from "react"
import { propsForYoutube } from "../Hooks/typeOfInterfaces";

const ShowVideo = ({setLoading, loading, videoId}: propsForYoutube) => {
    
    const onPlayerReady: YouTubeProps['onReady'] = (e) => {
        console.log(e);
        e.target.pauseVideo();
    }
    

    const ops: YouTubeProps['opts'] = {
        height: '450px',
        width: '100%',
        playerVars: {
            autoplay: 0
        }
    }

   return (
        videoId ? (
            <YouTube onReady={onPlayerReady} opts={ops} loading='lazy' videoId={videoId} />
        ) : (
            <p>Video doesn't exist</p>
        )
   )
}

export default ShowVideo