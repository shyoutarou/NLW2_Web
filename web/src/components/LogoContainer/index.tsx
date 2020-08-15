import React from 'react'

import logoImg from '../../assets/images/logo.svg'
import squaredBgImg from '../../assets/images/squared-background.svg'

import './styles.css'

const logoContainerStyle = {
  backgroundImage: `url(${squaredBgImg})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  zIndex: 0,
}

const LogoContainer: React.FunctionComponent<{ background?: boolean }> = ({
  background = true,
}) => {
  return (
    <div className="logocontain-container">
      {background && (
        <div className="logo-bg-container" style={logoContainerStyle} />
      )}
      <div className="logo-hero">
        <img src={logoImg} alt="Proffy" />
        <h2>Sua plataforma de estudos online.</h2>
      </div>
    </div>
  )
}

export default LogoContainer