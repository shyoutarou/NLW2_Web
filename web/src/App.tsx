import React from 'react';
import { ToastContainer } from 'react-toastify';
import './assets/styles/global.css';
import Routes from './routes';
import { AuthProvider } from './contexts/auth';

import 'react-toastify/dist/ReactToastify.css';
import './assets/styles/global.css';

function App() {
  return (
    <>
      <ToastContainer />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
}

export default App;
