import shop from '../../resources/img/shopMain.png';
import search from '../../resources/img/shareMain.png';
import computer from '../../resources/img/computerMain.png';
import telephone from '../../resources/img/telephoneMain.png';

const Possibilities = () => {
    return(
        <>
            <section id="destination-section">
                <div className="container007" id={"possibilities"}>
                    <h2 className="title-section35 destination-section__title">Возможности ГигаМузыки</h2>
                    <h3 className="title-section30 destination-section__title">Ниже перечислены некоторые возможности нашего сервиса</h3>
                    <div className="destination-wrap">
                        <div className="destination">
                            <img className="destination__img bla" src={computer} alt=""/>
                            <div className="destination-info">
                                <p className="destination__text">Удобный веб-плеер для прослушивания музыки</p>
                            </div>
                        </div>
                        <div className="destination">
                            <img className="destination__img bla" src={shop} alt="Destination to Madrid"/>
                            <div className="destination-info">
                                
                                <p className="destination__text">Прослушивание
                                    треков в качестве FLAC 
                                    при приобретении
                                    соответствующей подписки</p>
                                
                            </div>
                        </div>
                        <div className="destination">
                            <img className="destination__img bla" src={search} alt="Destination to Paris"/>
                            <div className="destination-info">
                                
                                <p className="destination__text">Поиск и фильтрация треков
                                    в каталоге по темпу, настроению, дате релиза</p>
                            
                            </div>
                        </div>
                        <div className="destination">
                            <img className="destination__img" src={telephone} alt="Destination to Dubai"/>
                            <div className="destination-info">
                                
                                <p className="destination__text">Добавление треков 
                                    в избранное</p>
                            
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Possibilities;