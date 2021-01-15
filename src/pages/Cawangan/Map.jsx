import React, { useState, useEffect, useRef } from 'react';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import Button from '@material-ui/core/Button';
import { IonAlert, IonLoading } from '@ionic/react';

const Map = ({ array, isAdding, getLocation }) => {
    const [selected, setSelected] = useState({});
    const [currentPosition, setCurrentPosition] = useState({});
    const [alertMessage, setAlertMessage] = useState();
    const [alertHeader, setAlertHeader] = useState();
    const [nearestEmbassy, setNearestEmbassy] = useState();
    const [showAlert, setShowAlert] = useState(false);

    const markerRef = useRef(null);

    const defaultCenter = {
        lat: 2.924428,
        lng: 101.6921128
    }

    const onSelect = item => {
        setSelected(item);
    }

    const navigateGPS = (lat, lng) => {
        window.open('https://www.google.com/maps/dir/?api=1&destination=' + lat + ',' + lng);
    }

    const locations = [
        { name: 'Tekun Nasional Johor', state_name: 'Johor', state_id: 1, location: {
            lat: 1.4899808999321014, 
            lng: 103.71181459984092
        } 
        },
        { name: 'Tekun Nasional Pejabat Negeri Melaka', state_name: 'Melaka', state_id: 2, location: {
            lat: 2.2688246, 
            lng: 102.2917932
        } 
        },
        { name: 'Tekun Nasional Pejabat Negeri Negeri Sembilan', state_name: 'Negeri Sembilan', state_id: 3, location: {
            lat: 2.725496,
            lng: 101.9511562
        } 
        },
        { name: 'Tekun Nasional Pejabat Negeri Perak', state_name: 'Perak', state_id: 4, location: {
            lat: 4.6067029,
            lng: 101.0801983
        } 
        },
        { name: 'Tekun Nasional Pejabat Negeri Pulau Pinang', state_name: 'Pulau Pinang', state_id: 5, location: {
            lat: 5.403735,
            lng: 100.4053113
        } 
        },
        { name: 'Tekun Nasional Pejabat Negeri Kedah', state_name: 'Kedah', state_id: 6, location: {
            lat: 6.1408929,
            lng: 100.3507124
        } 
        },
        { name: 'Tekun Nasional Pejabat Negeri Negeri Kelantan', state_name: 'Kelantan', state_id: 7, location: {
            lat: 5.9816879,
            lng: 102.1140576
        } 
        },
        { name: 'Tekun Nasional Pejabat Negeri Pahang', state_name: 'Pahang', state_id: 8, location: {
            lat: 3.4500627,
            lng: 102.4160378
        } 
        },
        { name: 'Tekun Nasional Pejabat Negeri Perlis', state_name: 'Perlis', state_id: 9, location: {
            lat: 3.4500627,
            lng: 102.4160378
        } 
        },
        { name: 'Tekun Nasional Pejabat Negeri Sabah', state_name: 'Sabah', state_id: 10, location: {
            lat: 5.9489127,
            lng: 116.0578114
        } 
        },
        { name: 'Tekun Nasional Pejabat Negeri Sarawak', state_name: 'Sarawak', state_id: 11, location: {
            lat: 5.965904,
            lng: 116.0617753
        } 
        },
        { name: 'Tekun Nasional Pejabat Negeri Terengganu', state_name: 'Terengganu', state_id: 12, location: {
            lat: 5.3491705,
            lng: 103.1002956
        } 
        },
        { name: 'Tekun Nasional Pejabat Negeri Wilayah Persekutuan Kuala Lumpur', state_name: 'Kuala Lumpur', state_id: 13, location: {
            lat: 3.1172213,
            lng: 101.6741559
        } 
        },


    ];

    function rad(x) {return x*Math.PI/180;}

    const success = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        let R = 6371; // radius of earth in km
        let distances = [];
        let closest = -1;

        locations.forEach((value, i) => {
            var mlat = locations[i].location.lat;
            var mlng = locations[i].location.lng;

            var dLat  = rad(mlat - latitude);
            var dLong = rad(mlng - longitude);

            var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(rad(latitude)) * Math.cos(rad(latitude)) * Math.sin(dLong/2) * Math.sin(dLong/2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            var d = R * c;
            
            distances[i] = d;
            if ( closest == -1 || d < distances[closest] ) {
                closest = i;
            }
        });

        setAlertMessage(`Your nearest embassy is <strong>${locations[closest].name}</strong>. Navigate?`);
        setAlertHeader(locations[closest].state_name);
        setNearestEmbassy(locations[closest]);
        setShowAlert(true);

        const currentPosition = {
            lat: latitude,
            lng: longitude
        }


        setCurrentPosition(currentPosition);
    }

    const onMarkerDragEnd = (e) => {
        const lat = e.latLng.lat();
        const lng = e.latLng.lng();
        setCurrentPosition({ lat, lng })
    };

    const mapStyles = () => {
        if (!isAdding) {
            return {
                height: "95vh",
                width: "100%"
            }
        } else {
            return {
                height: "80vh",
                width: "100%"
            }
        }
    }


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success);
    }, [])

    return (
        <>
            <IonAlert
                isOpen={showAlert}
                onDidDismiss={() => setShowAlert(false)}
                cssClass="my-custom-class"
                header={alertHeader}
                message={alertMessage}
                buttons={[
                {
                    text: "Cancel",
                    handler: () => {
                    },
                },
                {
                    text: "Navigate",
                    handler: () => {
                        window.open('https://www.google.com/maps/dir/?api=1&destination=' + nearestEmbassy.location.lat + ',' + nearestEmbassy.location.lng);
                    },
                },
                ]}
            />
            <GoogleMap
                id='example-map'
                mapContainerStyle={mapStyles()}
                draggable={true}
                zoom={13}
                center={currentPosition.lat ? currentPosition : defaultCenter}
            >
                {
                    array ?
                        array.map(item => {
                            return (
                                <Marker
                                    key={item.id}
                                    position={item.location}
                                    onClick={() => onSelect(item)}
                                />
                            )
                        }) : null
                }
                {
                    isAdding ?
                        <Marker
                            position={currentPosition}
                            ref={() => markerRef}
                            onDragEnd={(e) => onMarkerDragEnd(e)}
                            draggable={true} /> :
                        null
                }
                {
                    <Marker
                        position={currentPosition}
                        icon={{
                            url: 'assets/img/google-maps-computer-icons-gps-navigation-systems-google-map-maker-map-d8fe19f79876166097babad349deb126.png',
                            size: { width: 100, height: 100 },
                            anchor: { x: 15, y: 50 },
                            scaledSize: { width: 50, height: 50 },
                        }}
                    />
                }
                {
                    selected.location ?
                        (
                            <InfoWindow
                                position={selected.location}
                                onCloseClick={() => setSelected({})}
                            >
                                <div className="infowindow">
                                    <p>{selected.name}</p>
                                    <p>{selected.address}</p>
                                    <p>{selected.tel}</p>
                                    <p>Latitude: {selected.location.lat} Longitude: {selected.location.lng}</p>
                                    <Button variant="contained" color="primary" onClick={() => navigateGPS(selected.location.lat, selected.location.lng)}>Navigate</Button>
                                </div>
                            </InfoWindow>
                        ) : null
                }
                {
                    locations.map((item, key) => {
                        return (
                            <Marker
                                key={key}
                                position={item.location}
                                onClick={() => onSelect(item)}
                            />
                        )
                    })
                }
            </GoogleMap>
        </>
    )
}

export default Map;