import React from 'react';
import Select from '../Select';

const SelectWeekday = ({ ...rest }) => {

    return (
        <Select name="week_day" label="Dia da semana" {...rest}
                                    
            options={[
                { id: '0', value: 'Domingo' },
                { id: '1', value: 'Segunda-feira' },
                { id: '2', value: 'Terça-feira' },
                { id: '3', value: 'Quarta-feira' },
                { id: '4', value: 'Quinta-feira' },
                { id: '5', value: 'Sexta-feira' },
                { id: '6', value: 'Sábado' }
        ]} />
    )
}

export default SelectWeekday