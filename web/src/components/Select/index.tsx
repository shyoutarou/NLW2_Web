import React, {SelectHTMLAttributes} from 'react';
import './styles.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>  {
    name: string;
    label: string;
    options: Array<{
        id: string, value: string
    }>;
  }

const Select: React.FC<SelectProps> = ({label, name, options, ...rest}) => 
{
    return (
        <div className="select-block">
            <label htmlFor={name}>{label}</label>

            <select id={name} {...rest} >
                <option value="" disabled hidden >
                    Selecione um opção
                </option>
                {options.map(option => {
                    return <option key={option.id} 
                    value={option.id}>{option.value}</option>
                })}
            </select>
        </div>
    )
}

export default Select;