/// <reference types="@types/googlemaps" />

/**
 * Interface that tracked objects must implement
 */
export interface TrackedObject {
  color?: string;
  /**
   * Direction measured in degrees from true north
   */
  heading: number;
  /**
   * Unique identifier assigned to this object
   */
  id: string;
  icon?: google.maps.Icon | google.maps.Symbol,
  /**
   * If `true`, the default marker (circle or triangle) will be outlined instead of solid
   */
  isOffline?: boolean;
  /**
   * Label to show near the marker
   */
  label?: {
    text: string,
    color?: string
  }
  position: google.maps.LatLng;
  /**
   * Scale for default markers. This is overwritten when `icon` is provided
   */
  scale?: number,
  /**
   * If this value is not provided or is greater than 0 a triangle oriented towards
   * `heading` will be shown as marker. Otherwise, a circle
   */
  speed?: number;
}