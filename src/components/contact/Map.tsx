import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function Map() {
    useEffect(() => {
        const map = L.map("mapid").setView([-23.013104, -43.394365], 13);

        L.tileLayer(
            "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
            {
                maxZoom: 18,
                attribution:
                    'Zay Template | Template Design by <a href="https://templatemo.com/">Templatemo</a> | Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                id: "mapbox/streets-v11",
                tileSize: 512,
                zoomOffset: -1,
            }
        ).addTo(map);

        L.marker([-23.013104, -43.394365]).addTo(map).bindPopup("<b>Zay</b> eCommerce<br />Location.").openPopup();

        map.scrollWheelZoom.disable();
        map.touchZoom.disable();

        // Cleanup on unmount
        return () => {
            map.remove();
        };
    }, []);

    return <div className="w-full h-[300px] rounded-md shadow-md overflow-hidden" id="mapid"></div>;
}

export default Map;
