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
        { name: 'Abuja', state_name: 'Nigeria', state_id: 125, location: {
            lat: 9.094316, 
            lng: 7.499071
        } 
        },
        { name: 'Abuja', state_name: 'Cameroon', state_id: 32, location: {
            lat: 9.094316, 
            lng: 7.499071
        } 
        },
        { name: 'Abuja', state_name: 'Gabon', state_id: 63, location: {
            lat: 9.094316, 
            lng: 7.499071
        } 
        },
        { name: 'Abuja', state_name: 'Equatorial Guinea', state_id: 55, location: {
            lat: 9.094316, 
            lng: 7.499071
        } 
        },
        { name: 'Abuja', state_name: 'Benin', state_id: 20, location: {
            lat: 9.094316, 
            lng: 7.499071
        } 
        },
        { name: 'Abuja', state_name: 'Chad', state_id: 35, location: {
            lat: 9.094316, 
            lng: 7.499071
        } 
        },
        { name: 'Abuja', state_name: 'Central Africa Rep.', state_id: 34, location: {
            lat: 9.094316, 
            lng: 7.499071
        } 
        },

        { name: 'Abu Dhabi', state_name: 'UAE', state_id: 185, location: {
            lat: 23.4240761, 
            lng: 53.8478165
        } 
        },

        { name: 'Accra', state_name: 'Ghana', state_id: 66, location: {
            lat: 5.613276, lng: 
            -0.192986
        } 
        },
        { name: 'Accra', state_name: 'Togo', state_id: 178, location: {
            lat: 5.613276, lng: 
            -0.192986
        } 
        },
        { name: 'Accra', state_name: 'Niger ', state_id: 124, location: {
            lat: 5.613276, lng: 
            -0.192986
        } 
        },
        { name: 'Accra', state_name: 'Sao Tome and Principe', state_id: 147, location: {
            lat: 5.613276, lng: 
            -0.192986
        } 
        },

        { name: 'Astana (Nur Sultan)', state_name: 'Kazakhstan', state_id: 87, location: {
            lat: 51.134137, 
            lng: 71.425831
        } 
        },

        { name: 'Algiers', state_name: 'Algeria', state_id: 3, location: {
            lat: 36.737153, 
            lng: 3.032748
        } 
        },
        { name: 'Algiers', state_name: 'Tunisia', state_id: 181, location: {
            lat: 36.737153, 
            lng: 3.032748
        } 
        },

        { name: 'Amman', state_name: 'Jordan', state_id: 86, location: {
            lat: 31.937487, 
            lng: 35.877097
        } 
        },
        { name: 'Amman', state_name: 'Iraq', state_id: 80, location: {
            lat: 31.937487, 
            lng: 35.877097
        } 
        },

        { name: 'Ankara', state_name: 'Turkey', state_id: 182, location: {
            lat: 39.892053, 
            lng: 32.877960
        } 
        },

        { name: 'Ashgabat', state_name: 'Turkmenistan', state_id: 183, location: {
            lat: 37.889108, 
            lng: 58.345662
        } 
        },

        { name: 'ASEAN Jakarta', state_name: 'Indonesia', state_id: 78, location: {
            lat: -6.210127, 
            lng: 106.831093
        } 
        },

        { name: 'Baku', state_name: 'Azerbaijan', state_id: 12, location: {
            lat: 40.404434, 
            lng: 49.841964
        } 
        },

        { name: 'Bandar Seri Begawan', state_name: 'Brunei', state_id: 26, location: {
            lat: 4.922385, 
            lng: 114.959199
        } 
        },

        { name: 'Bangkok', state_name: 'Thailand', state_id: 175, location: {
            lat: 13.722040, 
            lng: 100.538931
        } 
        },

        { name: 'Beijing', state_name: 'China', state_id: 37, location: {
            lat: 39.954170, 
            lng: 116.469744
        } 
        },
        { name: 'Beijing', state_name: 'Mongolia', state_id: 113, location: {
            lat: 39.954170, 
            lng: 116.469744
        } 
        },

        { name: 'Beirut', state_name: 'Lebanon', state_id: 95, location: {
            lat: 29.364876, 
            lng: 48.018154
        } 
        },
        { name: 'Beirut', state_name: 'Cyprus', state_id: 47, location: {
            lat: 29.364876, 
            lng: 48.018154
        } 
        },
        { name: 'Beirut', state_name: 'Syria ', state_id: 171, location: {
            lat: 29.364876, 
            lng: 48.018154
        } 
        },


        { name: 'Belgrade', state_name: 'Serbia', state_id: 150, location: {
            lat: 44.787584, 
            lng: 20.445589
        } 
        },

        { name: 'Berlin', state_name: 'Jerman', state_id: 85, location: {
            lat: 52.507345, 
            lng: 13.351484
        } 
        },

        { name: 'Berne', state_name: 'Switzerland', state_id: 170, location: {
            lat: 46.943997, 
            lng: 7.454752
        } 
        },
        { name: 'Berne', state_name: 'Liechtenstein', state_id: 99, location: {
            lat: 46.943997, 
            lng: 7.454752
        } 
        },

        { name: 'Brasilia', state_name: 'Brazil', state_id: 24, location: {
            lat: -15.851821, lng: 
            -47.901214
        } 
        },
        { name: 'Brasilia', state_name: 'Guyana', state_id: 72, location: {
            lat: -15.851821, lng: 
            -47.901214
        } 
        },
        { name: 'Brasilia', state_name: 'Suriname', state_id: 167, location: {
            lat: -15.851821, lng: 
            -47.901214
        } 
        },

        { name: 'Brussels', state_name: 'Belgium', state_id: 18, location: {
            lat: 50.826573, 
            lng: 4.446197
        } 
        },
        { name: 'Brussels', state_name: 'Luxembourg', state_id: 101, location: {
            lat: 50.826573, 
            lng: 4.446197
        } 
        },

        { name: 'Bucharest', state_name: 'Romania', state_id: 141, location: {
            lat: 44.446879, 
            lng: 26.106788
        } 
        },
        { name: 'Bucharest', state_name: 'Bulgaria', state_id: 27, location: {
            lat: 44.446879, 
            lng: 26.106788
        } 
        },
        { name: 'Bucharest', state_name: 'Rep. Moldova', state_id: 140, location: {
            lat: 44.446879, 
            lng: 26.106788
        } 
        },
        { name: 'Bucharest', state_name: 'Greece', state_id: 67, location: {
            lat: 44.446879, 
            lng: 26.106788
        } 
        },

        { name: 'Budapest', state_name: 'Hungary', state_id: 75, location: {
            lat: 47.517722, 
            lng: 19.000442
        } 
        },
        { name: 'Budapest', state_name: 'Slovenia', state_id: 155, location: {
            lat: 47.517722, 
            lng: 19.000442
        } 
        },
        { name: 'Budapest', state_name: 'Former Yugoslov Rep of Macedonia', state_id: 61, location: {
            lat: 47.517722, 
            lng: 19.000442
        } 
        },

        { name: 'Buenos Aires', state_name: 'Argentina', state_id: 8, location: {
            lat: -34.567671, lng: 
            -58.440224
        } 
        },
        { name: 'Buenos Aires', state_name: 'Uruguay', state_id: 190, location: {
            lat: -34.567671, lng: 
            -58.440224
        } 
        },
        { name: 'Buenos Aires', state_name: 'Paraguay', state_id: 134, location: {
            lat: -34.567671, lng: 
            -58.440224
        } 
        },

        { name: 'Cairo', state_name: 'Egypt', state_id: 53, location: {
            lat: 30.053237, 
            lng: 31.203745
        } 
        },
        { name: 'Cairo', state_name: 'State of Palestine', state_id: 165, location: {
            lat: 30.053237, 
            lng: 31.203745
        } 
        },

        { name: 'Canberra', state_name: 'Australia', state_id: 10, location: {
            lat: -35.304546, 
            lng: 149.113910
        } 
        },

        { name: 'Caracas', state_name: 'Venezuela', state_id: 194, location: {
            lat: 10.482441, lng: 
            -66.848972
        } 
        },
        { name: 'Caracas', state_name: 'Trinidad and Tobago', state_id: 180, location: {
            lat: 10.482441, lng: 
            -66.848972
        } 
        },
        { name: 'Caracas', state_name: 'Antigua and Barbuda', state_id: 6, location: {
            lat: 10.482441, lng: 
            -66.848972
        } 
        },
        { name: 'Caracas', state_name: 'Barbados', state_id: 16, location: {
            lat: 10.482441, lng: 
            -66.848972
        } 
        },
        { name: 'Caracas', state_name: 'Domicica', state_id: 50, location: {
            lat: 10.482441, lng: 
            -66.848972
        } 
        },
        { name: 'Caracas', state_name: 'Grenada', state_id: 68, location: {
            lat: 10.482441, lng: 
            -66.848972
        } 
        },
        { name: 'Caracas', state_name: 'St. Kitts and Nevis', state_id: 163, location: {
            lat: 10.482441, lng: 
            -66.848972
        } 
        },
        { name: 'Caracas', state_name: 'St. Vincent and the Grenadines', state_id: 164, location: {
            lat: 10.482441, lng: 
            -66.848972
        } 
        },

        { name: 'Chennai', state_name: 'India', state_id: 77, location: {
            lat: 13.034353, 
            lng: 80.246831
        } 
        },

        { name: 'Colombo', state_name: 'Sri Lanka', state_id: 162, location: {
            lat: 6.915171, 
            lng: 79.865453
        } 
        },
        { name: 'Colombo', state_name: 'Maldives', state_id: 105, location: {
            lat: 6.915171, 
            lng: 79.865453
        } 
        },

        { name: 'Conakry', state_name: 'Guinea', state_id: 70, location: {
            lat: 9.536778, lng: 
            -13.669456
        } 
        },
        { name: 'Conakry', state_name: 'Guinea-Bissau', state_id: 71, location: {
            lat: 9.536778, lng: 
            -13.669456
        } 
        },
        { name: 'Conakry', state_name: 'Cote dlvoire', state_id: 44, location: {
            lat: 9.536778, lng: 
            -13.669456
        } 
        },
        { name: 'Conakry', state_name: 'Liberia', state_id: 97, location: {
            lat: 9.536778, lng: 
            -13.669456
        } 
        },
        { name: 'Conakry', state_name: 'Sierra Leone', state_id: 152, location: {
            lat: 9.536778, lng: 
            -13.669456
        } 
        },

        { name: 'Dakar', state_name: 'Senegal', state_id: 149, location: {
            lat: 14.701077, lng: 
            -17.468569
        } 
        },
        { name: 'Dakar', state_name: 'Burkina Faso', state_id: 28, location: {
            lat: 14.701077, lng: 
            -17.468569
        } 
        },
        { name: 'Dakar', state_name: 'Cabo Verde', state_id: 30, location: {
            lat: 14.701077, lng: 
            -17.468569
        } 
        },
        { name: 'Dakar', state_name: 'The Gambia', state_id: 176, location: {
            lat: 14.701077, lng: 
            -17.468569
        } 
        },
        { name: 'Dakar', state_name: 'Mali', state_id: 106, location: {
            lat: 14.701077, lng: 
            -17.468569
        } 
        },

        { name: 'Damascus', state_name: 'Syria', state_id: 171, location: {
            lat: 33.497033, 
            lng: 36.250839
        } 
        },

        { name: 'Davao City', state_name: 'Philippines', state_id: 136, location: {
            lat: 7.117637, 
            lng: 125.626553
        } 
        },

        { name: 'Dhaka', state_name: 'Bangladesh', state_id: 15, location: {
            lat: 23.803355, 
            lng: 90.419333
        } 
        },

        { name: 'Dili', state_name: 'Timor Leste', state_id: 177, location: {
            lat: -8.544517, 
            lng: 125.548170
        } 
        },

        { name: 'Doha', state_name: 'Qatar', state_id: 139, location: {
            lat: 25.359685, 
            lng: 51.519318
        } 
        },

        { name: 'Dubai', state_name: 'UAE', state_id: 185, location: {
            lat: 25.244868, 
            lng: 55.288234
        } 
        },

        { name: 'Dublin', state_name: 'Ireland', state_id: 81, location: {
            lat: 53.332622, lng: 
            -6.232214
        } 
        },

        { name: 'Frankfurt', state_name: 'Germany', state_id: 65, location: {
            lat: 50.117570, 
            lng: 8.680940
        } 
        },

        { name: 'Geneva', state_name: 'Switzerland', state_id: 170, location: {
            lat: 46.224410, 
            lng: 6.100796
        } 
        },

        { name: 'Guanghzou', state_name: 'China', state_id: 37, location: {
            lat: 23.141643, 
            lng: 113.324721
        } 
        },

        { name: 'Hanoi', state_name: 'Vietnam', state_id: 195, location: {
            lat: 21.034006, 
            lng: 105.837479
        } 
        },

        { name: 'Harare', state_name: 'Zimbabwe', state_id: 198, location: {
            lat: -17.797580, 
            lng: 31.041396
        } 
        },
        { name: 'Harare', state_name: 'Zambia', state_id: 197, location: {
            lat: -17.797580, 
            lng: 31.041396
        } 
        },
        { name: 'Harare', state_name: 'Malawi', state_id: 104, location: {
            lat: -17.797580, 
            lng: 31.041396
        } 
        },
        { name: 'Harare', state_name: 'Mauritius', state_id: 109, location: {
            lat: -17.797580, 
            lng: 31.041396
        } 
        },
        { name: 'Harare', state_name: 'Seychelles', state_id: 151, location: {
            lat: -17.797580, 
            lng: 31.041396
        } 
        },
        { name: 'Harare', state_name: 'Comoros', state_id: 39, location: {
            lat: -17.797580, 
            lng: 31.041396
        } 
        },

        { name: 'Havana', state_name: 'Cuba', state_id: 46, location: {
            lat: 23.111242, lng: 
            -82.436535
        } 
        },
        { name: 'Havana', state_name: 'Bahamas', state_id: 13, location: {
            lat: 23.111242, lng: 
            -82.436535
        } 
        },
        { name: 'Havana', state_name: 'Dominican Rep.', state_id: 51, location: {
            lat: 23.111242, lng: 
            -82.436535
        } 
        },
        { name: 'Havana', state_name: 'Haiti', state_id: 73, location: {
            lat: 23.111242, lng: 
            -82.436535
        } 
        },
        { name: 'Havana', state_name: 'Jamaica', state_id: 83, location: {
            lat: 23.111242, lng: 
            -82.436535
        } 
        },
        { name: 'Havana', state_name: 'Nicaragua', state_id: 123, location: {
            lat: 23.111242, lng: 
            -82.436535
        } 
        },

        { name: 'Helsinki', state_name: 'Finland', state_id: 60, location: {
            lat: 60.169012, 
            lng: 24.943269
        } 
        },
        { name: 'Helsinki', state_name: 'Estonia', state_id: 57, location: {
            lat: 60.169012, 
            lng: 24.943269
        } 
        },
        { name: 'Helsinki', state_name: 'Latvia', state_id: 94, location: {
            lat: 60.169012, 
            lng: 24.943269
        } 
        },

        { name: 'Hong Kong SAR', state_name: 'China', state_id: 37, location: {
            lat: 22.279015, 
            lng: 114.170909
        } 
        },
        { name: 'Macau SAR', state_name: 'China', state_id: 37, location: {
            lat: 22.278922, 
            lng: 114.170843
        } 
        },

        { name: 'Ho Chi Minh City', state_name: 'Vietnam', state_id: 195, location: {
            lat: 10.807190, 
            lng: 106.725446
        } 
        },

        { name: 'Holy See', state_name: 'Vatican City', state_id: 193, location: {
            lat: 41.902577, 
            lng: 12.463706
        } 
        },
        { name: 'Holy See', state_name: 'Malta', state_id: 107, location: {
            lat: 41.902577, 
            lng: 12.463706
        } 
        },
        { name: 'Holy See', state_name: 'Albania', state_id: 2, location: {
            lat: 41.902577, 
            lng: 12.463706
        } 
        },

        { name: 'Islamabad', state_name: 'Pakistan', state_id: 130, location: {
            lat: 33.720341, 
            lng: 73.111311
        } 
        },

        { name: 'Jakarta', state_name: 'Indonesia', state_id: 78, location: {
            lat: -6.224905, 
            lng: 106.832229
        } 
        },

        { name: 'Jeddah', state_name: 'Arab Saudi', state_id: 7, location: {
            lat: 21.557168, 
            lng: 39.224467
        } 
        },

        { name: 'Karachi', state_name: 'Pakistan', state_id: 130, location: {
            lat: 24.814020, 
            lng: 67.048061
        } 
        },

        { name: 'Kathmandu', state_name: 'Nepal', state_id: 120, location: {
            lat: 27.680916, 
            lng: 85.302791
        } 
        },

        { name: 'Khartoum', state_name: 'Sudan', state_id: 160, location: {
            lat: 15.613378, 
            lng: 32.549847
        } 
        },
        { name: 'Khartoum', state_name: 'Ethiopia', state_id: 58, location: {
            lat: 15.613378, 
            lng: 32.549847
        } 
        },
        { name: 'Khartoum', state_name: 'Eritrea', state_id: 56, location: {
            lat: 15.613378, 
            lng: 32.549847
        } 
        },
        { name: 'Khartoum', state_name: 'Somalia', state_id: 157, location: {
            lat: 15.613378, 
            lng: 32.549847
        } 
        },

        { name: 'Kyiv', state_name: 'Ukraine', state_id: 188, location: {
            lat: 50.431270, 
            lng: 30.537438
        } 
        },
        { name: 'Kyiv', state_name: 'Georgia', state_id: 64, location: {
            lat: 50.431270, 
            lng: 30.537438
        } 
        },

        { name: 'Kunming', state_name: 'China', state_id: 37, location: {
            lat: 25.009224, 
            lng: 102.684989
        } 
        },

        { name: 'Kuwait', state_name: 'Kuwait', state_id: 91, location: {
            lat: 29.364672, 
            lng: 48.018154
        } 
        },

        { name: 'Lima', state_name: 'Peru', state_id: 135, location: {
            lat: -12.095891, lng: 
            -77.033888
        } 
        },
        { name: 'Lima', state_name: 'Panama', state_id: 132, location: {
            lat: -12.095891, lng: 
            -77.033888
        } 
        },
        { name: 'Lima', state_name: 'Colombia', state_id: 38, location: {
            lat: -12.095891, lng: 
            -77.033888
        } 
        },
        { name: 'Lima', state_name: 'Bolivia', state_id: 22, location: {
            lat: -12.095891, lng: 
            -77.033888
        } 
        },

        { name: 'London', state_name: 'United Kingdom and Northern Ireland', state_id: 189, location: {
            lat: 51.500063, lng: 
            -0.152649
        } 
        },

        { name: 'Los Angeles', state_name: 'USA', state_id: 186, location: {
            lat: 34.048380, lng: 
            -118.262791
        } 
        },

        { name: 'Madrid', state_name: 'Spain', state_id: 161, location: {
            lat: 40.456275, lng: 
            -3.631870
        } 
        },

        { name: 'Manama', state_name: 'Bahrain', state_id: 14, location: {
            lat: 26.236733, 
            lng: 50.539139
        } 
        },

        { name: 'Manila', state_name: 'Philippines', state_id: 136, location: {
            lat: 14.560519, 
            lng: 121.021452
        } 
        },
        { name: 'Manila', state_name: 'Palau Island', state_id: 131, location: {
            lat: 14.560519, 
            lng: 121.021452
        } 
        },

        { name: 'Medan', state_name: 'Indonesia', state_id: 78, location: {
            lat: 3.577412, 
            lng: 98.672763
        } 
        },

        { name: 'Melbourne', state_name: 'Australia', state_id: 10, location: {
            lat: -37.837410, 
            lng: 144.975168
        } 
        },

        { name: 'Mexico City', state_name: 'Mexico', state_id: 110, location: {
            lat: 19.415895, lng: 
            -99.228538
        } 
        },
        { name: 'Mexico City', state_name: 'Belize', state_id: 19, location: {
            lat: 19.415895, lng: 
            -99.228538
        } 
        },
        { name: 'Mexico City', state_name: 'Costa Rica', state_id: 43, location: {
            lat: 19.415895, lng: 
            -99.228538
        } 
        },
        { name: 'Mexico City', state_name: 'El Salvador', state_id: 54, location: {
            lat: 19.415895, lng: 
            -99.228538
        } 
        },
        { name: 'Mexico City', state_name: 'Guatemala', state_id: 69, location: {
            lat: 19.415895, lng: 
            -99.228538
        } 
        },
        { name: 'Mexico City', state_name: 'Honduras', state_id: 74, location: {
            lat: 19.415895, lng: 
            -99.228538
        } 
        },

        { name: 'Moscow', state_name: 'Russian Federation', state_id: 142, location: {
            lat: 55.720430, 
            lng: 37.516546
        } 
        },
        { name: 'Moscow', state_name: 'Armenia', state_id: 9, location: {
            lat: 55.720430, 
            lng: 37.516546
        } 
        },
        { name: 'Moscow', state_name: 'Belarus', state_id: 17, location: {
            lat: 55.720430, 
            lng: 37.516546
        } 
        },

        { name: 'Mumbai', state_name: 'India', state_id: 77, location: {
            lat: 19.059866, 
            lng: 72.832460
        } 
        },

        { name: 'Muscat', state_name: 'Oman', state_id: 129, location: {
            lat: 23.601992, 
            lng: 58.445671
        } 
        },

        { name: 'Nairobi', state_name: 'Kenya', state_id: 88, location: {
            lat: -1.233862, 
            lng: 36.808381
        } 
        },
        { name: 'Nairobi', state_name: 'Rwanda', state_id: 143, location: {
            lat: -1.233862, 
            lng: 36.808381
        } 
        },
        { name: 'Nairobi', state_name: 'Burundi', state_id: 29, location: {
            lat: -1.233862, 
            lng: 36.808381
        } 
        },
        { name: 'Nairobi', state_name: 'Tanzania', state_id: 174, location: {
            lat: -1.233862, 
            lng: 36.808381
        } 
        },
        { name: 'Nairobi', state_name: 'Uganda', state_id: 187, location: {
            lat: -1.233862, 
            lng: 36.808381
        } 
        },
        { name: 'Nairobi', state_name: 'South Sudan', state_id: 160, location: {
            lat: -1.233862, 
            lng: 36.808381
        } 
        },

        { name: 'New Delhi', state_name: 'India', state_id: 77, location: {
            lat: 28.586491, 
            lng: 77.187696
        } 
        },
        { name: 'New Delhi', state_name: 'Afghanistan', state_id: 1, location: {
            lat: 28.586491, 
            lng: 77.187696
        } 
        },
        { name: 'New Delhi', state_name: 'Bhutan', state_id: 21, location: {
            lat: 28.586491, 
            lng: 77.187696
        } 
        },

        { name: 'New York (CG)', state_name: 'USA', state_id: 186, location: {
            lat: 40.750361, lng: 
            -73.971053
        } 
        },

        { name: 'New York (UN/PBB)', state_name: 'USA', state_id: 186, location: {
            lat: 40.750361, lng: 
            -73.971053
        } 
        },

        { name: 'Ottawa', state_name: 'Canada', state_id: 33, location: {
            lat: 45.433919, lng: 
            -75.697506
        } 
        },

        { name: 'Paris', state_name: 'France', state_id: 62, location: {
            lat: 48.869222, 
            lng: 2.277559
        } 
        },
        { name: 'Paris', state_name: 'Monaco', state_id: 112, location: {
            lat: 48.869222, 
            lng: 2.277559
        } 
        },
        { name: 'Paris', state_name: 'Portugal', state_id: 138, location: {
            lat: 48.869222, 
            lng: 2.277559
        } 
        },
        { name: 'Paris', state_name: 'Andorra', state_id: 4, location: {
            lat: 48.869222, 
            lng: 2.277559
        } 
        },

        { name: 'Pekanbaru', state_name: 'Indonesia', state_id: 78, location: {
            lat: 0.473759, 
            lng: 101.454530
        } 
        },

        { name: 'Perth ', state_name: 'Australia', state_id: 10, location: {
            lat: -31.957822, 
            lng: 115.866268
        } 
        },

        { name: 'Phnom Penh', state_name: 'Cambodia', state_id: 31, location: {
            lat: 11.535536, 
            lng: 104.929542
        } 
        },

        { name: 'Pontianak', state_name: 'Indonesia', state_id: 78, location: {
            lat: -0.053901, 
            lng: 109.344346
        } 
        },

        { name: 'Port Moresby', state_name: 'Papua New Guinea', state_id: 133, location: {
            lat: -9.437103, 
            lng: 147.177419
        } 
        },
        { name: 'Port Moresby', state_name: 'Solomon Islands', state_id: 156, location: {
            lat: -9.437103, 
            lng: 147.177419
        } 
        },
        { name: 'Port Moresby', state_name: 'Vanuatu', state_id: 192, location: {
            lat: -9.437103, 
            lng: 147.177419
        } 
        },

        { name: 'Prague', state_name: 'Czech Rep.', state_id: 48, location: {
            lat: 50.102166, 
            lng: 14.414295
        } 
        },

        { name: 'Pretoria', state_name: 'South Africa', state_id: 158, location: {
            lat: -25.746539, 
            lng: 28.230649
        } 
        },
        { name: 'Pretoria', state_name: 'Botswana', state_id: 24, location: {
            lat: -25.746539, 
            lng: 28.230649
        } 
        },
        { name: 'Pretoria', state_name: 'Lesotho', state_id: 96, location: {
            lat: -25.746539, 
            lng: 28.230649
        } 
        },
        { name: 'Pretoria', state_name: 'Madagascar', state_id: 102, location: {
            lat: -25.746539, 
            lng: 28.230649
        } 
        },
        { name: 'Pretoria', state_name: 'Mozambique', state_id: 116, location: {
            lat: -25.746539, 
            lng: 28.230649
        } 
        },
        { name: 'Pretoria', state_name: 'Swaziland', state_id: 168, location: {
            lat: -25.746539, 
            lng: 28.230649
        } 
        },

        { name: 'Pyongyang', state_name: 'North Korea (DPRK)', state_id: 127, location: {
            lat: 39.033650, 
            lng: 125.785546
        } 
        },

        { name: 'Rabat', state_name: 'Morocco', state_id: 115, location: {
            lat: 33.943669, lng: 
            -6.816961
        } 
        },
        { name: 'Rabat', state_name: 'Mauritania', state_id: 108, location: {
            lat: 33.943669, lng: 
            -6.816961
        } 
        },

        { name: 'Riyadh', state_name: 'Arab Saudi', state_id: 7, location: {
            lat: 24.680128, 
            lng: 46.622179
        } 
        },

        { name: 'Rome', state_name: 'Italy', state_id: 82, location: {
            lat: 41.917032, 
            lng: 12.512078
        } 
        },
        { name: 'Rome', state_name: 'Kosovo', state_id: 90, location: {
            lat: 41.917032, 
            lng: 12.512078
        } 
        },
        { name: 'Rome', state_name: 'San Marino', state_id: 146, location: {
            lat: 41.917032, 
            lng: 12.512078
        } 
        },

        { name: 'Santiago', state_name: 'Chile', state_id: 36, location: {
            lat: -33.418223, lng: 
            -70.593293
        } 
        },
        { name: 'Santiago', state_name: 'Ecuador', state_id: 52, location: {
            lat: -33.418223, lng: 
            -70.593293
        } 
        },

        { name: 'Sarajevo', state_name: 'Bosnia', state_id: 23, location: {
            lat: 43.848868, 
            lng: 18.398972
        } 
        },
        { name: 'Sarajevo', state_name: 'Montenegro', state_id: 114, location: {
            lat: 43.848868, 
            lng: 18.398972
        } 
        },

        { name: 'Seoul', state_name: 'South Korea', state_id: 159, location: {
            lat: 37.537804, 
            lng: 127.012161
        } 
        },

        { name: 'Shanghai', state_name: 'China', state_id: 37, location: {
            lat: 31.198091, 
            lng: 121.399451
        } 
        },

        { name: 'Singapore', state_name: 'Singapore', state_id: 153, location: {
            lat: 1.294350, 
            lng: 103.825149
        } 
        },

        { name: 'Songkhla', state_name: 'Thailand', state_id: 175, location: {
            lat: 7.211819, 
            lng: 100.591067
        } 
        },

        { name: 'Stockholm', state_name: 'Sweden', state_id: 169, location: {
            lat: 59.341278, 
            lng: 18.074187
        } 
        },
        { name: 'Stockholm', state_name: 'Iceland', state_id: 76, location: {
            lat: 59.341278, 
            lng: 18.074187
        } 
        },
        { name: 'Stockholm', state_name: 'Denmark', state_id: 49, location: {
            lat: 59.341278, 
            lng: 18.074187
        } 
        },
        { name: 'Stockholm', state_name: 'Norway', state_id: 128, location: {
            lat: 59.341278, 
            lng: 18.074187
        } 
        },

        { name: 'Suva', state_name: 'Fiji', state_id: 59, location: {
            lat: -18.141575, 
            lng: 178.423867
        } 
        },
        { name: 'Suva', state_name: 'Kiribati', state_id: 89, location: {
            lat: -18.141575, 
            lng: 178.423867
        } 
        },
        { name: 'Suva', state_name: 'Nauru', state_id: 119, location: {
            lat: -18.141575, 
            lng: 178.423867
        } 
        },
        { name: 'Suva', state_name: 'Tonga', state_id: 179, location: {
            lat: -18.141575, 
            lng: 178.423867
        } 
        },
        { name: 'Suva', state_name: 'Tuvalu', state_id: 184, location: {
            lat: -18.141575, 
            lng: 178.423867
        } 
        },

        { name: 'Taipei', state_name: 'Taiwan', state_id: 172, location: {
            lat: 25.053356, 
            lng: 121.548385
        } 
        },

        { name: 'Tashkent', state_name: 'Uzbekistan', state_id: 191, location: {
            lat: 41.293609, 
            lng: 69.259014
        } 
        },
        { name: 'Tashkent', state_name: 'Tajikistan', state_id: 173, location: {
            lat: 41.293609, 
            lng: 69.259014
        } 
        },
        { name: 'Tashkent', state_name: 'Kyrgyzstan', state_id: 92, location: {
            lat: 41.293609, 
            lng: 69.259014
        } 
        },

        { name: 'Tehran', state_name: 'Iran', state_id: 79, location: {
            lat: 35.755735, 
            lng: 51.353683
        } 
        },

        { name: 'The Hague', state_name: 'Netherlands', state_id: 121, location: {
            lat: 52.087806, 
            lng: 4.291699
        } 
        },

        { name: 'Tokyo', state_name: 'Jepun', state_id: 84, location: {
            lat: 35.652304, 
            lng: 139.695491
        } 
        },
        { name: 'Tokyo', state_name: 'Micronesia', state_id: 111, location: {
            lat: 35.652304, 
            lng: 139.695491
        } 
        },

        { name: 'Tripoli', state_name: 'Libya', state_id: 98, location: {
            lat: 32.865335, 
            lng: 13.094518
        } 
        },

        { name: 'Vancouver', state_name: 'Canada', state_id: 33, location: {
            lat: 49.286172, lng: 
            -123.123121
        } 
        },

        { name: 'Vienna', state_name: 'Austria', state_id: 11, location: {
            lat: 48.252993, 
            lng: 16.393174
        } 
        },
        { name: 'Vienna', state_name: 'Slovakia', state_id: 154, location: {
            lat: 48.252993, 
            lng: 16.393174
        } 
        },

        { name: 'Vientiane', state_name: 'Laos', state_id: 93, location: {
            lat: 17.966771, 
            lng: 102.622157
        } 
        },

        { name: 'Warsaw', state_name: 'Poland', state_id: 137, location: {
            lat: 52.235230, 
            lng: 21.051397
        } 
        },
        { name: 'Warsaw', state_name: 'Lithuania', state_id: 100, location: {
            lat: 52.235230, 
            lng: 21.051397
        } 
        },

        { name: 'Washington DC', state_name: 'USA', state_id: 186, location: {
            lat: 38.943738, lng: 
            -77.069143
        } 
        },

        { name: 'Wellington', state_name: 'New Zealand', state_id: 122, location: {
            lat: -41.303010, 
            lng: 174.766532
        } 
        },
        { name: 'Wellington', state_name: 'Samoa', state_id: 145, location: {
            lat: -41.303010, 
            lng: 174.766532
        } 
        },
        { name: 'Wellington', state_name: 'Cook Islands', state_id: 42, location: {
            lat: -41.303010, 
            lng: 174.766532
        } 
        },
        { name: 'Wellington', state_name: 'Niue', state_id: 126, location: {
            lat: -41.303010, 
            lng: 174.766532
        } 
        },

        { name: 'Windhoek', state_name: 'Namibia', state_id: 118, location: {
            lat: -22.576654, 
            lng: 17.102667
        } 
        },
        { name: 'Windhoek', state_name: 'Angola', state_id: 5, location: {
            lat: -22.576654, 
            lng: 17.102667
        } 
        },
        { name: 'Windhoek', state_name: 'Congo, Democratic Rep.', state_id: 41, location: {
            lat: -22.576654, 
            lng: 17.102667
        } 
        },
        { name: 'Windhoek', state_name: 'Congo  ', state_id: 40, location: {
            lat: -22.576654, 
            lng: 17.102667
        } 
        },

        { name: 'Yangon', state_name: 'Myanmar', state_id: 117, location: {
            lat: 16.789261, 
            lng: 96.140373
        } 
        },

        { name: 'Zagreb', state_name: 'Croatia', state_id: 45, location: {
            lat: 45.826553, 
            lng: 15.972522
        } 
        },

        { name: 'Kuching', state_name: 'Sarawak', state_id: 148, location: {
            lat: 1.533069, 
            lng: 110.359137
        } 
        },

        { name: 'Kota Kinabalu', state_name: 'Sabah', state_id: 144, location: {
            lat: 6.028236, 
            lng: 116.118130
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