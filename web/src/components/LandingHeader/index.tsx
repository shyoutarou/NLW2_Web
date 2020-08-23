import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../contexts/auth';
import signout from '../../assets/images/icons/signout.svg';
import leaveIcon from '../../assets/images/icons/leave.svg'
// import { PowerOff } from '@styled-icons/boxicons-regular';
// import { User } from '@styled-icons/fa-solid';

import './styles.css';

const LandingHeader: React.FC = () => {
  const { user, signOut } = useAuth();
  
  const history = useHistory();

  const handleProfile = () => {
    history.push('/profile');
  };

  return (
    <div className="header-container">
      <div className="information-container">
        {user && (
          <main onClick={handleProfile} className="profile">
            <section className="image">
              {user && user.avatar ? (
                <img
                  src={user.avatar}
                  alt="Avatar"
                />
              ) : (
                <div className="default-image">
                  <div className="user-icon"></div>
                </div>
              )}
            </section>
            <span className="logged-as">
                {user ? user.name : 'Guest'} 
            </span>          
          </main>
        )}

        <div  className="options">
          <div onClick={signOut}>
            <img src={leaveIcon} alt="Sign Out"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHeader;
