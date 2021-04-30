import React from 'react';
import Providers from './navigation';
import {Provider as AuthProvider} from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Providers />
    </AuthProvider>
  );
};

export default App;
