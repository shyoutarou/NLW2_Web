import React, { FormEvent, useContext, useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import WrapperContent from '../../components/WrapperContent'
import LogoContainer from '../../components/LogoContainer'
import Input from '../../components/Input'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import { useAuth } from '../../contexts/auth'
import api from '../../services/api'
import { toast } from 'react-toastify'

import './styles.css'


function SignIn() {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  
  const { signed, user, signIn, handleToggleRemember } = useAuth();
  const history = useHistory();

  useEffect(() => {
      const token = localStorage.getItem('@proffy:token');

      if (token) {
          api.defaults.headers.common['Authorization'] = token;
          history.push('/study');
      }
  }, [])

  async function handleSignIn(e: FormEvent) {
    e.preventDefault()

    try {
      if (isAble()) {

        const response = await signIn( email, password);
      }
    } catch (err) {
        toast.error('Ocorreu um erro ao fazer login, cheque as credenciais');
    }
  }

  function isAble() {
    return email !== '' && password !== ''
  }

  return (
    <div id="page-login">
      <WrapperContent className="page-content-right">
        <LogoContainer />
        <div className="login-container">
          <form className="form-80" onSubmit={(e) => handleSignIn(e)}>
            <fieldset>
              <legend>
                <p>Fazer login</p>
                <Link to="/signup">Criar uma conta</Link>
              </legend>
              <Input
                name="email"
                type="email"
                placeholder="E-mail"
                // stacked={true}
                value={String(email)}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
                <div className="form-input">    
                    <Input
                      name="password"
                      eye="true"
                      placeholder="Senha"
                      // stacked={true}
                      value={String(password)}
                      onChange={(e) => {
                        setPassword(e.target.value)
                      }}
                    />
                </div>    
                <div className="login-tools">
                <div>
                    <input onChange={handleToggleRemember} type="checkbox" name="remember"/>
                    <label htmlFor="remember">Remember</label>
                </div>
                <Link to="/forgot-password">Esqueci minha senha</Link>
              </div>
              <button
                className={`login-submit ${isAble() && 'login-submit-active'}`}
                disabled={!isAble()}
                type="submit"
              >
                Entrar
              </button>
            </fieldset>
            <div className="login-footer">
              <div className="signup">
                <p>Não tem conta?</p>
                <Link to="/signup">Cadastre-se</Link>
              </div>
              <span>
                É de graça <img src={purpleHeartIcon} alt="Coração roxo" />
              </span>
            </div>
          </form>
        </div>
      </WrapperContent>
    </div>
  )
}

export default SignIn
