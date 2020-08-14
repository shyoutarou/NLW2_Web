import React, { FormEvent, useContext, useState } from 'react'
import Input from '../../components/Input'
import WrapperContent from '../../components/WrapperContent'
import LogoContainer from '../../components/LogoContainer'
import './styles.css'
import { Link } from 'react-router-dom'
// import { AuthContext } from '../../contexts/auth'

function SignUp() {
//   const { register } = useContext(AuthContext)

  const [name, setName] = useState<string>('')
  const [surname, setSurname] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  async function handleCreateUser(e: FormEvent) {
    e.preventDefault()
    if (isAble()) {
    //   await register({ name, email, password, surname })
      window.location.href = '/'
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
        <Link to="/signin">Sign In</Link>
        <Link to="/forgot-password">Esqueci minha senha</Link>
          {/* <form
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
                className={`login-submit ${isAble() && 'login-submit-active'}`}
                disabled={!isAble()}
                type="submit"
              >
                Concluir cadastro
              </button>
              <Link to="/forgot-password" className="teste-button">
                    forgot-password
              </Link>
              <Link to="/signin" className="teste-button">
                    signin
              </Link>
            </fieldset>
          </form> */}
        </div>
      </WrapperContent>
    </div>
  )
}

export default SignUp
