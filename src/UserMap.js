import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
function UserMap({ apiKey, lat, lng, name, google }) {
    return (
        <div style={{ height: '200px' }}>
            <Map google={google} zoom={11} style={{ width: '95%', height: '200px' }}>
                <Marker name={name} position={{ lat, lng }} />
                <InfoWindow>
                    <div>
                        <h1>{name}</h1>
                    </div>
                </InfoWindow>
            </Map>
        </div>
    );
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyCjJHN2J8qRb7g0YVkrZnuqTxad8hPpgKM'
})(UserMap)