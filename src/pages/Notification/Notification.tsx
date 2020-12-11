import React, { useState } from "react";

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCardContent,
  IonModal,
  IonRow,
  IonCol,
  IonButton,
  IonIcon,
  IonText,
} from "@ionic/react";
import { notificationsOutline } from "ionicons/icons";
import "./Notification.css";

const Notification: React.FC = () => {
  const [notify, setNotify] = useState(false);
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Notifikasi</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCardContent>
          <IonRow className="notifikasi">
            <IonCol>
              <IonButton onClick={() => setNotify(true)} className="xBtncolor">
                <IonIcon color="success" icon={notificationsOutline} />
                <IonText>PENGESAHAN PENERIMA PEMOHONAN</IonText>
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow className="notifikasi">
            <IonCol>
              <IonButton onClick={() => setNotify(true)} className="xBtncolor">
                <IonIcon color="success" icon={notificationsOutline} />
                <IonText>PERMOHONAN TELAH DIHANTAR</IonText>
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow className="notifikasi">
            <IonCol>
              <IonButton onClick={() => setNotify(true)} className="xBtncolor">
                <IonIcon color="success" icon={notificationsOutline} />
                <IonText>PENDAFTARAN PENGGUNA BERJAYA</IonText>
              </IonButton>
            </IonCol>
          </IonRow>
          <IonModal isOpen={notify} cssClass="my-custom-class">
            <p>This is modal content</p>
            <IonButton onClick={() => setNotify(false)}>Close Modal</IonButton>
          </IonModal>
        </IonCardContent>
      </IonContent>
    </>
  );
};

export default Notification;
