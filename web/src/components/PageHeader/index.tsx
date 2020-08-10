import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import logoimg from '../../assets/images/logo.svg';
import backicon from '../../assets/images/icons/back.svg';

interface PageHeaderProps {
    title: string;
    description?: string;
  }
  
const PageHeader: React.FC<PageHeaderProps> = (propriedade) => 
{
    return (
        <header className="page-header">
            <div className="top-bar-container">
              <Link to="/">
                <img src={backicon} alt="Voltar" />
              </Link>
              <img src={logoimg} alt="Proffy" />
            </div>
            <div className="header-content">
              <strong> {propriedade.title} </strong>
              {propriedade.description? <p>{propriedade.description}</p> : null}
              {propriedade.children}
            </div>
        </header>
    )
}

export default PageHeader;