import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Cart from "./Component/Cart";
import Products from "./Component/Products";
import Checkout from "./Component/Checkout";
import PaybyCreditCard from "./Component/PayCreditCard";
import Home from "./Home";
import Msg from "./Message";
import UrlNo from "./urlNotFound";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./stylesheet.css";
import logo from "./banner_shopping.png";

const NavBar = () => {
  const Logo_style = {
    height: "140px",
    width: "100%",
  };
  return (
    <div>
      <header>
        <div>
          <img
            src={logo}
            style={Logo_style}
            className='rounded m-0'
            alt='logo'
          />
          <BrowserRouter>
            <div>
              <ul>
                <li>
                  <Link to='/' className='styleYellowPurple h6'>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to='/products' className='styleYellowPurple h6'>
                    Products
                  </Link>
                </li>
                <li>
                  <Link to='/cart' className='styleYellowPurple h6'>
                    Cart
                  </Link>
                </li>
                <li>
                  <Link to='/checkout' className='styleYellowPurple h6'>
                    Checkout
                  </Link>
                </li>
                <li>
                  <Link to='/paybycreditcard' className='styleYellowPurple h6'>
                    Pay with Credit Card
                  </Link>
                </li>
                {/* <li>
                  <Link to='/login' className='styleYellowPurple h6'>
                    Login
                  </Link>
                </li> */}
              </ul>
            </div>

            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/products'>
                <Products />
              </Route>
              <Route path='/cart'>
                <Cart />
              </Route>
              <Route path='/checkout'>
                <Checkout />
              </Route>
              cd
              <Route path='/paybycreditcard'>
                <PaybyCreditCard />
              </Route>
              <Route path='/message'>
                <Msg msg='Pay by Credit Card Complete' />
              </Route>
              {/* <Route path='/login'>
                <Login />
              </Route> */}
              <Route component={UrlNo} />
            </Switch>
          </BrowserRouter>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
