import React, { useState, FormEvent } from 'react'
import { Link, useHistory } from 'react-router-dom'

import Input from '../../components/Input'
import WrapperContent from '../../components/WrapperContent'
import LogoContainer from '../../components/LogoContainer'

import backicon from '../../assets/images/icons/back.svg';

import './styles.css'
import api from '../../services/api'
import { toast } from 'react-toastify'

function ForgotPassword() {

  const [email, setEmail] = useState<string>('')
  const history = useHistory()
  
  function isAble() {
    return email !== '' 
  }

  const handleReset = async (e: FormEvent) => {
    e.preventDefault()

    try {
        await api.post('/resetpassword', {
            email
        })
    } catch(e) {
      toast.error('Email inexistente!');
    }

      history.push('/forgot-password-success')
  }

  return (
    <div id="page-forgot">
      <WrapperContent className="page-content-left">
        <LogoContainer />
        <div className="forgot-container">
            <div className="top-bar-container">
              <Link to="/">
                <img src={backicon} alt="Voltar" />
              </Link>
            </div>
            <form onSubmit={handleReset} className="form-80">
              <fieldset>
                <legend>
                  <p>Eita, esqueceu sua senha?</p>
                </legend>
                <span>Não esquenta, vamos dar um jeito nisso.</span>
                <Input name="email" 
                  placeholder="E-mail" 
                  type="email"
                  value={String(email)}
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                />
                <button
                  className={`forgot-submit ${isAble() && 'forgot-submit-active'}`}
                  disabled={!isAble()}
                  type="submit"
                >
                  Enviar
                </button>
              </fieldset>
            </form>
        </div>
      </WrapperContent>
    </div>
  )
}

export default ForgotPassword