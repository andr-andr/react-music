import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import { lazy, Suspense } from "react";

import Footer from "../Footer";
import Nav from "../Nav";

const MainPage = lazy(() => import("../Pages/MainPage"));
const RegistrationPage = lazy(() => import("../Pages/RegistrationPage"));
const CatalogPage = lazy(() => import("../Pages/CatalogPage"));
const ProfilePage = lazy(() => import("../Pages/ProfilePage"));
const LoginPage = lazy(() => import("../Pages/LoginPage"));

function App() {
  return (
      <Router>
         <Nav/>
            <Suspense fallback={<div>Download...</div>}>
               <Switch>
                  <Route exact path='/'>
                     <MainPage/>
                  </Route>
                  <Route exact path='/registration'>
                     <RegistrationPage/>
                  </Route>
                  <Route exact path='/catalog'>
                     <CatalogPage/>
                  </Route>
                  <Route exact path='/profile'>
                     <ProfilePage/>
                  </Route>
                  <Route exact path='/login'>
                     <LoginPage/>
                  </Route>
               </Switch>
            </Suspense>
         <Footer/>
      </Router>
  );
}

export default App;
