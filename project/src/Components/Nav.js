import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";

const Nav = () => {
    const {user, token} = useSelector(state => state);

    return(
        <>
            <div className="container">

                <header className="header">
                <div className="header-container">
                    <div className="header-logo">
                        <NavLink to="/" className="logo">ГигаМузыка</NavLink>
                    </div>
                    <div className="header-navbar">
                        <nav id="nav" className="nav">
                            <ul className="nav-list">
                                <li className="nav-item "><NavLink exact to="/">Главная</NavLink></li>
                                {token ?
                                    <>
                                    <li className="nav-item"><NavLink exact to="/catalog">Каталог</NavLink></li>
                                    <li className="nav-item "><NavLink exact to="/profile">Профиль</NavLink></li>
                                    </> :
                                    null
                                }
                                <li className="nav-item "><a href="#possibilities">Возможности</a></li>
                                <li className="nav-item "><a href="#sub">Подписка</a></li>
                            </ul>
                        </nav>
                    </div>
                    
                        {user ? 
                             <NavLink to="/profile">
                                <img   className="img_logo"
                                    src={(user.images[0].url === undefined) ? null : user.images[0].url}
                                    alt="Face" />
                             </NavLink> :
                            <div className="registration">
                                <NavLink to="/login" className="reg">Войти</NavLink>
                            </div>}

                </div>
            </header>
            </div>
        </>
    )
}

export default Nav;