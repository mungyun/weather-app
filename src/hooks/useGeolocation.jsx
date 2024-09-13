import { useState, useEffect } from "react";

const useGeolocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const success = (position) => {
      const { latitude, longitude } = position.coords;
      setLocation({ latitude, longitude });
    };

    const error = (err) => {
      setError(err.message);
    };

    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  return { location, error };
};

export default useGeolocation;
