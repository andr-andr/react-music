import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

import {  plailistFetched, setIsPlaying, setTrackIndex, tracksFetched} from "../actions/actions";

import Tracks from "./Tracks";

const Playlists = ({playlist, id}) => {
    const { playlists, token, tracks, trackIndex, isPlaying} = useSelector(state => state);
    const dispatch = useDispatch();

    const onChoosePlaylist = () => {
        const newPlaylist = playlists.filter(item => item.id === playlist.id)
        dispatch(plailistFetched(newPlaylist));
    }

    useEffect(() => {
        if (playlists.length === 1) {
            axios(`https://api.spotify.com/v1/playlists/${playlist.id}/tracks`, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
                method: 'GET'
              }).then(tracks => {
                  console.log(tracks.data.items);
                  dispatch(tracksFetched(tracks.data.items));
              })
        }
    }, [playlists]);
    


    const allTracksFilter = tracks.filter(item => item.track.preview_url !== null);

    const allTracks = allTracksFilter.map((item, i) => {
        return <Tracks track={item.track} key={i}/>
    })

    return(
        <>
    {playlists.length > 1 ? 
            <div onClick={onChoosePlaylist} key={id} className="cards container">
            <div className="post">
                <div className="MusicCard">
                    <div className="imgMusic">
                        <img  src={((playlist.images.length === 0) ? null : playlist.images[0].url)} alt=""/>
                    </div>
                </div>
                <div className="MusicNameAuthor">
                    <h4 className="musicName">{playlist.name}</h4>
                    <p className="musicAuthor">{playlist.description}</p>
                </div>
            </div>
    
            <div className="timeHeartRight">
                <div className="time">
                    <p className="timeText">количество треков {playlist.tracks.total}</p>
                </div>
            </div>
        </div> :
        null}
    {playlists.length === 1 ? allTracks : null} </>
    )
}

export default Playlists;