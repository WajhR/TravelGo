import React, { useMemo, useState } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api"
import usePlacesAutoComplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption
} from "@reach/combobox";
import "../styles/Map.css"
import Header from "../components/Header";
import Footer from "../components/Footer"

export default function MapSearch () {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyA-0KoefcNiuHM6oWPJvCgSePDX2TEbx1I",
        libraries: ["places"],
    });

    if(!isLoaded) return <div>Loading...</div>
    return <Map />
}

function Map() {
    const center = useMemo(() => ({lat: 39.833851, lng: -74.871826}), []);
    const [selected, setSelected] = useState(null)

    
    return (
        <>
            <Header />
            <h1 className="map-title">Search For A Place To Go!</h1>
            <section className="map-wrapper">
                <div className="places-container">
                    <PlacesAutocomplete setSelected={setSelected} />
                </div>

                <GoogleMap
                zoom={2}
                center={center}
                mapContainerClassName="map-container"
                >
                {selected && <MarkerF position={selected}/>}

                </GoogleMap>

            </section>
        </>
    )
}

const PlacesAutocomplete = ({ setSelected }) => {
    const {
        ready,
        value,
        setValue,
        suggestions: {status, data},
        clearSuggestions
    } = usePlacesAutoComplete()
    
    const handleSelect = async (address) => {
        setValue(address, false);
        clearSuggestions();

        const results = await getGeocode({ address });
        const {lat, lng} = await getLatLng(results[0]);
        setSelected({ lat, lng })
    }
    
    return <Combobox onSelect={handleSelect}>
        <ComboboxInput value={value} 
        onChange={(e) => setValue(e.target.value)} 
        disabled={!ready}
        className="combobox-input" 
        placeholder="Search" />
        <ComboboxPopover className="combobox-popover">
            <ComboboxList className="listbox">
                {status === "OK" && 
                data.map(({place_id, description}) => <ComboboxOption 
                key={place_id} value={description} />)}
            </ComboboxList>
        </ComboboxPopover>
    </Combobox>
}