import React, { useEffect, useState } from "react";

import { Redirect, Route, Switch } from "react-router-dom";

import PrivateRoute from "./Utils/PrivateRoute";
import PublicRoute from "./Utils/PublicRoute";

import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "./Apps.css";

/* Import Pages */
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import Notification from "./pages/Notification/Notification";
import Status from "./pages/Status/Status";

import Cawangan from "./pages/Cawangan/Cawangan";

const App: React.FC = (props) => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute
            path="/Notification"
            component={Notification}
            exact={true}
          />
          <PrivateRoute path="/Profile" component={Profile} exact={true} />
          <PublicRoute path="/login" component={Login} />
          <PublicRoute path="/Home" component={Home} exact={true} />
          <PublicRoute path="/Register" component={Register} exact={true} />
          <Route path="/Status" component={Status} exact={true} />
          <Route path="/Cawangan" component={Cawangan} exact={true} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
