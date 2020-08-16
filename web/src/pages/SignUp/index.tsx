import React, { FormEvent, useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import Input from '../../components/Input'
import WrapperContent from '../../components/WrapperContent'
import LogoContainer from '../../components/LogoContainer'

import backicon from '../../assets/images/icons/back.svg';
import './styles.css'
import api from '../../services/api'
import { toast } from 'react-toastify'

// import { AuthContext } from '../../contexts/auth'

function SignUp() {
//   const { register } = useContext(AuthContext)

  const [name, setName] = useState<string>('')
  const [surname, setSurname] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const history = useHistory();
  
  async function handleCreateUser(e: FormEvent) {
    e.preventDefault()
    if (isAble()) {
      await api.post('register', {
        name,
        surname,
        email,
        password
        }).then(() => {

            toast.success(
              'Cadastro realizado com sucesso!',
            );

            history.push('/');
        }).catch(() =>{
          toast.error('Ocorreu um erro ao fazer o cadastro');
        })
    }
  }

  function isAble() {
    return name !== '' && surname !== '' && email !== '' && password !== ''
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
            onSubmit={(event) => handleCreateUser(event)}
          >
            <fieldset>
              <legend>
                <p>Cadastro</p>
              </legend>
              <span>Preencha os dados abaixo para começar.</span>
              <Input
                name="name"
                placeholder="Nome"
                // stacked={true}
                value={String(name)}
                onChange={(e) => {
                  setName(e.target.value)
                }}
              />
              <Input
                name="surname"
                placeholder="Sobrenome"
                // stacked={true}
                value={String(surname)}
                onChange={(e) => {
                  setSurname(e.target.value)
                }}
              />
              <Input
                name="email"
                placeholder="E-mail"
                type="email"
                // stacked={true}
                value={String(email)}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
              <Input
                name="password"
                placeholder="Senha"
                type="password"
                // stacked={true}
                value={String(password)}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />
              <button
                className={`signup-submit ${isAble() && 'signup-submit-active'}`}
                disabled={!isAble()}
                type="submit"
              >
                Concluir cadastro
              </button>
            </fieldset>
          </form>
        </div>
      </WrapperContent>
    </div>
  )
}

export default SignUp
