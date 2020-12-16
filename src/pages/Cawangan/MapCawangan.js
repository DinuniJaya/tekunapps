import React, { useState, useEffect } from "react";
import { IonContent, IonCardContent } from "@ionic/react";
import "./MapCawangan.css";
import { divIcon } from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import "leaflet/dist/leaflet.css";
import { Map, TileLayer, Marker, Circle } from "react-leaflet";

const iconMarkup = renderToStaticMarkup(
  <i className=" fa fa-map-marker-alt fa-3x" />
);
const customMarkerIcon = divIcon({
  html: iconMarkup,
});
const yesAnswers = [
  {
    center: [3.1610644999999997, 101.7182277],
    color: "green",
  },
  {
    center: [3.1610644999999997, 101.7182277],
    color: "green",
  },
];

const noAnswers = [
  {
    center: [3.1610644999999997, 101.7182277],
    color: "red",
  },
  {
    center: [3.1610644999999997, 101.7182277],
    color: "red",
  },
];
function MapCawangan() {
  const state = {
    lat: "3.1610644999999997",
    lng: "101.7182277",
    zoom: 20,
  };

  const initialPosition = [state.lat, state.lng];

  const [circles, setCircles] = useState(yesAnswers);
  const [position, setPosition] = useState(initialPosition);

  function success(pos) {
    var crd = pos.coords;
    console.log("pos", pos);
    setPosition([crd.latitude, crd.longitude]);
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  return (
    <IonContent>
      <div className="container">
        <Map center={position} zoom={13} width="100%" height={1200}>
          <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position} icon={customMarkerIcon} />
          {circles.map((circle, index) => (
            <Circle
              color={circle.color}
              radius={50}
              key={index}
              center={circle.center}
            />
          ))}
        </Map>
        <br />
        <button onClick={() => setCircles(yesAnswers)}>Yes Answers</button>
        <button onClick={() => setCircles(noAnswers)}>No Answers</button>
      </div>
    </IonContent>
  );
}
export default MapCawangan;
