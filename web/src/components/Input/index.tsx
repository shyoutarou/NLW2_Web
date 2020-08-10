import React, {InputHTMLAttributes} from 'react';
import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>  {
    label?: string;
    name: string;
    placeholder?: string;
  }

const Input: React.FC<InputProps> = ({label, name, ...rest}) => 
{
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" {...rest} id={name}></input>
        </div>
    )
}

export default Input;