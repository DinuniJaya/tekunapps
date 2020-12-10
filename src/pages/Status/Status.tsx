import React from "react";

import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const Status: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton icon="chevron-back" />
          </IonButtons>
          <IonTitle>Status Permohonan</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>Status</IonContent>
    </IonPage>
  );
};

export default Status;
