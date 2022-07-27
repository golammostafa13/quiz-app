import Video from "./Video";
import classes from "../styles/Videos.module.css";
import { Link } from "react-router-dom";
import useVideoList from "../hooks/useVideoList";


export default function Videos(){
    const {videos, error, loading} = useVideoList();
     
    return(
        <div className={classes.videos}>
            { videos.length > 0 && 
                videos.map(video => (
                    <Link to="/quiz" key={video.youtubeID}>
                        <Video title={video.title} key={video.youtubeID} noq={video.noq} />
                    </Link>
                ))
            }
            {
                !loading && videos.length===0 && <div> Data not found! Check your connection</div>
            }
            {
                error && <div>Something is wrong there!</div>
            }
            {
                loading && <div>Data Loading...</div>
            }
        </div>
    )
}