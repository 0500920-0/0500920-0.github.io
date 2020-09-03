import { Coords } from './useGeolocation';

/**
 * Get the distance between two location.
 * Ref: https://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula
 */
export default function getDistance (point1: Coords, point2: Coords, radius = 6371000) {
    const toRad = (deg: number) => Math.PI * deg / 180;
    const [lat1, lat2, long1, long2] = [point1.latitude, point2.latitude, point1.longitude, point2.longitude].map(toRad);
    const delta_lat = lat2 - lat1;
    const delta_long = long2 - long1;

    const a = Math.sin(delta_lat / 2) ** 2 +
        Math.cos(lat1) * Math.cos(lat2) * Math.sin(delta_long / 2) ** 2
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return radius * c;
};