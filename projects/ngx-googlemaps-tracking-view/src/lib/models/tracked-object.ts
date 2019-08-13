/// <reference types="@types/googlemaps" />

/**
 * Interface that tracked objects must implement
 */
export interface TrackedObject {
  color?: string;
  /** In degrees from north */
  heading: number;
  id: string;
  name?: string;
  icon?: google.maps.Icon | google.maps.Symbol,
  isOnline?: boolean;
  position: google.maps.LatLng;
  speed?: number;
}