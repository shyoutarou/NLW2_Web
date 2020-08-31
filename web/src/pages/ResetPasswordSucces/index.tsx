import React from 'react'
import Success from '../../components/Success'

const ResetPasswordSucces = () => {
    return (
        <Success navigate="/" 
        button="Voltar ao login" 
        description="Sua nova senha já pode ser usada!" 
        title="Reset de senha concluído!" />
    )
}

export default ResetPasswordSucces