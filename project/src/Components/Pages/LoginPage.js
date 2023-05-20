import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

import { setToken, setUser } from "../../actions/actions";


const LoginPage = () => {
    const CLIENT_ID = '592478a61d104d0e93c73eaea64a5703';
    const REDIRECT_URI = "http://localhost:3000/login";
    const AUTH_ENDPOINT = "https:/accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token";

    let {token, user} = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        const hash = window.location.hash;
        if (!token && hash && !user) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];

            window.location.hash = "";
        }
        dispatch(setToken(token));
    }, []);

    useEffect(() => {
        if (token) {
            axios.get('https://api.spotify.com/v1/me',{
                headers: {
                  Authorization: `Bearer ${token}`,
                },
                method: 'GET'
              })
            .then(response => {
                console.log(response.data)
                dispatch(setUser(response.data))
            })
        }
    }, []);




    return(
        <>
            <div className="login">
                <div className="registration-cssave">


                        {(!token) ?
                        <><form>
                            <h3 className="text-center">Вход</h3>
                            <div className="form-group">
                                <input className="form-control item" name="username"
                                    id="username" placeholder="Логин"/>
                            </div>
                            <div className="form-group">
                                <input className="form-control item" name="Пароль" id="password"
                                    placeholder="Пароль"/>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary btn-block create-account" id="Enter" type="submit">
                                <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Ввойти
                                </a>
                                </button>
                            </div>
                            </form>
                        </>

                    : <Redirect to='/'/>
                    }

                </div>

            </div>
            <div className="container">
            </div>
        </>
    )
}

export default LoginPage;