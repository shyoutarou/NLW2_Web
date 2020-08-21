import React, {InputHTMLAttributes, useState} from 'react';
import './styles.css';
import { FiEye, FiEyeOff } from 'react-icons/fi';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>  {
    eye?: string;
    label?: string;
    name: string;
    placeholder?: string;
  }

const Input: React.FC<InputProps> = ({eye, label, name, ...rest}) => 
{
    const [visible, setVisible] = useState(false)

    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type={ visible || !eye ? "text" : "password"}
                   {...rest} id={name}></input>
            {eye? 
            <div onClick={() => {setVisible(!visible)}} className="eye">
                {visible ? <FiEye color="#8257e5" size={20} /> :
                <FiEyeOff color="#8257e5" size={20} />}
            </div>
            : null}
        </div>
    )
}

export default Input;