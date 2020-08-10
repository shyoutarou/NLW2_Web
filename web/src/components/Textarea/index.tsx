import React, {TextareaHTMLAttributes} from 'react';
import './styles.css';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>  {
    label: string;
    name: string;
  }

const Textarea: React.FC<TextareaProps> = ({label, name, ...rest}) => 
{
    return (
        <div className="textarea-block">
            <label htmlFor={name}>{label}</label>
            <textarea {...rest} id={name}></textarea>
        </div>
    )
}

export default Textarea;