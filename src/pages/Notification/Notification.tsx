import React from "react";

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const Notification: React.FC = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Notifikasi</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent></IonContent>
    </>
  );
};

export default Notification;
