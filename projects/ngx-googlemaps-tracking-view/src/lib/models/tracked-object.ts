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
  /**
   * A google map's icon object
   */
  icon?: google.maps.Icon | google.maps.Symbol,
  /**
   * If `true`, the default marker (circle or triangle) will be outlined instead of solid
   */
  isOffline?: boolean;
  /**
   * A google maps label object to show near the marker
   */
  label?: google.maps.MarkerLabel,
  /**
   * Position of the object on the map
   */
  position: google.maps.LatLng;
  /**
   * Scale for default markers. This is overwritten when `icon` is provided
   */
  scale?: number,
  /**
   * If this value is not provided or is greater than 0 a triangle oriented towards
   * `heading` will be shown as marker. Otherwise, a circle (if `icon` is no set)
   */
  speed?: number;
}