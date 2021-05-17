import React from 'react';
import Providers from './navigation';
import {Provider as AuthProvider} from './context/AuthContext';
import {Provider as LocationProvider} from './context/LocationContext';
import {Provider as TrackProvider} from './context/TrackContext';
const App = () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <Providers />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};

export default App;
