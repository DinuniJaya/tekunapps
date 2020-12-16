import React, { Component } from "react";
import { Map, CircleMarker, TileLayer, Tooltip } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "leaflet/dist/leaflet.css";
import data from "./tekun";

class Maptekun extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function (position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
      });
    }
  }
  render() {
    var centerLat = (data.minLat + data.maxLat) / 2;
    var distanceLat = data.maxLat - data.minLat;
    var bufferLat = distanceLat * 0.05;
    var centerLong = (data.minLong + data.maxLong) / 2;
    var distanceLong = data.maxLong - data.minLong;
    var bufferLong = distanceLong * 0.05;
    return (
      <div>
        {/*<h3 style={{ textAlign: "center" }}>Cawangan Tekun</h3>*/}
        <Map
          style={{ height: "1000px", width: "100%" }}
          zoom={30}
          center={[centerLat, centerLong]}
          bounds={[
            [data.minLat - bufferLat, data.minLong - bufferLong],
            [data.maxLat + bufferLat, data.maxLong + bufferLong],
          ]}
        >
          <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {data.city.map((city, k) => {
            return (
              <CircleMarker
                key={k}
                center={[city["coordinates"][1], city["coordinates"][0]]}
                radius={20 * Math.log(city["population"] / 10000000)}
                fillOpacity={0.5}
                stroke={false}
              >
                <Tooltip direction="right" offset={[-8, -2]} opacity={1}>
                  <span>
                    {city["name"] +
                      ": " +
                      "Population" +
                      " " +
                      city["population"]}
                  </span>
                </Tooltip>
              </CircleMarker>
            );
          })}
        </Map>
      </div>
    );
  }
}

export default Maptekun;
