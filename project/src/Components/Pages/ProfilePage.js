import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

import {  setToken, setUser } from "../../actions/actions";



const ProfilePage = () => {
    const {user} = useSelector(state => state);
    const dispatch = useDispatch();


    const logout = () => {
        dispatch(setToken(''));
        dispatch(setUser(null));
    }

    return(
        <>
            { user ? 
                        <div className="personInfo">
                        <div className="personBox">
                            <div className="boxLogo">
                                <a href=""> <img
                                        src={(user.images[0].url === undefined) ? null : user.images[0].url}
                                        alt="Face" id="personFaceLogo"/></a>
                            </div>
                        </div>
                        <div className="PersonName">
                            <h2 className="PersonNameText">{user.display_name}</h2>
                            <div className="preferences">
                                <div className="contentSorting" id="contentSortingBig">
                                    Подписка <a href=""><span className="headLink" id="headLinkBig">HIFI</span></a>
                                </div>
                                <div className="contentSorting" id="contentSortingBig">
                                    Страна <a href=""><span className="headLink">Беларусь</span></a>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-primary btn-block create-account" onClick={logout}>Выйти</button>
                    </div> : <Redirect to='/login'/>}
        </>
    )
}


export default ProfilePage;