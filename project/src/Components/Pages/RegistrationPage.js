const MainRegistrationPage = () => {
    return(
        <>
            <div className="login">
                <div className="registration-cssave">
                    <form>
                        <h3 className="text-center">Регистрация</h3>
                        <div className="form-group">
                            <input className="form-control item" name="username"
                                 id="username" placeholder="Логин"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control item"  name="Пароль"  
                                placeholder="Пароль" />
                        </div>
                        <div className="form-group">
                            <input className="form-control item"  name="Пароль" 
                                placeholder="Ещё раз" />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary btn-block create-account"  type="submit">Регистрация</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default MainRegistrationPage;