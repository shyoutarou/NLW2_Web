import React from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../contexts/auth';
import signout from '../../assets/images/icons/signout.svg';
// import { PowerOff } from '@styled-icons/boxicons-regular';
// import { User } from '@styled-icons/fa-solid';

import './styles.css';

const LandingHeader: React.FC = () => {
const { user, signOut } = useAuth();
  
  const history = useHistory();

  const handleProfile = () => {
    history.push('/profile', {
      user,
    });
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
                  {/* <User className="user-icon" /> */}
                </div>
              )}
            </section>
            <span className="logged-as">
                {user ? user.name : 'Guest'} 
                <div  className="options">
                  <div onClick={signOut}>
                    <img src={signout} alt="Sign Out"/>
                  </div>
                </div>
            </span>          
          </main>
        )}

        {/* <div className="options">
          <div onClick={signOut} className="eye">
              <img src={signout} alt="Sign Out"/>
          </div>
          <div onClick={signOut}>
            <PowerOff className="logout-icon" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default LandingHeader;
