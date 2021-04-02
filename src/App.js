
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
import Checkout from "./components/Checkout/Checkout";


//app related
export const UserContext = createContext();
export const CheckoutContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [checkoutProduct, setCheckoutProduct] = useState('');

  return (
    <>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <CheckoutContext.Provider value={[checkoutProduct, setCheckoutProduct]}>

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
            <PrivateRoute path='/checkout'>
              <Checkout></Checkout>
            </PrivateRoute>

            <PrivateRoute path='/orders'>
              <Orders></Orders>
            </PrivateRoute>
            <Route path='/admin'>
             <Admin></Admin>
            </Route>
          

            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
        </CheckoutContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
