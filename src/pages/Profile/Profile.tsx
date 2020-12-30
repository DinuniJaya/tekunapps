import React from "react";
import { useHistory } from "react-router";
import { getUser } from "../../Utils/Common";
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
  // const history = useHistory();
  // console.log(getUser);

  let purl = user.picture_url ? `assets/img/user.jpg` : `assets/img/user.jpg`;

  // handle click event of logout button
  // const handleLogout = () => {
  //   removeUserSession();
  //   history.push("./login");
  // };
  console.log("props", props);
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
          <IonAvatar slot="end" style={{ width: "50px", height: "50px" }}>
            <img src={purl} />
          </IonAvatar>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* <IonCardContent>
          No Kad Pengenalan : {user.no_kp_baru}
          <br />
          Email : {user.email}
          <br />
          No Tel : {user.no_tel}
          <br />
        </IonCardContent> */}
        <MaklumatForm />

        {/* <IonButton
          expand="block"
          type="button"
          onClick={handleLogout}
          className="blue ion-padding"
        >
          Log Keluar
        </IonButton> */}
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
