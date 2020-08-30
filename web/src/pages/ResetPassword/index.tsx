import React, { FormEvent, useContext, useState } from 'react'
import { Link, useHistory, useLocation, useParams } from 'react-router-dom'

import Input from '../../components/Input'
import WrapperContent from '../../components/WrapperContent'
import LogoContainer from '../../components/LogoContainer'

import backicon from '../../assets/images/icons/back.svg';
import './styles.css'
import api from '../../services/api'
import { toast } from 'react-toastify'


function ResetPassword() {

  // function useQuery() {
  //   return new URLSearchParams(useLocation().search)
  // }
  
  const history = useHistory();
  const { id, token } = useParams();
  // const [token, setToken] = useState<string>(useQuery().get('token') || '')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  
  function handleCreateAccount(e: FormEvent){
    e.preventDefault();

    if (isAble() && password === confirmPassword) {

console.log(id)
console.log(password)
console.log(token)

        api.post(`resetPassword/${id}`, {
          password,
          token,
        }).then(() => {

            toast.success(
                "Sua senha acaba de ser redefinida.",
              );
              
              history.push('/reset-password-success')
        }).catch((error) =>{
            toast.error(error.message + 'Ocorreu um erro ao fazer a alteração');
        })
    } else {
      toast.error("Suas senhas não batem.")
    }
}

  

  function isAble() {
    return token !== '' && password !== ''
  }

  return (
    <div id="page-signup">
      <WrapperContent className="page-content-left">

        <LogoContainer />
        <div className="signup-container">
          <div className="top-bar-container">
              <Link to="/">
                <img src={backicon} alt="Voltar" />
              </Link>
          </div>
          <form
            className="form-80"
            onSubmit={(event) => handleCreateAccount(event)}
          >
            <fieldset>
              <legend>
                  <p>Redefinição de Senha</p>
              </legend>
              <span>Preencha os dados abaixo para redefinir sua senha.</span>

              <Input
                name="password"
                placeholder="Senha"
                eye="true"
                value={String(password)}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />
              <Input
                  name="confirm-password"
                  placeholder="Confirme a senha"
                  eye="true"
                  value={String(confirmPassword)}
                  onChange={(e) => {
                  setConfirmPassword(e.target.value)
                  }}
              />              
              <button
                className={`signup-submit ${isAble() && 'signup-submit-active'}`}
                disabled={!isAble()}
                type="submit"
              >
                      Resetar senha
              </button>
            </fieldset>
          </form>
        </div>
      </WrapperContent>
    </div>
  )
}

export default ResetPassword
