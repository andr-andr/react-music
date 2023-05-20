const Tracks = ({track}) => {

    return(
        <>
            <div className="cards container">
                <div className="post">
                    <div className="MusicCard">
                        <div className="imgMusic">
                            <img src={track.album.images[0].url} alt=""/>
    
                        </div>
                    </div>
                    <div className="MusicNameAuthor">
                    <h4 className="musicName">{track.name}</h4>
                    <h4 className="musicName">{track.artists[0].name}</h4>
                    </div>
                    <div className="audio_container">{track.preview_url ? <audio className="audio" src={track.preview_url} controls/> : null}</div>

                    <div></div>
                </div>
                <div className="timeHeartRight">
                    <div className="time">
                        <p className="timeText">Дата релиза  </p>
                        <i className="fa-solid fa-heart"></i>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Tracks;