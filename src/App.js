
import { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//components

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Admin from "./components/Admin/Admin";
import Deal from "./components/Deal/Deal";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import Orders from "./components/Orders/Orders";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";


//app related
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

        <Router>
          <Header user={loggedInUser}></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/deal'>
              <Deal></Deal>
            </Route>

            <PrivateRoute path='/orders'>
              <Orders></Orders>
            </PrivateRoute>
            <PrivateRoute path='/admin'>
             <Admin></Admin>
            </PrivateRoute>
          

            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>

      </UserContext.Provider>
    </>
  );
}

export default App;
