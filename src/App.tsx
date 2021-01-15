import React from "react";

import { Redirect, Route } from "react-router-dom";

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

import RedirectToLogin from "./components/RedirectToLogin";
import { removeUserSession } from "./Utils/Common";
import Map from "./pages/Cawangan/Map";

const App: React.FC = (props) => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet id="main">
          <PrivateRoute path="/dashboard" component={Dashboard} exact={true} />
          <PrivateRoute
            path="/notification"
            component={Notification}
            exact={true}
          />
          <PrivateRoute path="/profile" component={Profile} exact={true} />
          <PublicRoute path="/login" component={Login} exact={true} />
          <PublicRoute path="/home" component={Home} exact={true} />
          <PublicRoute path="/register" component={Register} exact={true} />
          <PrivateRoute path="/status" component={Status} exact={true} />
          <PrivateRoute path="/map" component={Map} exact={true} />
          <Redirect exact from="/" to="/home" />
          <Route
            path="/logout"
            render={() => {
              return <RedirectToLogin removeUserSession={removeUserSession} />;
            }}
          />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
