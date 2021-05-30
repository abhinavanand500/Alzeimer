import React from 'react';
import Providers from './navigation';
import {Provider as AuthProvider} from './context/AuthContext';
import {Provider as LocationProvider} from './context/LocationContext';
import {Provider as TrackProvider} from './context/TrackContext';
import {Provider as UserProvider} from './context/UserContext';
const App = () => {
  return (
    <UserProvider>
      <TrackProvider>
        <LocationProvider>
          <AuthProvider>
            <Providers />
          </AuthProvider>
        </LocationProvider>
      </TrackProvider>
    </UserProvider>
  );
};

export default App;
