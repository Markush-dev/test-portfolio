import { useEffect, useState } from 'react';

export function useLocationChange() {
  const [currentUrl, setCurrentUrl] = useState(getHashValue());

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentUrl(getHashValue());
    };

    window.addEventListener('popstate', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  return currentUrl;
}

export function getHashValue() {
  const hash = window.location.hash;
  return hash ? hash.substring(1).replace(/^\//, '') : '';
}
