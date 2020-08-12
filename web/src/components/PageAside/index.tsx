import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import logoimg from '../../assets/images/logo.svg';
import backicon from '../../assets/images/icons/back.svg';

interface PageAsideProps {
    title: string;
    description?: string;
    voltar?: boolean;
  }
  
const PageAside: React.FC<PageAsideProps> = (propriedade) => 
{
    return (
        <header className="aside-header">
            <div className="top-bar-container">
              <Link to="/">
                <img src={backicon} alt="Voltar" />
              </Link>
              <img src={logoimg} alt="Proffy" />
            </div>
            <div className="aside-content">
              <strong> {propriedade.title} </strong>
              {propriedade.description? <p>{propriedade.description}</p> : null}
              {propriedade.children}
            </div>
        </header>
    )
}

export default PageAside;