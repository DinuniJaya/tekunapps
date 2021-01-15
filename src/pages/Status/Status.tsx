import React, { useState } from "react";

import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCardContent,
  IonRow,
  IonCol,
  IonButton,
  IonIcon,
  IonText,
  IonModal,
  IonPage,
  IonCardTitle,
  IonCardSubtitle,
  IonBackdrop,
} from "@ionic/react";
import "../Notification/Notification.css";
import "./Status.css";
import { notificationsOutline } from "ionicons/icons";
import StatusPmohon from "./StatusPmohon";
const Status: React.FC = () => {
  const [notify, setNotify] = useState(false);
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton icon="chevron-back" />
          </IonButtons>
          <IonTitle>Status Permohonan</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCardContent>
          <IonCardTitle className="iTitle">
            Senarai Permohonan Skim Pembiayaan TEKUN Niaga
          </IonCardTitle>
          <IonCardSubtitle className="iSubTitle">
            Berikut merupakan senarai permohonan yang telah dibuat oleh pihak
            Tuan/Puan mengikut skim dan status semasa.
          </IonCardSubtitle>
          <IonRow className="notifikasi">
            <IonCol>
              <IonButton onClick={() => setNotify(true)} className="xBtncolor">
                <IonIcon color="success" icon={notificationsOutline} />
                <IonText>PENGESAHAN PENERIMA PEMOHONAN</IonText>
              </IonButton>
            </IonCol>
          </IonRow>
          <IonModal isOpen={notify} cssClass="my-custom-class">
            <IonRow className="ion-padding">
              <StatusPmohon />
            </IonRow>
            <IonButton onClick={() => setNotify(false)}>Tutup</IonButton>
          </IonModal>
        </IonCardContent>
      </IonContent>
    </>
  );
};

export default Status;
