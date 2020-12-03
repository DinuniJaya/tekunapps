import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { getUser, removeUserSession } from "../../Utils/Common";
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonAvatar,
  IonCardContent,
  IonButton,
} from "@ionic/react";

import "./Profile.css";

import MaklumatForm from "./MaklumatForm";

const Profile: React.FC = (props) => {
  const user = getUser();
  const history = useHistory();

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    history.push("/login");
  };

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
          <IonAvatar slot="end" style={{ width: "50px", height: "50px" }}>
            <img src="/assets/img/user.jpg" />
          </IonAvatar>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCardContent>
          No Kad Pengenalan : {user.no_kp_baru}
          <br />
          Email : {user.email}
          <br />
          No Tel : {user.no_tel}
        </IonCardContent>
        <MaklumatForm />

        <IonButton
          expand="full"
          type="button"
          onClick={handleLogout}
          className="blue"
        >
          Log Keluar
        </IonButton>
        {/* <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <img src="./assets/icon/edit.svg" alt="edit" />
          </IonFabButton>
        </IonFab> */}
        {/* {selectedChoice ? (
          <div>
            <h4>Selected Choice:</h4>
            <pre>{JSON.stringify(selectedChoice, null, 2)}</pre>
          </div>
        ) : (
          ""
        )} */}
      </IonContent>
    </>
  );
};

export default Profile;
