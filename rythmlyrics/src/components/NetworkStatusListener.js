import React, { useEffect } from 'react';

const NetworkStatusListener = () => {
  useEffect(() => {
    const handleOnline = () => {
      // Reload or refresh the app
      window.location.reload();
    };

    const handleOffline = () => {
      // Handle offline state if needed
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return null;
};

export default NetworkStatusListener;