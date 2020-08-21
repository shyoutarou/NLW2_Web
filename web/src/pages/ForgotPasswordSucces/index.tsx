import React from 'react'
import Success from '../../components/Success'

const ForgotPasswordSuccess = () => {
    return (
        <Success navigate="/" 
        button="Voltar ao login" 
        description="Boa, agora é só checar o e-mail que foi enviado para você redefinir sua senha e aproveitar os estudos." 
        title="Redefinição enviada!" />
    )
}

export default ForgotPasswordSuccess