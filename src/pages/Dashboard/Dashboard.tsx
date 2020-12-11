import React from "react";
import { Link, useHistory } from "react-router-dom";
import { getUser } from "../../Utils/Common";
import {
  IonContent,
  IonSlides,
  IonSlide,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonAvatar,
  IonRow,
  IonCol,
  IonImg,
  IonText,
  IonCardContent,
  IonGrid,
  IonIcon,
} from "@ionic/react";

import "./Dashboard.css";
import { notificationsOutline, arrowForward } from "ionicons/icons";

import Product from "./Product";

const slideOpts = {
  initialSlide: 1,
  speed: 100,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
};

const Dashboard: React.FC = (props) => {
  const user = getUser();
  let history = useHistory();
  function clickStatus() {
    history.push("/Status");
  }
  function clickCawangan() {
    history.push("/Cawangan");
  }

  return (
    <>
      {/* {console.log("user_info", user)} */}
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
          <IonAvatar slot="end" style={{ width: "50px", height: "50px" }}>
            <img src="/assets/img/user.jpg" alt="" />
          </IonAvatar>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCardContent>
          Hi <b className="blue">{user.name},</b> Selamat Datang !
        </IonCardContent>
        {/* Slide */}
        <IonSlides pager={true} options={slideOpts} className="swiper">
          <IonSlide className="ion-padding">
            <img src="/assets/img/covid.png" alt="" />
          </IonSlide>
          <IonSlide className="ion-padding">
            <img src="/assets/img/slide1.png" alt="" />
          </IonSlide>
          <IonSlide className="ion-padding">
            <img src="/assets/img/covid.png" alt="" />
          </IonSlide>
          <IonSlide className="ion-padding">
            <img src="/assets/img/slide1.png" alt="" />
          </IonSlide>
          <IonSlide className="ion-padding">
            <img src="/assets/img/covid.png" alt="" />
          </IonSlide>
        </IonSlides>
        {/* End Slide */}
        <IonCardContent>
          <IonRow>
            <IonCol className="iconMenu" onClick={clickStatus}>
              <IonImg src="/assets/icon/status.svg" alt="Document" />
              <IonText>Permohonan</IonText>
            </IonCol>
            <IonCol className="iconMenu">
              <IonImg src="/assets/icon/form.svg" alt="Document" />
              <IonText>Bantuan</IonText>
            </IonCol>
            <IonCol className="iconMenu" onClick={clickCawangan}>
              <IonImg src="/assets/icon/stayhome.svg" alt="Document" />
              <IonText>Cawangan</IonText>
            </IonCol>
          </IonRow>
        </IonCardContent>

        <IonGrid>
          <IonRow className="main">
            <IonTitle>
              Produk
              <IonIcon
                className="iconRight"
                color="success"
                icon={arrowForward}
              />
            </IonTitle>
            <Product />
          </IonRow>
        </IonGrid>
      </IonContent>
    </>
  );
};

export default Dashboard;
