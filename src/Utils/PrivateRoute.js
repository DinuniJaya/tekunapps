import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getToken, setUserSession } from "./Common";
import {
  IonBadge,
  IonLabel,
  IonTabBar,
  IonTabButton,
  IonPage,
} from "@ionic/react";

// handle the private routes
function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        getToken() ? (
          <IonPage>
            <Component {...props} />
            <IonTabBar slot="bottom">
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
          </IonPage>
        ) : (
          <Redirect
            // to="/Login"
            to={{ pathname: "./Login", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
