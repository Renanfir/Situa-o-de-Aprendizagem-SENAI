import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
// Corrigir ícones do Leaflet
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const Map = () => {
  const data = [
    { x: -26.90681606292469, y: -49.0757031420956 },
    { x: -26.898576501483145, y: -49.12902765776637 },
    { x: -26.904365765010386, y: -49.09215376996072 },
    { x: -26.91117012900676, y: -49.094529922710805 },
    { x: -26.915195648942653, y: -49.08573510224919 },
    { x: -26.911524007919226, y: -50.10272390593357 },
    { x: -26.920210361502168, y: -49.06853167067502 },
    { x: -26.882149519055652, y: -49.060421760802775 },
    { x: 30.911524007919226, y: 40.10272390593357 },
    { x: 8.911524007919226, y: 99.10272390593357 },
    { x: 75.911524007919226, y: -24.10272390593357 },
    { x: 40.911524007919226, y: -100.10272390593357 },
    { x: -39.83887401646163, y: -73.20411593846141 },
  ];

  return (
    <MapContainer
      center={["-26.909012", "-49.138423"]}
      zoom={10}
      scrollWheelZoom={false}
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data.map((fab, index) => (
        <Marker key={fab.x} position={[fab.x, fab.y]}>
          <Popup>{index}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
