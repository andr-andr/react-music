import mp3 from '../../resources/img/12BYN.png';
import hifi from '../../resources/img/24BYN.png';
import family from '../../resources/img/32BYN.png';


const Subscriptions = () => {
    return(
        <>
            <section id="destination-section">
                    <div className="container007" id="sub">
                        <h2 className="title-section35 destination-section__title">Наши подписки</h2>
                        <h3 className="title-section30 destination-section__title">Выберите подписку, которая больше всего вам подходит</h3>
                        <div className="destination-wrapii">
                            <div className="destinationn">
                                <div className="destination-info">
                                    <h3 className="destination__title">MP3</h3>
                                    <img className="destination__img" src={mp3} alt=""/><br/><br/>
                                    <p className="destination__textt">Удобный веб-плеер для прослушивания музыки</p>
                                    <p className="destination__textt">Возможность добавлять треки в избранное</p>

                                    <div className="registration007">
                                        <p href="" className="registrationBtnn">Регистрация</p>
                                    </div>
                                </div>
                            </div>
                            <div className="destinationn">
                                <div className="destination-info">
                                    <h3 className="destination__title">HIFI</h3>
                                    <img className="destination__img" src={hifi} alt=""/><br/><br/>
                                    <p className="destination__textt">Воспроизведение треков в качестве FLAC</p>
                                    <p className="destination__textt">Возможность добавлять треки в избранное</p>
                                    <div className="registration007">
                                        <p href="" className="registrationBtnn">Регистрация</p>
                                    </div>
                                </div>
                            </div>
                            <div className="destinationn">
                                <div className="destination-info">
                                    <h3 className="destination__title">FAMILY</h3> 
                                    <img className="destination__img" src={family} alt=""/><br/><br/>
                                    <p className="destination__textt">Воспроизведение треков в качестве FLAC</p>
                                    <p className="destination__textt">Возможность добавлять треки в избранное</p>
                                    <p className="destination__textt">Возможность подключить к аккаунту до 3 членов семьи</p>
                                    <div className="registration007">
                                        <p href="" className="registrationBtnn">Регистрация</p>
                                    </div>
                                </div>
                            </div>                    
                        </div>
                    </div>
            </section>
        </>
    )
}

export default Subscriptions;