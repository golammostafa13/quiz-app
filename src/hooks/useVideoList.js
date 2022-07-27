import {get, getDatabase, orderByKey, query, ref} from "firebase/database";
import { useState, useEffect } from "react";

export default function useVideoList(){
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(true);
    const [videos, setVideos] = useState([]);

    useEffect(() =>{
        async function fetchVideos(){
            const db = await getDatabase();
            const videosRef = ref(db, "videos");
            const videoQuery = query(videosRef, orderByKey());
            try {
                setError(false);
                setLoading(true);
                const snapshot = await get(videoQuery);
                setLoading(false);
                if(snapshot.exists()){
                    setVideos((prev)=>[...prev, Object.values(snapshot.val())]);
                }            
            } catch (error) {
                console.log(error);
                setLoading(false);
                setError(true);
            }
        }
        fetchVideos();
    }, [])
    return {videos, error, loading}
}