/// <reference types="@types/googlemaps" />

/**
 * Interface that tracked objects must implement
 */
export interface TrackedObject {
  color?: string;
  /** In degrees from north */
  heading?: number;
  id: string;
  name?: string;
  isOnline?: boolean;
  position: google.maps.LatLng;
  speed?: number;
}