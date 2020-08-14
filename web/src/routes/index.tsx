import React, { useState } from 'react';
import AppRoutes from './AppRoutes';
import AuthRoutes from './AuthRoutes';
import { useAuth } from '../contexts/auth';


const Routes: React.FC = () => {

      const { signed, signIn, handleToggleRemember } = useAuth();
      console.log(signed);

      return signed ? <AppRoutes/> : < AuthRoutes />;
  };
  
  export default Routes;