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
// import Maptekun from "./maptekun";
import MapCawangan from "./MapCawangan.js";

const Cawangan: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton icon="chevron-back" />
          </IonButtons>
          <IonTitle>Cawangan</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <MapCawangan />
        {/* <Maptekun /> */}
      </IonContent>
    </IonPage>
  );
};

export default Cawangan;
