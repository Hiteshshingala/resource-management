import React from "react";
import { Route, Switch } from "react-router-dom";

// import Login from "../components/auth/login";
import Login from "../components/auth/login";
import SignUP from "../components/auth/register";
import Dashboard from "../pages/dashboard";
import ReserveTable from "../components/restaurant/reserveTable";
import PrivetRouter from "./privateRoute";
// import NavBar from "../../common/navBar";
// import Footer from "../../common/footer/footer";

const Routers = () => (
  <>
    {/* <NavBar /> */}
    <Switch>
      <Route exact path="/" component={Dashboard}></Route>
      <Route  exact path="/login" component={Login}></Route>
      <Route  exact path="/sign-up" component={SignUP}></Route>
      <Route
        exact
        path="/dashboard"
        component={Dashboard}
      ></Route>
      <PrivetRouter
        exact
        path="/booktable"
        component={ReserveTable}
      ></PrivetRouter>
    </Switch>
    {/* <Footer /> */}
  </>
);

export default Routers;