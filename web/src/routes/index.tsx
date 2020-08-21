import React from 'react';
// import Loader from 'react-loader-spinner'
import AppRoutes from './AppRoutes';
import AuthRoutes from './AuthRoutes';
import { useAuth } from '../contexts/auth';


const Routes: React.FC = () => {

        const { signed, loading  } = useAuth();
        console.log("Routes:" + signed);

        // if (loading) {
        //     return (
        //         <Loader type="Puff" color="#00BFFF" height={100}
        //                 width={100} timeout={3000} //3 secs
        //         />
        //     );
        // }

        return signed ? <AppRoutes/> : < AuthRoutes />;
  };
  
  export default Routes;