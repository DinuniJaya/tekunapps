import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";

import PrivateRoute from "./Utils/PrivateRoute";
import PublicRoute from "./Utils/PublicRoute";
import { getToken, removeUserSession, setUserSession } from "./Utils/Common";

import {
  IonApp,
  IonBadge,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
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
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import Notification from "./pages/Notification/Notification";

import "./Apps.css";

const App: React.FC = (props) => {
  console.log(window.location.href);

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Switch>
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <PrivateRoute
                path="/Notification"
                component={Notification}
                exact={true}
              />
              <PrivateRoute path="/Profile" component={Profile} exact={true} />
              <Route path="/login" component={Login} />
              <Route path="/Home" component={Home} exact={true} />
              <Route path="/Register" component={Register} exact={true} />
              {/* <Route path="/" component={isLoggedIn ? MainTabs : Login} /> */}
              <Route
                exact
                path="/"
                render={() => (
                  <Redirect to="/home" />
                  // <Maintab />
                )}
              />
            </Switch>
          </IonRouterOutlet>

          <IonTabBar slot="bottom" className="nologin">
            <IonTabButton tab="Dashboard" href="/Dashboard">
              <img src="./assets/icon/dashboard.svg" alt="dashboard" />
              <IonLabel>Home</IonLabel>
            </IonTabButton>

            <IonTabButton tab="Notification" href="/Notification">
              <img src="./assets/icon/notification.svg" alt="notification" />
              <IonLabel>Notifikasi</IonLabel>
              <IonBadge color="success">3</IonBadge>
            </IonTabButton>

            <IonTabButton tab="Profile" href="/Profile">
              <img src="./assets/icon/people.svg" alt="people" />
              <IonLabel>Profile</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
