import React, { useState, useEffect } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import logoimg from '../../assets/images/logo.svg';
import backicon from '../../assets/images/icons/back.svg';
import rocket from '../../assets/images/icons/rocket.svg'
import smile from '../../assets/images/icons/smile.svg'
import api from '../../services/api';

interface PageHeaderProps {
    title: string;
    description?: string;
    uppertitle?: string;
    logo?: boolean;
    icon?: string;
  }
  
const PageHeader: React.FC<PageHeaderProps> = (propriedade) => 
{
    const [teachers, setTeachers] = useState(0);
    const sessiontoken = sessionStorage.getItem('@proffy:token')

    useEffect(() => {

      if(sessiontoken && propriedade.icon === "smile") {

          api.get('allteachers').then(response => {
            setTeachers(response.data.total);
          });
        }    

    }, [sessiontoken, propriedade.icon]);
    
    return (
        <header className="page-header">
            <div className={`holder-top-bar ${propriedade.uppertitle && 'holder-dark'}`}>
              <div className="top-bar-container">
                <Link to="/">
                  <img src={backicon} alt="Voltar" />
                </Link>
                {propriedade.uppertitle? <p>{propriedade.uppertitle}</p> : null}
                <img src={logoimg} alt="Proffy" />
              </div>
            </div>
            <div className="header-content">
              {propriedade.logo? <p><img src={logoimg} alt="Proffy"/></p> : null}
              <div className="header-description">
                <strong> {propriedade.title} </strong>
                {propriedade.description? <p>{propriedade.description}</p> : null}
                {propriedade.icon? 
                  <div className="message-header">
                    <img src={propriedade.icon === "smile" ? smile : rocket } 
                        alt={propriedade.icon === "smile" ? "smile" : "rocket" }/>
                        {propriedade.icon === "smile" ? 
                            <h4>
                              Nós temos {teachers} <br /> professores.
                            </h4>
                            :
                            <h4>Prepare-se! Vai ser o máximo</h4>
                        }
                  </div>
                  : null}    
              </div>
              {propriedade.children}
            </div>
          
        </header>
    )
}

export default PageHeader;