import Facebook from '../resources/img/Facebook.jpg';
import Instagram from '../resources/img/Instagram.jpg';
import Twitter from '../resources/img/Twitter.jpg';
import Youtube from '../resources/img/Youtube.jpg';

const Footer = () => {
    return(
        <>
            <footer style={{'cursor' : 'none'}} className="footer-section">
                    <div className="footer-cta pt-5 ">
                        <div className="row">
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    
                                <div className="cta-text">
                                        <h4>ГигаМузыка</h4>
                                        <span>Стриминговый сервис нового поколения</span>
                                    </div>
                                </div>  
                            </div>


                        <div className="col-xl-4 col-lg-4 mb-50" id="S">
                            <div className="footer-widget">
                                <div className="footer-social-icon">
                                    <span>Follow us</span>
                                    <ul className="social_icon">
                                        <li><a href="#"><img src={Facebook} alt="" className="circleSocial"/></a></li>
                                        <li><a href="#"><img src={Instagram} alt="" className="circleSocial"/></a></li>
                                        <li><a href="#"><img src={Twitter} alt="" className="circleSocial"/></a></li>
                                        <li><a href="#"><img src={Youtube} alt="" className="circleSocial"/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-content pt-5 pb-1">

                    <div className="container">
                        <div className="row">

                            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                                <div className="copyright-text">
                                    <p><a href="#">ГигаМузыка </a>2023 Все права защищены</p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                <div className="footer-menu">
                                    <ul>
                                        <li><a href="#">Главная</a></li>
                                        <li><a href="#">Поиск</a></li>
                                        <li><a href="#">Профиль</a></li>
                                    </ul>   
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;