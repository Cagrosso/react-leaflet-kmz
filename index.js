import React from "react";
import { MapLayer, withLeaflet } from "react-leaflet";
import L from "leaflet";
import "leaflet-kmz";

class ReactLeafletKmz extends MapLayer {
  createLeafletElement({ children, leaflet: { map }, ...props }) {
    const { kmzUrl } = props;

    if (!map) {
      throw Error("Leaflet map undefined!");
    }

    const layer = L.kmzLayer();

    layer.addTo(map);

    layer.add(kmzUrl);

    this.leaflet = layer;

    return this.createLeafletElement;
  }
}

export default withLeaflet(ReactLeafletKmz)
