import React from "react";

import { getUser } from "../../Utils/Common";
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonAvatar,
  IonRow,
  IonCol,
  IonImg,
  IonText,
  IonCardContent,
  IonIcon,
} from "@ionic/react";

import { notificationsOutline } from "ionicons/icons";
const Status: React.FC = (props) => {
  const user = getUser();

  return (
    <>
      {/* {console.log("user_info", user)} */}
      <IonHeader>
        <IonToolbar>
          <IonTitle>Status</IonTitle>
          <IonAvatar slot="end" style={{ width: "50px", height: "50px" }}>
            <img src="/assets/img/user.jpg" alt="" />
          </IonAvatar>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCardContent>
          Hi <b className="blue">{user.name},</b> Selamat Datang !
        </IonCardContent>

        <IonCardContent>
          <IonRow className="notifikasi">
            <IonCol>
              <IonIcon color="success" icon={notificationsOutline} />
              <IonText>PENGESAHAN PENERIMA PEMOHONANs</IonText>
            </IonCol>
          </IonRow>
          <IonRow className="notifikasi">
            <IonCol>
              <IonIcon color="success" icon={notificationsOutline} />
              <IonText>PERMOHONAN TELAH DIHANTAR</IonText>
            </IonCol>
          </IonRow>
          <IonRow className="notifikasi">
            <IonCol>
              <IonIcon color="success" icon={notificationsOutline} />
              <IonText>PENDAFTARAN PENGGUNA BERJAYA</IonText>
            </IonCol>
          </IonRow>
        </IonCardContent>
      </IonContent>
    </>
  );
};

export default Status;
