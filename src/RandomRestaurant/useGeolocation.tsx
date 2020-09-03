import { useEffect, useState } from 'react';

export interface Coords {
    latitude: number;
    longitude: number;
}

export default function useGeolocation (maximumAge: number = 0, timeout: number = 5000) {
    const [coords, setCoords] = useState({
        latitude: 0,
        longitude: 0,
    } as Coords);
    const [isPending, setPending] = useState(false);

    useEffect(() => {
        if (!isPending) return;
        console.log(isPending)
        
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(resolve, reject, {
                    enableHighAccuracy: true,
                    timeout,
                    maximumAge,
            });
        }
        else {
            throw new ReferenceError('瀏覽器不支援 Geolocation 功能！');
        }

        function resolve ({ coords: { latitude, longitude } }: { coords: Coords }) {
            setCoords({ latitude, longitude });
            setPending(false);
        }

        function reject (err: PositionError) {
            throw err;
        }

    }, [maximumAge, timeout, isPending]);

    return { coords, isPending, startGeolocation: () => setPending(true) };
}