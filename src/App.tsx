import React, { useEffect, useState } from "react";
import axios from "axios";
import { Redirect, Route, Switch } from "react-router-dom";

import PrivateRoute from "./Utils/PrivateRoute";
import PublicRoute from "./Utils/PublicRoute";
import { getToken, removeUserSession, setUserSession } from "./Utils/Common";

import {
  IonApp,
  IonBadge,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
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
  // const [authLoading, setAuthLoading] = useState(true);

  // useEffect(() => {
  //   const token = getToken();
  //   if (!token) {
  //     return console.log(token);
  //   }

  //   axios
  //     .post(`https://tekun2.nakmenangtender.com/api/v2/user`, {
  //       headers: {
  //         Authorization:
  //           "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijc5NjIzYTZmMzgyMWI3ZjhmNmM4MjYxYWE0NDJiYzAwMDJlYzhhYWQ1MjQ2Yzk0ZDViMTEyMmRkZTdiOTFlNTJjN2FkZmUwOWRiNDg1NmFhIn0.eyJhdWQiOiIzIiwianRpIjoiNzk2MjNhNmYzODIxYjdmOGY2YzgyNjFhYTQ0MmJjMDAwMmVjOGFhZDUyNDZjOTRkNWIxMTIyZGRlN2I5MWU1MmM3YWRmZTA5ZGI0ODU2YWEiLCJpYXQiOjE2MDY0OTc0NzksIm5iZiI6MTYwNjQ5NzQ3OSwiZXhwIjoxNjM4MDMzNDc4LCJzdWIiOiIxMTkwIiwic2NvcGVzIjpbXX0.xXgcWy5bnchckWtBTb_ck0Ri-c3ZpMQUChq-qUXSZ1jEjNE1a5PyJ3asxhQBrbrcVRt8LpFN1TD5B6YDjn4pRkqDQ_ElahIWny5URHbcPFNPG1W1ZDgMuvuM9Qo5HzadK1XYpnMoguNASU8zck1Jj4qcvv4RBKpeV_Y00z7bzalv6wICuDerSKytTcxcIKDQkdCPhvQD7NaeRVjAX-Zvm4xIG1D0CpFO7XTXnO-12WNQLwk358i8zehOXf-hMKIKme1-tE71IYDFSzRH2VxS3K3D8U1EDXZplnR02fURYwjope9vkGKYg9NhZwOCu73gho0k0AfkbjM-DwS-IgTFLTvS1_XAXtA7f5GSX8EwNNVINfCn2Qah3OBspf0VP3gf0tVhWTv-MKButfMRW-hTCVkS-Maj7dZocQkAo3g8yGqP3YRcFMFyIfVD0cQAj6XWoDSW1GvuBHdSkr2jxZ52_Z7m8yl9CciLcjILFUfymqZqh2UEpsmPypWfILoQnIDel799fM_aZhU8JeLtuqKDyhEnsx6dBPkSj2q5x0wmNbTestP6cfscp8htigbRGvdKA6VhqwF3-NemDgHQ09hHKNwgolFECp0lEtJPAW0lB1P25dCeyWNkFrmsx9fIM1n3gCNAiFU7OhLI5VzMWIL8W8DiFpbuotSQbvuwmErGFMw",
  //         "Content-Type": "application/json",
  //       },
  //     })
  //     .then((response) => {
  //       console.log(setUserSession);
  //       setUserSession(response.data.user_info.token);
  //       setAuthLoading(false);
  //     })
  //     .catch((error) => {
  //       removeUserSession();
  //       setAuthLoading(false);
  //     });
  // }, []);

  // if (authLoading && getToken()) {
  //   return <div className="content">Checking Authentication...</div>;
  // }

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
          <Route path="/login" component={Login} />
          <Route path="/Home" component={Home} exact={true} />
          <Route path="/Register" component={Register} exact={true} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
