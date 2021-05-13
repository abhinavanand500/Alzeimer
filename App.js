import React from 'react';
import Providers from './navigation';
import {Provider as AuthProvider} from './context/AuthContext';
import {Provider as LocationProvider} from './context/LocationContext';
const App = () => {
  return (
    <LocationProvider>
      <AuthProvider>
        <Providers />
      </AuthProvider>
    </LocationProvider>
  );
};

export default App;
