import React from 'react'
import FullContent from '../../components/FullContent'

const Notify: React.FunctionComponent = () => {
  return (
    <FullContent
      title="Cadastro concluído"
      message="Agora você faz parte da plataforma da Proffy.
Tenha uma ótima experiência."
      link={{ url: '/', text: 'Fazer login' }}
    />
  )
}

export default Notify