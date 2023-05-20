import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';

import mainPhoto from '../../resources/img/mainphoto.png';

const MainDescription = () => {
    const {token} = useSelector(state => state);
    return (
        <>
            <section id="mainarea">
                <div className="container100">
                    <div className="banner">
                        <h2 className="text1">ГигаМузыка - стриминговый сервис нового поколения</h2>
                        <p className="text2">Самый передовой стриминговый сервис с ежедневным охватом более 10 млн пользователей</p>
                        {token ? null :
                        <div className="registration111">
                            <NavLink to="/registration" className="registrationBtn reg">Регистрация</NavLink>
                        </div>
                        }
                    </div>
                </div>
                <div className="banner-img"><img src={mainPhoto} alt="rgtdf"/></div>
            </section>
        </>
    )
}

export default MainDescription;