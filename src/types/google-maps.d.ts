declare namespace google.maps {
  interface Map {
    setCenter(latLng: LatLng | LatLngLiteral): void;
    setZoom(zoom: number): void;
  }

  interface LatLng {
    lat(): number;
    lng(): number;
  }

  interface LatLngLiteral {
    lat: number;
    lng: number;
  }

  interface Marker {
    setMap(map: Map | null): void;
    setPosition(latLng: LatLng | LatLngLiteral): void;
  }

  interface MapsLibrary {
    Map: new (
      mapDiv: Element,
      opts?: MapOptions
    ) => Map;
    Marker: new (opts?: MarkerOptions) => Marker;
  }

  interface MapOptions {
    center?: LatLng | LatLngLiteral;
    zoom?: number;
    styles?: MapTypeStyle[];
  }

  interface MapTypeStyle {
    featureType?: string;
    elementType?: string;
    stylers?: MapTypeStyler[];
  }

  interface MapTypeStyler {
    color?: string;
    lightness?: number;
    saturation?: number;
    weight?: number;
    visibility?: string;
  }

  interface MarkerOptions {
    position?: LatLng | LatLngLiteral;
    map?: Map;
    title?: string;
  }
} 