import React, { useState } from 'react';
import Autorizados from './Autorizado';
import NaoAutorizados from './NaoAutorizados';


const Routes: React.FC = () => {
    const [signed, setsigned] = useState(true);
    
    return signed ? <Autorizados /> : <NaoAutorizados />;
  };
  
  export default Routes;