import React from "react";
import GoogleMapReact from "google-map-react";
import styles from './Map.module.css'

// @ts-ignore
const AnyReactComponent = ({ text }) => <div className={styles.marker}>{text}</div>;

export const Map=()=>{
    const defaultProps = {
        center: {
            lat: 41.3888,
            lng: 2.15899
        },
        zoom: 11
    };

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    // @ts-ignore
                    lat={41.3888}
                    lng={2.15899}
                    text="Were are here"
                />
            </GoogleMapReact>
        </div>
    );
}